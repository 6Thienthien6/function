// function sumdoiso(first) {
//     let first1 = first;
//     first1 += 1;
//     return first1;
// }
// console.log(sumdoiso(1));
// function mainphite(number1, number2) {
//     if (number1 > number2) {
//         // alert("1 lon hon 2 ");
//         console.log("num1 lon hon num2");
//     } else {
//         return number1 + number2;

//     }

// }
// console.log(mainphite(26, 25));

class shape {
    static areaCircle(radius) {
        return (Math.PI * 2 * radius)
    }
    static perimeterCircle(radius) {
        return (Math.PI * radius * radius)
    }
    static areaRectangle(long, short) {
        return ((long + short) * 2)
    }
    static perimeterRectangle(long, short) {
        return (long * short)
    }
    static areaSquare(edge) {
        return (edge * 4)
    }
    static perimeterSquare(edge) {
        return (edge * edge)
    }
}
console.log(shape.areaCircle(6));
console.log(shape.perimeterCircle(6));
console.log(shape.areaRectangle(5));
console.log(shape.perimeterRectangle(6));
console.log(shape.areaSquare(6));
console.log(shape.perimeterSquare(9));