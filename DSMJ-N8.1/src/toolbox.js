/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Movement',
            categorystyle: 'procedure_category',
            contents: [
                {
                    kind: 'block',
                    type: 'move_forward',
                },
                {
                    kind: 'block',
                    type: 'move_backward',
                },
                {
                    kind: 'block',
                    type: 'turn_left',
                },
                {
                    kind: 'block',
                    type: 'turn_right',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Logic',
            categorystyle: 'logic_category',
            contents: [
                {
                    kind: 'block',
                    type: 'start_block',
                },
                {
                    kind: 'block',
                    type: 'pick_color',
                },
                {
                    kind: 'block',
                    type: 'paint_square',
                },
                {
                    kind: 'block',
                    type: 'check_color',
                },
                {
                    kind: 'block',
                    type: 'controls_if',
                },
                {
                    kind: 'block',
                    type: 'logic_compare',
                },
                {
                    kind: 'block',
                    type: 'logic_negate',
                },
                {
                    kind: 'block',
                    type: 'logic_boolean',
                },
                {
                    kind: 'block',
                    type: 'logic_null',
                },
                {
                    kind: 'category',
                    name: 'Variables',
                    categorystyle: 'variable_category',
                    custom: 'VARIABLE',
                },
                {
                    kind: 'block',
                    type: 'math_number',
                    fields: {
                        NUM: 123,
                    },
                },
            ],
        },
        {
            kind: 'category',
            name: 'Loops',
            categorystyle: 'loop_category',
            contents: [
                {
                    kind: 'block',
                    type: 'controls_repeat_ext',
                    inputs: {
                        TIMES: {
                            shadow: {
                                type: 'math_number',
                                fields: {
                                    NUM: 10,
                                },
                            },
                        },
                    },
                },
                {
                    kind: 'block',
                    type: 'controls_whileUntil',
                },
                {
                    kind: 'block',
                    type: 'controls_for',
                    inputs: {
                        FROM: {
                            shadow: {
                                type: 'math_number',
                                fields: {
                                    NUM: 1,
                                },
                            },
                        },
                        TO: {
                            shadow: {
                                type: 'math_number',
                                fields: {
                                    NUM: 10,
                                },
                            },
                        },
                        BY: {
                            shadow: {
                                type: 'math_number',
                                fields: {
                                    NUM: 1,
                                },
                            },
                        },
                    },
                },
                {
                    kind: 'block',
                    type: 'controls_flow_statements',
                },
            ],
        },
    ],
};
