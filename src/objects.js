//@ts-check

/**
 * Object of person
 *
 * @type {{id: number, name: string, age: number, student: boolean, skills: string[]}}
 */
const person = {
    id: 1,
    name: 'gonzalo',
    age: 24,
    student: true,
    skills: ['js', 'ts', 'php', 'mysql']
};

/**
 * person object 2
 *
 * @type {{id: number|string, name: string, age: number, skills: string[]}}
 */
const person2 = {
    id: 2,
    name: 'gonzalo',
    age: 24,
    skills: ['js', 'ts', 'php', 'mysql']
};
