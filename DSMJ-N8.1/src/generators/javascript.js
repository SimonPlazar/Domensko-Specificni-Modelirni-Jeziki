/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['start_block'] = function (block, generator) {
    const startBlock = generator.provideFunction_(
        'startBlock',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
                  console.log('Start block');
                }`,
    );
    const code = `${startBlock}();\n`;
    return code;
};

forBlock['add_text'] = function (block, generator) {
    const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
    const addText = generator.provideFunction_(
        'addText',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {
                  // Add text to the output area.
                  const outputDiv = document.getElementById('output');
                  const textEl = document.createElement('p');
                  textEl.innerText = text;
                  outputDiv.appendChild(textEl);
                }`,
    );
    // Generate the function call for this block.
    const code = `${addText}(${text});\n`;
    return code;
};

forBlock['move_forward'] = function (block, generator) {
    const moveForward = generator.provideFunction_(
        'moveForward',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
                    moveForwardRobot();
                }`,
    );
    return `${moveForward}();\n`;
};

forBlock['move_backward'] = function (block, generator) {
    const moveBackward = generator.provideFunction_(
        'moveBackward',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
                    moveBackwardRobot();
                }`,
    );
    return `${moveBackward}();\n`;
};

forBlock['turn_left'] = function (block, generator) {
    const turnLeft = generator.provideFunction_(
        'turnLeft',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
                  turnLeftRobot();
                }`,
    );
    return `${turnLeft}();\n`;
}

forBlock['turn_right'] = function (block, generator) {
    const turnRight = generator.provideFunction_(
        'turnRight',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
                  turnRightRobot();
                }`,
    );
    return `${turnRight}();\n`;
};

forBlock['pick_color'] = function (block, generator) {
    const color = "'" + block.getFieldValue('COLOR') + "'" || "''";
    const setColor = generator.provideFunction_(
        'pickColor',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(color) {
                  pickColorRobot(color);
                }`,
    );
    return `${setColor}(${color});\n`;
};

forBlock['paint_square'] = function (block, generator) {
    const paintSquare = generator.provideFunction_(
        'paintSquare',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
                  paintSquareRobot();
                }`,
    );
    return `${paintSquare}();\n`;
}

forBlock['check_color'] = function (block, generator) {
    const color = block.getFieldValue('COLOR');
    return [`(currentColor() === '${color}')`, generator.ORDER_RELATIONAL];
};

