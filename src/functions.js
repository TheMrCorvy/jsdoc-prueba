//@ts-check

/**
 * a function to add 2 numbers
 *
 * @param {number} a una descripcion del primer parametro
 * @param {number} b otra descripcion pero del segundo parametro
 *
 * @returns {string}
 */
function sumar(a, b) {
    return `El total es: ${a + b}`;
}

/**
 * add 2 numbers
 * @param {number} n1 descripcion 1
 * @param {number} n2 otra descripcion
 *
 * @returns {number}
 */
const second = (n1, n2) => {
    return n1 + n2;
};

/**
 * funcion de saludar a alguien
 *
 * @param {{nombre: string}} persona recibe el objeto persona como parametro
 *
 * @returns {string}
 */
function saludar(persona) {
    return `Hola, ${persona.nombre}`;
}
