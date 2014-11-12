'use strict';

(function () {
    var language = {
//random :
        LANG_VARIABLES_SET_ITEM : 'item',

        //logic blocks:
        LANG_CATEGORY_LOGIC : 'Logic',

        LANG_LOGIC_OPERATION_AND : 'and',
        LANG_LOGIC_OPERATION_OR : 'or',

        LANG_LOGIC_COMPARE_TOOLTIP_EQ : 'Checks if both inputs are equal .',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ : 'Checks if both inputs are different.',  
        LANG_LOGIC_COMPARE_TOOLTIP_LT : 'Checks if the first input is smaller than the second one.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE : 'Checks if the first input is smaller than or equal to the second one.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT : 'Checks if the first input is greater than the second one.', 
        LANG_LOGIC_COMPARE_TOOLTIP_GTE : 'Checks if the first input is greater than or equal to the second one.',

        LANG_LOGIC_OPERATION_TOOLTIP_AND : 'Checks if both inputs are true.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR : 'Checks if either inputs are true.',

        LANG_LOGIC_NEGATE_INPUT_NOT : 'not',
        LANG_LOGIC_NEGATE_TOOLTIP : 'Returns the opposite of the input.',
        LANG_LOGIC_NEGATE_HELPURL : '',

        LANG_LOGIC_BOOLEAN_TRUE : 'true',
        LANG_LOGIC_BOOLEAN_FALSE : 'false',
        LANG_LOGIC_BOOLEAN_TOOLTIP : 'Returns either true or false.',

        //communication blocks:
        LANG_CATEGORY_COMMUNICATION : 'Communication',

        LANG_BQ_BLUETOOTH_RECEIVE : 'Bluetooth receive data',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH : 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP : 'Returns the data received by the Bluetooth module',

        LANG_BQ_BLUETOOTH_SEND : 'Bluetooth send data',
        LANG_BQ_BLUETOOTH_SEND_SEND : 'Send',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP : 'Sends the input data using the Bluetooth module',

        LANG_BQ_BLUETOOTH_DEF : 'Bluetooth definition',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE : 'Baud rate',
        LANG_BQ_BLUETOOTH_DEF_PIN1 : 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2 : 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME : 'Name',
        LANG_BQ_BLUETOOTH_DEF_PINCODE : 'PinCode',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE : 'Receive',
        LANG_BQ_BLUETOOTH_DEF_SEND : 'Send',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP : 'Bluetooth module definition',

        LANG_ADVANCED_BT_SERIAL_AVAILABLE : 'Bluetooth Serial Available',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP : 'Check wether the bluetooth is available or not.',

        LANG_ADVANCED_SERIAL_AVAILABLE : 'Serial Available',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP : 'Check wether the serial port is available or not',

        LANG_ADVANCED_SERIAL_PRINT : 'Serial Print',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP : 'Prints data as ASCII text.',

        LANG_ADVANCED_SERIAL_PRINTLN : 'Serial Println',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP : 'Prints data as ASCII text and adds a Carriage Return (CR).',

        LANG_ADVANCED_SERIAL_READ : 'Serial Read',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP : 'Reads incoming serial data from serial port as ASCII text.',

        LANG_ADVANCED_SERIAL_SPECIAL : 'Special Chars',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB : 'Tab',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN : 'Carriage Return',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED : 'Line Feed',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP : 'Writes special Chars.',

        //bq blocks :
        LANG_CATEGORY_BQ : 'octopus bloqs',

        LANG_BQ_BAT : 'BAT - Ultrasonic Sensor', 
        LANG_BQ_BAT_RED_PIN : 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN : 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP : 'Returns the distance measured by the ultrasonic sensor.',

        LANG_BQ_BUTTON : 'Button',
        LANG_BQ_BUTTON_PIN : 'PIN#',
        LANG_BQ_BUTTON_TOOLTIP : 'Button',

        LANG_BQ_BUTTONS : 'Button Pad',
        LANG_BQ_BUTTONS_PIN : 'PIN#',
        LANG_BQ_BUTTONS_BUTTON_A : 'Button #A',
        LANG_BQ_BUTTONS_BUTTON_B : 'Button #B',
        LANG_BQ_BUTTONS_BUTTON_C : 'Button #C',
        LANG_BQ_BUTTONS_BUTTON_D : 'Button #D',
        LANG_BQ_BUTTONS_BUTTON_E : 'Button #E',
        LANG_BQ_BUTTONS_TOOLTIP : 'Button Pad',

        LANG_BQ_INFRARED : 'Infrared Sensor',
        LANG_BQ_INFRARED_PIN : 'PIN#',
        LANG_BQ_INFRARED_TOOLTIP : 'Returns the digital value read by the infrared sensor.',

        LANG_BQ_JOYSTICK : 'Joystick',
        LANG_BQ_JOYSTICK_PIN_X : 'X axis PIN#',
        LANG_BQ_JOYSTICK_PIN_Y : 'Y axis PIN#',
        LANG_BQ_JOYSTICK_PIN_BUTTON : 'Button PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Joystick Position',
        LANG_BQ_JOYSTICK_TOOLTIP : 'Joystick',

        LANG_BQ_LED : 'LED',
        LANG_BQ_LED_PIN : 'PIN#',
        LANG_BQ_LED_STATE : '',
        LANG_BQ_LED_ON:'ON',
        LANG_BQ_LED_OFF:'OFF',
        LANG_BQ_LED_TOOLTIP : 'LED',

        LANG_BQ_PHOTORESISTOR : 'Light Sensor', 
        LANG_BQ_PHOTORESISTOR_PIN : 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP : 'Returns the analog value measured by the light sensor.',

        LANG_BQ_PIEZO_BUZZER : 'Buzzer',
        LANG_BQ_PIEZO_BUZZER_PIN : 'PIN#',
        LANG_BQ_PIEZO_BUZZER_TONE : 'TONE',
        LANG_BQ_PIEZO_BUZZER_DO : 'DO',
        LANG_BQ_PIEZO_BUZZER_RE : 'RE',
        LANG_BQ_PIEZO_BUZZER_MI : 'MI',
        LANG_BQ_PIEZO_BUZZER_FA : 'FA',
        LANG_BQ_PIEZO_BUZZER_SOL : 'SOL',
        LANG_BQ_PIEZO_BUZZER_LA : 'LA',
        LANG_BQ_PIEZO_BUZZER_SI : 'SI',
        LANG_BQ_PIEZO_BUZZER_DURATION : 'Duration',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP : 'Piezo Buzzer',

        LANG_BQ_PIEZO_BUZZERAV : 'Advanced Buzzer',
        LANG_BQ_PIEZO_BUZZERAV_PIN : 'PIN#',
        LANG_BQ_PIEZO_BUZZERAV_TONE : 'TONE',
        LANG_BQ_PIEZO_BUZZERAV_DURATION : 'Duration',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP : 'Piezo Buzzer Advanced',

        LANG_BQ_POTENTIOMETER : 'Potentiometer',
        LANG_BQ_POTENTIOMETER_PIN : 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP : 'Returns the analog value measured by the potentiometer.',

        //LCD blocks:
        LANG_CATEGORY_LCD : 'LCD blocks',
        LANG_LCD_DEF : 'LCD',
        LANG_LCD_DEF_TOOLTIP : 'Block that defines the LCD',

        LANG_LCD_SETBACKLIGHT : 'LCD: setBacklight(',
        LANG_LCD_SETBACKLIGHT_CLOSE : ')',
        LANG_LCD_SETBACKLIGHT_TOOLTIP : 'Sets the backlight of the LCD screen.',

        LANG_LCD_PRINT : 'LCD: print ',
        LANG_LCD_PRINT_POSITION : 'Set text position?',
        LANG_LCD_PRINT_TOOLTIP : 'Prints a String in the LCD at the specified position or the next available one.',

        LANG_LCD_CLEAR : 'LCD clear',
        LANG_LCD_CLEAR_TOOLTIP : 'LCD clear',

        //controls blocks :
        LANG_CATEGORY_CONTROLS : 'Control',

        LANG_CONTROLS_BASE_DELAY_WAIT : 'Wait (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP : 'Waits the specified time in milliseconds (ms)',

        LANG_CONTROLS_IF_TOOLTIP_1 : 'If the condition is true, execute the statements.',
        LANG_CONTROLS_IF_TOOLTIP_2 : 'If the condition is true, then do the first block of statements. Otherwise, do the second block of statements.',
        LANG_CONTROLS_IF_TOOLTIP_3 : 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.',
        LANG_CONTROLS_IF_TOOLTIP_4 : 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.',
        LANG_CONTROLS_IF_MSG_IF : 'if',
        LANG_CONTROLS_IF_MSG_ELSEIF : 'else if',
        LANG_CONTROLS_IF_MSG_ELSE : 'else',
        LANG_CONTROLS_IF_MSG_THEN : 'do',
        LANG_CONTROLS_IF_IF_Field_IF : 'if',
        LANG_CONTROLS_IF_IF_TOOLTIP : 'Add, remove, or reorder sections to reconfigure this if block.',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF : 'else if',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP : 'Add a condition to the if block.',
        LANG_CONTROLS_IF_ELSE_Field_ELSE : 'else',
        LANG_CONTROLS_IF_ELSE_TOOLTIP : 'Add a final, catch-all condition to the if block.',

        LANG_CONTROLS_FOR_INPUT_WITH : 'count with',
        LANG_CONTROLS_FOR_INPUT_VAR : 'x',
        LANG_CONTROLS_FOR_INPUT_FROM : 'from',
        LANG_CONTROLS_FOR_INPUT_TO : 'to',
        LANG_CONTROLS_FOR_INPUT_DO : 'do',
        LANG_CONTROLS_FOR_TOOLTIP : 'Count from a start number to an end number. Each time the count is incremented by one, the variable takes that value then do the statements.',

        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE : 'while',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL : 'until',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE : 'While the condition is true, then do the statements.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL : 'While the condition is false, then do the statements.',

        LANG_CONTROLS_REPEAT_TITLE_REPEAT : 'Repeat',
        LANG_CONTROLS_REPEAT_TITLE_TIMES : 'times',
        LANG_CONTROLS_REPEAT_INPUT_DO : 'do',
        LANG_CONTROLS_REPEAT_TOOLTIP : 'Repeat the statements a certain number of times',

        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL : '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP : 'of loop',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK : 'break out',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE : 'continue with next iteration',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK : 'Break out of the containing loop.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE : 'Skip the rest of this loop, and continue with the next iteration.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING : 'Warning: This block may only be used within a loop.',

        LANG_CONTROLS_SWITCH_HELPURL : '',
        LANG_CONTROLS_SWITCH_TOOLTIP_1 : 'Execute the statement of the case .',
        LANG_CONTROLS_SWITCH_TOOLTIP_2 : 'Use the switch statement to select one of many blocks of code to be executed.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3 : 'Use the switch statement to select one of many blocks of code to be executed.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4 : 'Use the switch statement to select one of many blocks of code to be executed.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP : 'The switch expression is evaluated once',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP : 'case',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP : 'The default keyword specifies the code to run if there is no case match',
        LANG_CONTROLS_SWITCH_CASE:'case',
        LANG_CONTROLS_SWITCH_COLON:': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'default',
        LANG_CONTROLS_SWITCH_DO:'do',


        //math blocks :
        LANG_CATEGORY_MATH : 'Math',

        LANG_MATH_ADVANCED_MAP_MAP : 'Map ',
        LANG_MATH_ADVANCED_MAP_FROM : 'From [',
        LANG_MATH_ADVANCED_MAP_HYPHEN : '-',
        LANG_MATH_ADVANCED_MAP_BRACKET : ']',
        LANG_MATH_ADVANCED_MAP_TO : 'to [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP : 'Re-map the input from a certain range to another.',

        LANG_MATH_NUMBER_TOOLTIP : 'Number',

        LANG_MATH_ARRAY_ARRAY3:'[3]',
        LANG_MATH_ARRAY_BRACKET3:'{',
        LANG_MATH_ARRAY_BRACKET4:'}',
        LANG_MATH_ARRAY_COMMA:',',
        LANG_MATH_ARRAY_TOOLTIP: 'Array',

        LANG_ARRAY_GET_BRACKET1:'[',
        LANG_ARRAY_GET_BRACKET2:']',
        LANG_ARRAY_GET_TOOLTIP:'Returns the value of a certain element of the array.',

        LANG_MATH_MODULO_TOOLTIP : 'Returns the remainder of the division of the two input numbers.',

        LANG_MATH_BASE_MAP : 'Map ',
        LANG_MATH_BASE_MAP_VALUE_TO : 'Value to [0-',
        LANG_MATH_BASE_MAP_BRACKET : ']',
        LANG_MATH_BASE_MAP_TOOLTIP : 'Re-map the input from [0-1023] to another.',

        LANG_MATH_SINGLE_OP_ROOT : 'square root',
        LANG_MATH_SINGLE_OP_ABSOLUTE : 'absolute',
        LANG_MATH_SINGLE_TOOLTIP_ROOT : 'Returns the square root of a number.',
        LANG_MATH_SINGLE_TOOLTIP_ABS : 'Returns the absolute value of a number.',
        LANG_MATH_SINGLE_TOOLTIP_NEG : 'Returns the negation of a number.',
        LANG_MATH_SINGLE_TOOLTIP_LN : 'Returns the natural logarithm of a number.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10 : 'Returns the base 10 logarithm of a number.',
        LANG_MATH_SINGLE_TOOLTIP_EXP : 'Returns e to the power of a number.',
        LANG_MATH_SINGLE_TOOLTIP_POW10 : 'Returns 10 to the power of a number.',

        //text blocks:
        LANG_CATEGORY_TEXT : 'Text',

        LANG_TEXT_TEXT_HELPURL : '',
        LANG_TEXT_TEXT_TOOLTIP : 'A letter, word, or line of text.',

        LANG_TEXT_JOIN_HELPURL : '',
        LANG_TEXT_JOIN_Field_CREATEWITH : 'create text with',
        LANG_TEXT_JOIN_TOOLTIP : 'Create a piece of text by joining together any number of items.',

        LANG_TEXT_CREATE_JOIN_Field_JOIN : 'join',
        LANG_TEXT_CREATE_JOIN_TOOLTIP : 'Add, remove, or reorder sections to reconfigure this text block.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM : 'item',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP : 'Add an item to the text.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN : 'join',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM : 'element',

        LANG_TEXT_APPEND_HELPURL : '',
        LANG_TEXT_APPEND_TO : 'to',
        LANG_TEXT_APPEND_APPENDTEXT : 'append text',
        LANG_TEXT_APPEND_VARIABLE : 'item',
        LANG_TEXT_APPEND_TOOLTIP : 'Append some text to variable %1.',

        LANG_TEXT_LENGTH_HELPURL : '',
        LANG_TEXT_LENGTH_INPUT_LENGTH : 'length',
        LANG_TEXT_LENGTH_TOOLTIP : 'Returns number of letters (including spaces) in the provided text.',

        LANG_TEXT_EQUALSIGNORECASE_IS : '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL : ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION : '?',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP : 'Checks if both input strings are equal, regardless of the case.',

        LANG_TEXT_SUBSTRING : 'Crop ',
        LANG_TEXT_SUBSTRING_FROM : 'from',
        LANG_TEXT_SUBSTRING_TO : 'to',
        LANG_TEXT_SUBSTRING_TOOLTIP : 'Obtain a substring from the input string with the caracters between the two input numbers.',

        //advanced blocks :
        LANG_CATEGORY_ADVANCED : 'Pin functions',

        LANG_ADVANCED_CONVERSION_CONVERT : 'Convert',
        LANG_ADVANCED_CONVERSION_DECIMAL : 'Decimal',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL : 'Hexadecimal',
        LANG_ADVANCED_CONVERSION_OCTAL : 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY : 'Binary',
        LANG_ADVANCED_CONVERSION_VALUE : 'value',
        LANG_ADVANCED_CONVERSION_TOOLTIP : 'Convert a number from one base to another.',

        LANG_ADVANCED_INOUT_ANALOG_READ : 'AnalogRead PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP : 'Reads the value from a specified digital pin',

        LANG_ADVANCED_INOUT_ANALOG_WRITE : 'AnalogWrite PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE : 'value',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP : 'Write a value between 0 and 255 to a specific analog output PIN',

        LANG_ADVANCED_BUILTIN_LED : 'BUILT-IN LED',
        LANG_ADVANCED_BUILTIN_LED_STATE : 'state',
        LANG_ADVANCED_BUILTIN_LED_ON : 'ON',
        LANG_ADVANCED_BUILTIN_LED_OFF : 'OFF',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP : 'Built-in LED that is internally connected to PIN 13',

        LANG_ADVANCED_INOUT_DIGITAL_READ : 'DigitalRead PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP : 'Reads the value from a specified digital pin',

        LANG_ADVANCED_INOUT_DIGITAL_WRITE : 'DigitalWrite',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN : 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE : 'state',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH : 'HIGH',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW : 'LOW',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP : 'Write a value in a specified digital pin',

        LANG_ADVANCED_HIGHLOW_HIGH : 'HIGH',
        LANG_ADVANCED_HIGHLOW_LOW : 'LOW',
        LANG_ADVANCED_HIGHLOW_TOOLTIP : 'HIGH OR LOW',

        LANG_ADVANCED_MATH_RANDOM : 'Random between',
        LANG_ADVANCED_MATH_RANDOM_AND : ' and ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP : 'Returns a random number between the two limits.',

        //procedures blocks
        LANG_CATEGORY_PROCEDURES : 'Functions',

        LANG_PROCEDURES_DEFNORETURN_HELPURL : '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE : 'function',
        LANG_PROCEDURES_DEFNORETURN_DO : 'do',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP : 'A function with no return value.',

        LANG_PROCEDURES_DEFRETURN_HELPURL : '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE : 'function',
        LANG_PROCEDURES_DEFRETURN_DO : 'do',
        LANG_PROCEDURES_DEFRETURN_RETURN : 'return',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP : 'A function with a return value.',

        LANG_PROCEDURES_DEF_DUPLICATE_WARNING : 'Warning: This function has duplicate parameters.',

        LANG_PROCEDURES_CALLNORETURN_HELPURL : '',
        LANG_PROCEDURES_CALLNORETURN_CALL : 'do',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE : 'function',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP : 'Calls a function with no return value.',

        LANG_PROCEDURES_CALLRETURN_HELPURL : '',
        LANG_PROCEDURES_CALLRETURN_CALL : 'do',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE : 'function',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP : 'Calls a function with a return value.',

        LANG_PROCEDURES_MUTATORCONTAINER_Field : 'parameters',
        LANG_PROCEDURES_MUTATORARG_Field : 'variable:',

        LANG_PROCEDURES_HIGHLIGHT_DEF : 'Highlight function',

        LANG_PROCEDURES_IFRETURN_TOOLTIP : 'If the condition is true, then returns this value.',
        LANG_PROCEDURES_IFRETURN_WARNING : 'Warning: This block may only be used within a function with a return value.',

        //variables blocks :
        LANG_CATEGORY_VARIABLES : 'Variables',

        LANG_VARIABLES_GLOBAL : 'Variable ',
        LANG_VARIABLES_GLOBAL_TYPE : 'of type ',
        LANG_VARIABLES_GLOBAL_EQUALS : 'equals',
        LANG_VARIABLES_GLOBAL_TOOLTIP : 'Declares and defines a GLOBAL variable of type int or String.',

        LANG_VARIABLES_LOCAL : 'LOCAL variable ',
        LANG_VARIABLES_LOCAL_TYPE : 'of type ',
        LANG_VARIABLES_LOCAL_EQUALS : 'equals',
        LANG_VARIABLES_LOCAL_TOOLTIP : 'Declare and define a LOCAL variable of type int or String.',

        LANG_VARIABLES_DEFINE : 'Define variable ',
        LANG_VARIABLES_DEFINE_AS : 'as',
        LANG_VARIABLES_DEFINE_TOOLTIP : 'Define the value of a variable.',

        LANG_VARIABLES_SET : 'Set variable ',
        LANG_VARIABLES_SET_AS : 'as',
        LANG_VARIABLES_SET_TOOLTIP : 'Sets the value of a variable.',

        LANG_VARIABLES_GET : 'Variable ',
        LANG_VARIABLES_GET_TOOLTIP : 'Returns the value of a variable.',

        LANG_VARIABLES_PIN_TOOLTIP : 'Select the PIN.',

        //zum blocks :
        LANG_CATEGORY_ZUM : 'zum bloqs',

        LANG_ZUM_BUTTON : 'Button',
        LANG_ZUM_BUTTON_PIN : 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP : 'zum Button',

        LANG_ZUM_FOLLOWER : 'Infrared Sensor',
        LANG_ZUM_FOLLOWER_PIN_LEFT : 'PIN LEFT#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT : 'PIN RIGHT#',
        LANG_ZUM_FOLLOWER_LEFT : 'Left',
        LANG_ZUM_FOLLOWER_RIGHT : 'Right',
        LANG_ZUM_FOLLOWER_TOOLTIP : 'Returns the digital value read by the infrared sensor',

        LANG_ZUM_INFRARED : 'Infrared Sensor',
        LANG_ZUM_INFRARED_PIN : 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP : 'Returns the digital value read by the infrared sensor',

        LANG_ZUM_LED : 'LED',
        LANG_ZUM_LED_PIN : 'PIN#',
        LANG_ZUM_LED_ON : 'ON',
        LANG_ZUM_LED_OFF : 'OFF',
        LANG_ZUM_LED_TOOLTIP : 'zum LED',

        LANG_ZUM_PHOTORESISTOR : 'Light Sensor',
        LANG_ZUM_PHOTORESISTOR_PIN : 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP : 'Returns the analog value measured by the light sensor.',

        LANG_ZUM_PIEZO_BUZZER : 'Buzzer',
        LANG_ZUM_PIEZO_BUZZER_PIN : 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE : 'TONE',
        LANG_ZUM_PIEZO_BUZZER_DO : 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE : 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI : 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA : 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL : 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA : 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI : 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION : 'Duration',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP : 'Piezo Buzzer',

        LANG_ZUM_PIEZO_BUZZERAV : 'Advanced Buzzer',
        LANG_ZUM_PIEZO_BUZZERAV_PIN : 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE : 'TONE',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION : 'Duration',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP : 'Piezo Buzzer Advanced',

        LANG_ZUM_POTENTIOMETER : 'Potentiometer',
        LANG_ZUM_POTENTIOMETER_PIN : 'PIN#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP : 'Returns the analog value measured by the potentiometer.',

        //servo blocks :
        LANG_CATEGORY_SERVO : 'Servo',

        LANG_SERVO_CONT : 'Servo',
        LANG_SERVO_CONT_PIN : 'PIN#',
        LANG_SERVO_CONT_ROT : 'ROT',
        LANG_SERVO_CONT_TURN_CLOCKWISE : 'TURN CLOCKWISE',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE : 'TURN COUNTERCLOCKWISE',
        LANG_SERVO_CONT_STOPPED : 'STOPPED',
        LANG_SERVO_CONT_DELAY : 'Delay',
        LANG_SERVO_CONT_TOOLTIP : 'Continuous rotation servo.',

        LANG_SERVO_MOVE : 'Servo',
        LANG_SERVO_MOVE_PIN : 'PIN#',
        LANG_SERVO_MOVE_DEGREES : 'Degrees (0~180)',
        LANG_SERVO_MOVE_DELAY : 'Delay',
        LANG_SERVO_MOVE_TOOLTIP : 'Move between 0~180 degree',
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
    //     this.RoboBlocks.locales.add('en', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('en-GB', language);
    }
}());