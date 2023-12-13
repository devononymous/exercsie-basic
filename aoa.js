function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
var sideA = 5;
var sideB = 6;
var sideC = 7;
var area = calculateTriangleArea(sideA, sideB, sideC);
console.log('The area of the triangle is: ' + area);