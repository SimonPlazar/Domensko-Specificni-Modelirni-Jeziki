/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const addText = {
    type: 'add_text',
    message0: 'Add text %1',
    args0: [
        {
            type: 'input_value',
            name: 'TEXT',
            check: 'String',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: '',
    helpUrl: '',
};

const moveForward = {
    "type": "move_forward",
    "message0": "Move forward",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
}

const moveBackward = {
    "type": "move_backward",
    "message0": "Move backward",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
}

const turnLeft = {
    "type": "turn_left",
    "message0": "Turn left",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
}

const turnRight = {
    "type": "turn_right",
    "message0": "Turn right",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
}

const pickColor = {
    "type": "pick_color",
    "message0": "Pick color %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "COLOR",
            "options": [
                ["red", "RED"],
                ["green", "GREEN"],
                ["blue", "BLUE"]
            ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
}

const paintSquare = {
    "type": "paint_square",
    "message0": "Paint square",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
}

const startBlock = {
    "type": "start_block",
    "message0": "Start",
    "nextStatement": null,
    "colour": 230,
    "tooltip": "This is the starting point for your program.",
};

const checkColorBlock  = {
    "type": "check_color",
    "message0": "Current color is %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "COLOR",
            "options": [
                ["red", "RED"],
                ["green", "GREEN"],
                ["blue", "BLUE"]
            ]
        }
    ],
    "output": "Boolean",  // Ensures the block returns a boolean value
    "colour": 230
};

// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    addText, moveForward, moveBackward, turnLeft, turnRight, pickColor, paintSquare, startBlock, checkColorBlock,
]);
