/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
export const runCode = () => {
    const startBlock = ws.getAllBlocks().find(block => block.type === 'start_block');

    if (!startBlock) {
        console.error('No start block found!');
        return;
    }

    console.log(startBlock);

    // javascriptGenerator.init(ws);
    // const code = javascriptGenerator.blockToCode(startBlock);
    const code = javascriptGenerator.workspaceToCode(ws);

    codeDiv.innerText = code;

    // outputDiv.innerHTML = '';

    robot = {...defaultRobot};
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            cell.style.backgroundColor = '';
            cell.classList.remove('painted');
        }
    }

    const asyncCode = `
        (async function() {
            ${code}
        })();
    `;

    eval(asyncCode);
};

// Load the initial state from storage and run the code.
load(ws);
//runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
    // UI events are things like scrolling, zooming, etc.
    // No need to save after one of these.
    if (e.isUiEvent) return;
    save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (
        e.isUiEvent ||
        e.type == Blockly.Events.FINISHED_LOADING ||
        ws.isDragging()
    ) {
        return;
    }
    //runCode();
});

// Game grid setup
const gridSize = 5;
const grid = document.getElementById('grid');

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}-${j}`;
        grid.appendChild(cell);
    }
}

document.getElementById('runButton').addEventListener('click', () => {
    runCode();
});

document.getElementById('exportXmlButton').addEventListener('click', () => {
    const workspaceDom = Blockly.Xml.workspaceToDom(ws);
    const xmlText = Blockly.Xml.domToPrettyText(workspaceDom);

    const blob = new Blob([xmlText], {type: 'text/xml'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blocks.xml';
    a.click();
    URL.revokeObjectURL(url);
});

// Robot state
const defaultRobot = {
    x: 0,
    y: 0,
    direction: 'EAST', // Possible values: NORTH, EAST, SOUTH, WEST
    color: null
};

const cellSize = 70;

let robot = {...defaultRobot};

const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST'];

function moveForwardRobot() {
    const {x, y, direction} = robot;
    switch (direction) {
        case 'NORTH':
            if (y > 0) robot.y--;
            break;
        case 'EAST':
            if (x < gridSize - 1) robot.x++;
            break;
        case 'SOUTH':
            if (y < gridSize - 1) robot.y++;
            break;
        case 'WEST':
            if (x > 0) robot.x--;
            break;
    }
    updateRobotPosition();
}

function moveBackwardRobot() {
    const {x, y, direction} = robot;
    switch (direction) {
        case 'NORTH':
            if (y < gridSize - 1) robot.y++;
            break;
        case 'EAST':
            if (x > 0) robot.x--;
            break;
        case 'SOUTH':
            if (y > 0) robot.y--;
            break;
        case 'WEST':
            if (x < gridSize - 1) robot.x++;
            break;
    }
    updateRobotPosition();
}

function turnLeftRobot() {
    robot.direction = directions[(directions.indexOf(robot.direction) + 1) % 4];
    updateRobotPosition();
}

function turnRightRobot() {
    robot.direction = directions[(directions.indexOf(robot.direction) + 3) % 4];
    updateRobotPosition();
}

function pickColorRobot(color) {
    robot.color = color;
    console.log(`Picked color ${color}`);
}

function paintSquareRobot() {
    if (robot.color) {
        const cell = document.getElementById(`cell-${robot.y}-${robot.x}`);
        cell.style.backgroundColor = robot.color;
        cell.classList.add('painted');
        console.log(`Painted (${robot.x}, ${robot.y}) with ${robot.color}`);
    } else {
        console.log('No color selected!');
    }
}

function updateRobotPosition() {
    console.log(`Robot is at (${robot.x}, ${robot.y}) facing ${robot.direction}`);

    const paintCan = document.getElementById('paintCan');
    paintCan.style.left = `${robot.x * cellSize}px`;
    paintCan.style.top = `${robot.y * cellSize}px`;
}

function currentColor() {
    return robot.color;
}
