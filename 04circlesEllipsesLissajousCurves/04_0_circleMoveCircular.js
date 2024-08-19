// When the window has finished loading, execute the following function
window.onload = () => {
    let canvas = document.getElementById("canvas-tag");

    // Get the 2D rendering context for drawing on the canvas
    let ctx = canvas.getContext("2d");

    // Set the canvas width and height to the full width and full height of the window
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Calculate the horizontal and vertical center of the canvas
    let centerX = width * 0.5;
    let centerY = height * 0.5;

    // Set the speed of rotation (increase this value to speed up the animation)
    let speed = 0.05;

    // Initialize the starting angle for the rotation
    let angle = 0;

    // Set the radius of the circle's path (distance from the center of the canvas)
    let radius = 150;

    // Start the animation by calling the render function
    render();

    // Define the render function, which will be called repeatedly to animate the circle
    function render() {
        // Calculate the vertical position of the circle using the sine function
        let y = centerY + radius * Math.sin(angle);

        // Calculate the horizontal position of the circle using the cosine function
        let x = centerX + radius * Math.cos(angle);

        // As angle increases, both the sine and cosine functions change their output values smoothly.
        // This results in the x and y positions tracing out a circular path centered around (centerX, centerY) with a radius defined
        // by the radius variable.

        // The x and y positions together determine where the circle will be drawn on the canvas for each frame of the animation,
        // creating the effect of a circle moving in a circular orbit around the center.

        // Clear the entire canvas before drawing the new frame
        ctx.clearRect(0, 0, width, height);

        // Start drawing a new shape
        ctx.beginPath();

        // Draw a circle at the calculated (x, y) position with a radius of 20 pixels
        ctx.arc(x, y, 20, 0, Math.PI * 2);

        // Fill the circle with the current fill style (default is black)
        ctx.fill();

        // Increase the angle to rotate the circle slightly for the next frame
        angle += speed;

        // Request the next animation frame, causing the render function to be called again
        requestAnimationFrame(render);
    }
};

/*
This code creates an animation of a circle moving in a circular path around the center of the canvas. 
The position of the circle is updated in each frame using trigonometric functions (sine and cosine), which depend on the angle and radius. 
The requestAnimationFrame function is used to create a smooth, continuous animation by repeatedly calling the render function.

As angle increases, both the sine and cosine functions change their output values smoothly. 
This results in the x and y positions tracing out a circular path centered around (centerX, centerY) with a radius defined 
by the radius variable.

The x and y positions together determine where the circle will be drawn on the canvas for each frame of the animation, 
creating the effect of a circle moving in a circular orbit around the center.
*/
