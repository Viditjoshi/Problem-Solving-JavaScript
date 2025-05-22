/* --------------------------- Problem statment -3 -------------------------- */
// Write a function that calculates and prints the area of a Rectangle given its length and width
/* ------------------------- input length and width ------------------------- */
/* ------------------- Area of rectangle = lenght + width ------------------- */

const CalculateAreaOfRectangle = (lenght, width) => {
    if (lenght <= 0)
        throw new RangeError("Length should be a positive number");
    if (width <= 0)
        throw new RangeError("width should be a positive number");


    return lenght * width;
}
let Area = CalculateAreaOfRectangle(10, -20)
console.log('Area of Rectangle is =>', Area);