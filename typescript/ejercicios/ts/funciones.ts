function add(a: number, b: number) {
	return a + b;
}

const sum = add(30, 3);

function createAdd(a: number) {
    return function (b: number) {
        return b+a
    }
}

const addFour = createAdd(4)
const fourPlus6 = addFour(6)

console.log(fourPlus6)

function fullName(firstName: string, lastName?: string) {
    return `${firstName} ${lastName}`
}

console.log(fullName('Sebastian'))

function fullName2(firstName: string, lastName: string = "Patiño") {
    return `${firstName} ${lastName}`
}

console.log(fullName2('Sebastian'))
console.log(fullName2('Sebastian', 'Piedrahita'))