/* Задача 1. Форматтер чисел */
function parseCount(number){
    const errorMsg = new Error("Невалидное значение");
    if(Number.isNaN(Number.parseFloat(number))){
        throw errorMsg;
    } else {
        return Number.parseFloat(number);
    }
}

function validateCount(number){
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    } 
}

/* Задача 2. Треугольник */
class Triangle{
    constructor(side1, side2, side3){ 
        if (side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 < side2) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
        
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3; 
    }
    
    get perimeter() {
        return this.side1 + this.side2 + this.side3 || "Ошибка! Треугольник не существует";
    }
    
    get area() {
        const p = 0.5 * (this.side1 + this.side2 + this.side3);
        return Number((Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3)) || "Ошибка! Треугольник не существует";
    }
}

function getTriangle(side1, side2, side3){
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return new Triangle();
    }
}