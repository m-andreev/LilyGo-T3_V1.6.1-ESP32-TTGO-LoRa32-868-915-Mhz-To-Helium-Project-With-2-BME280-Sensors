/*******************************************************************************
 *
 *  File:         lmic-node-uplink-formatters.js
 * 
 *  Function:     LMIC-node uplink payload formatter JavaScript function(s).
 * 
 *  Author:       Leonel Lopes Parente
 * 
 *  Description:  These function(s) are for use with The Things Network V3. 
 *                 
 ******************************************************************************/

function decodeUplink(input) {
    var data = {};
    var warnings = [];

    if (input.fPort == 10) {
        //data.counter = (input.bytes[0] << 8) + input.bytes[1];
        var received_value = input; //this is the data your RECEIVING PROGAM got
        var a = received_value >> 16;
        var b = received_value & 0xffff;
        
        var f = a / 10.0;
        var g = b / 10.0;

        data = {f,g};

        
        //now the **RECEIVING** SIDE has obtained the original values of `f` and `g`
    }
    else {
        warnings.push("Unsupported fPort");
    }
    return {
        data: data,
        warnings: warnings
    };
}
