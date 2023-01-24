/**
 * Clamp a value between a minimum and maximum value 
 * @param {number} value to be clamped
 * @param {number} min minimum value that the value can be
 * @param {number} max maximum value that the value can be
 * @returns value clamped between min and max
 */ 
var Clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};


