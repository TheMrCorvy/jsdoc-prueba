//@ts-check

/**
 * descripcion de mi modulo - ver un tutorial en  {@tutorial first-tutorial}
 * (se pueden enlazar a todos los tutoriales que quieras solo agregando mas etiquetas)
 * @module MyMath
 */

/**
 * adds 2 numbers
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} sum of both numbers
 */

const add = (x, y) => x + y

/**
 * substract 2 numbers
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} the substraction of the 2 numbers
 */
const substract = (x, y) => x - y

module.exports = {
	add,
	substract,
}
