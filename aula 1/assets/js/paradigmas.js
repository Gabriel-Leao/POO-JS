// Sintaxe literal (Básica)
// Implícito
const escola = "Let's Code"
console.log(escola, typeof(escola), escola.constructor)

const desde = 2015; // number literal
console.log(desde, typeof desde, desde.constructor);

// Sintaxe OOP (Avançada)
// Explícito
const school = new String ("Let's Code")
console.log(school, typeof(school), school.constructor)

const since = new Number(2015);
console.log(since, typeof since, since.constructor);


// API Javascript
console.dir(String.prototype);
console.dir(Number.prototype);
console.dir(Array.prototype);
console.dir(Boolean.prototype);
console.dir(Function.prototype);
console.dir(Object.prototype);
console.dir(Date.prototype);
console.dir(RegExp.prototype);
console.dir(Math);

// Exemplos
console.log(escola.toUpperCase());
console.log(school.toUpperCase());

console.log(escola.length);
console.log(escola.padEnd(10, " ").repeat(5).toUpperCase());