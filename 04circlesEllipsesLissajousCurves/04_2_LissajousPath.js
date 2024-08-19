window.onload = () => {
    let canvas = document.getElementById("canvas-tag");
    let ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let deg2Rad = (deg) => deg * (Math.PI / 180);

    let centerX = width * 0.5;
    let centerY = height * 0.5;
    let offset = height * 0.4; // basically our object will move vertically between appox -offset to offset
    // Set the speed at which the x and y angles will change over time
    let aSpeed = 0.05; // Speed for the angle controlling vertical movement
    let bSpeed = 0.1; // Speed for the angle controlling horizontal movement

    // Initial angles for the oscillations, controlling the starting point of the motion
    let aAngle = 0; // Initial angle for the sine function (y position)
    let bAngle = 20; // Initial angle for the cosine function (x position)

    // Define the radii for the oscillations, which determine how far the object moves from the center
    let aradius = 200; // Radius of the oscillation along the y-axis (up and down)
    let bradius = 200; // Radius of the oscillation along the x-axis (left and right)

    render();

    function render() {
        // Calculate the y position using the sine function and the current angle
        let y = centerY + aradius * Math.sin(aAngle);

        // Calculate the x position using the cosine function and the current angle
        let x = centerX + bradius * Math.cos(bAngle);

        // Draw a small rectangle at the calculated x and y positions to visualize the path
        ctx.beginPath();
        ctx.rect(x, y, 2, 2); // Rectangle with a width and height of 2 pixels
        ctx.stroke();

        // The following code block, if uncommented, would clear the canvas and draw a moving circle
        // ctx.clearRect(0, 0, width, height);
        // ctx.beginPath();
        // ctx.arc(x, y, 20, 0, Math.PI * 2);
        // ctx.fill();

        // Increment the angles to create continuous movement
        aAngle += aSpeed; // Increase the angle for the y position
        bAngle += bSpeed; // Increase the angle for the x position

        requestAnimationFrame(render);
    }
};

/*
About Lissajous Curves

Lissajous curves are complex, looping figures formed when two perpendicular harmonic oscillations with 
different frequencies and phases are combined. 

This code animates a Lissajous curve on an HTML canvas element. The animation starts as soon as the page loads 
(`window.onload`).

- The `canvas` variable represents the HTML canvas element where the drawing occurs, and `ctx` is the 2D drawing 
  context used to draw shapes and paths on the canvas.

- The `width` and `height` variables are set to match the dimensions of the browser window, ensuring that the 
  canvas fills the entire screen.

- The center of the canvas is calculated using `centerX` and `centerY`, which are set to half of the canvas's width 
  and height, respectively.

- The animation is driven by two oscillating angles, `aAngle` and `bAngle`, which start at different initial values. 
  These angles are incremented over time by `aSpeed` and `bSpeed`, determining how quickly the angles change 
  and thus how fast the points move.

- The radii, `aradius` and `bradius`, define how far the animated point can move from the center in the y and x 
  directions, respectively. The y position is calculated using the sine of `aAngle`, scaled by `aradius`, 
  while the x position is calculated using the cosine of `bAngle`, scaled by `bradius`.

- The `render` function is responsible for drawing the animation. It calculates the current `x` and `y` positions 
  based on the sine and cosine functions and then draws a small rectangle at those coordinates to visualize the path. 
  Optionally, it can clear the canvas and draw a moving circle instead, as shown in the commented-out section.

- The `requestAnimationFrame(render)` function call at the end of `render` keeps the animation running by repeatedly 
  calling `render`, creating a smooth loop.

Overall, the combination of different angles, speeds, and radii results in a complex, looping path called a 
Lissajous curve, which is visualized on the canvas.
*/
