//@ts-check

/**
 * nota al margen, esto se puede poner en cualquier archivo y no hay que importarle de ninguna manera
 *
 * ProgrammerPerson
 * @typedef {object} ProgrammerPerson
 * @property {string}  fullName id del usuario
 */

/**
 * class of programmer
 *
 * @example
 * const newProgrammer = new Programmer({fullName: 'tu nombre completo'}, 'lenguaje de programacion')
 * newProgrammer.getInfo()
 *
 * @see https://google.com
 *
 * @todo las cosas que quedan pendientes de hacer
 */
class Programmer {
	/**
	 * @param {ProgrammerPerson} user info about the user
	 * @param {string} language the programming language of the programmer
	 */
	constructor(user, language) {
		this.fullName = user.fullName
		this.language = language
	}

	/**
	 * shows ifo about the programmer
	 *
	 * @returns {void}
	 */
	getInfo() {
		console.log(`Hello ${this.fullName}. I see you like ${this.language} language`)
	}
}

/**
 * know more in {@link Programmer} esto sirve para enlazar hacia otra cosa relacionada
 */
const programmer1 = new Programmer({ fullName: "gonzalo" }, "javascript")
