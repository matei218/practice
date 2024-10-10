// Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

const areaOfTriangle = (a, b, c) => {
    let sp = (a + b + c) / 2;
    let areaCalc = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    let roundedResult = areaCalc.toFixed(2)

    console.log(`The exact, full area is: ${areaCalc}. We can round it to 2 dm ${roundedResult}`);
}

areaOfTriangle(5, 6, 7);

// fiddle | https://jsfiddle.net/matei218/Lqkymf0r/