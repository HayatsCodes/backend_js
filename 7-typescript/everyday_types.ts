// Every day types

const nameE = 'John';
const age = 19;
const isTrue = true;

function sum(a: number, b: number): number {
    return a + b;
}

const num_arr: number[] = [1, 2]
const person = {
    name: nameE,
    age
}
interface Point {
    x: number
    y: number
}

let point: Point = {x :0, y:5};

function printCoordinates(point: Point) {
    console.log(`x:${point.x},y:${point.y}`)
}

printCoordinates(point);

type ID = string | number

function printId(id: ID) {
    console.log(id);
}

interface Shape {
    name: string
}

type ShapeArray = Shape[]

const circle = {name: 'Circle'}
const rectangle: Shape = {name: 'Rectangle'}
const square = {name: 'Square'}
const triangle = {name: 'Triangle'}
const cylinder: Shape = {name: 'Cylinder'}

function printShapes(shapes: ShapeArray) {
    shapes.forEach((shape) => {console.log(shape.name)});
}

printShapes([circle, rectangle, square, triangle, cylinder]);

(name: string) => {console.log(name)};

interface Rectangle {
    width: number,
    height:number
}

const rect = {
    width: 1234,
    height:6789
};

function calculateArea(shape: Rectangle) {
    return shape.width * shape.height;
}