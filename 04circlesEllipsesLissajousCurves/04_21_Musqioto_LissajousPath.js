window.onload = () => {
    let canvas = document.getElementById("canvas-tag");
    let ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let numBees = 30;
    let bees = [];

    let bee = {
        create: function () {
            var obj = Object.create(this);
            obj.init.apply(obj, arguments);
            return obj;
        },

        init: function (foo, bar) {
            console.log(foo, bar);
            this.angleX = Math.random() * Math.PI * 2;
            this.angleY = Math.random() * Math.PI * 2;
            this.speedX = Math.random() * 0.1 - 0.05;
            this.speedY = Math.random() * 0.1 - 0.05;
            this.radius = 100 + Math.random() * 100;
        },

        update: function () {
            let x = Math.cos(this.angleX) * this.radius,
                y = Math.sin(this.angleY) * this.radius;
            this.angleX += this.speedX;
            this.angleY += this.speedY;

            ctx.beginPath();
            ctx.arc(width / 2 + x, height / 2 + y, 2, 0, Math.PI * 2, false);
            ctx.fill();
        },
    };

    for (var i = 0; i < numBees; i += 1) {
        bees.push(bee.create("foo", "bar"));
    }

    draw();

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < numBees; i++) {
            bees[i].update();
        }

        requestAnimationFrame(draw);
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
