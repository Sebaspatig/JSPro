let muted: boolean = true;
muted = false;

let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

let nombre: string = "Sebastián";
let apellido: string = "Patiño";

let people: string[] = [];
people = ["Caro", "Sebas", "Isaac", "Guadalupe", "María Teresa"];
people.push("Aaron");
// people.push(2024)

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Aaron");
peopleAndNumbers.push(2024);

enum Color {
	rojo = "rojo",
	verde = "verde",
	azul = "azul",
}

let colorFav: Color = Color.verde;
console.log("Mi color favorito es", colorFav);

//Any

let comodin: any = "Joker";
comodin = { type: "wildcard" };

//Object

let obj: object = { type: "wildcard" };
