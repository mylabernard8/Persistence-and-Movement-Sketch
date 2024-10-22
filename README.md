# Variable Descriptions

### Random:
In the sketch, random() is used to generate a random color for the rectangle. The variable rectColor is set to a random value between 100 and 255. This random value changes every frame, so the rectangle’s color changes throughout the sketch. The random() function ensures that the color of the rectangle is never the same twice in a row.

### A Variable Used to Track a Change Over Time:
The variable circleSize tracks the size of the circle, which changes over time. I achieved this by using the sine of the frame count to create a smooth effect. As the sketch runs, circleSize fluctuates between a larger and smaller value, making the circle grow and shrink continuously.

### A Variable Used to Store an Intermediate Value:
The variable rectColor stores an intermediate value that is used to fill the rectangle’s color. The value of rectColor is assigned using random(), and it changes every frame. This variable is necessary because it holds the result of the random color value for the rectangle and is used in the fill() function to set the color.

### A Combination of Variables Used to Refer to the Same Thing (x,y coordinates, r,g,b values, etc.):
The variables xPos and yPos are used to refer to the position of the shapes (the rectangle and the circle) on the canvas. Both xPos and yPos are initialized to the center of the canvas (width / 2 and height / 2). These variables are then used to position both the rectangle and the circle at the center of the canvas, ensuring that the two shapes are aligned in the same location.
