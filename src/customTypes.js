//@ts-check

/**
 * User
 * @typedef {object} User
 * @property {number} id el id del usuario
 * @property {string} name el nombre del usuario
 * @property {number | string} [age] al ponerlo dentro de [] hace que la propiedad sea opcional
 * @property {boolean} isActive si es activo o no
 */

/**
 * un nuevo usuario
 *
 *@type {User}
 */
const user1 = {
	id: 1,
	name: "algo",
	age: 24,
	isActive: true,
}

/**
 * otro nuevo usuario
 * @type {User}
 */
const user2 = {
	id: 1,
	name: "algo",
	isActive: true,
}
