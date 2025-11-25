'use strict';

/**
 * Validates if a value is a non-empty string.
 * @param {string} value - The value to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function isNonEmptyString(value) {
    return typeof value === 'string' && value.trim() !== '';
}

/**
 * Validates if a value is a number.
 * @param {any} value - The value to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * Validates if a value is an array.
 * @param {any} value - The value to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function isArray(value) {
    return Array.isArray(value);
}

module.exports = { isNonEmptyString, isNumber, isArray };