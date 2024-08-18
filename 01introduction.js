window.onload = () => {
    let canvas = document.getElementById("canvas-tag");
    let ctx = canvas.getContext("2d");

    // now canvas will occupy entire window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fill the first rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 50);

    // Draw and fill the second rectangle
    ctx.beginPath(); // Start a new path
    ctx.fillStyle = "coral";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
    ctx.rect(10, 70, 100, 50);
    ctx.stroke();
    ctx.fill();

    // Draw the third rectangle with blue stroke
    ctx.beginPath(); // Start a new path
    //  if i dont put a beginPath here, then the strokeStyle and lineWidth
    // of the below i.e. blue and 2 will override the one above i.e. black and 8
    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";
    ctx.rect(120, 10, 100, 50);
    ctx.stroke();

    // ---------- Drawing Triangles ------------
    ctx.beginPath();
    // setting the color
    ctx.strokeStyle = "black";
    // go to here and start drawing
    ctx.moveTo(200, 200);
    // draw a straight line from 200,200 to 300,200
    ctx.lineTo(300, 200);
    ctx.stroke();
    // draw a straight line from 300,200 to 250,150
    ctx.lineTo(250, 150);
    ctx.stroke();
    // draw a straight line from 250,150 to 200,200
    ctx.lineTo(200, 200);
    ctx.stroke();
    // instead of above two, we can use closePath
    // close path joins the current position to starting position where we began
    // try commenting above two ctx and uncommenting below
    // ctx.closePath()
    // ctx.stroke()
    // We can fill our traingle with a color
    // ctx.fillStyle='teal'
    // ctx.fill()

    // ------ Drawing Circles and Arcs ---------------
    // helper method to convert degrees to Radians
    let deg2Rad = (deg) => deg * (Math.PI / 180);

    // Draw a full circle
    // begin a path
    ctx.beginPath();
    // define a circle
    let centerX = window.innerWidth / 2, // sets x to center of screen
        centerY = 400,
        radius = 40,
        startAngle = 0, // start from 0 rad i.e. 0 def
        endAngle = deg2Rad(360); // go till 2 * Math.Pi -> 360 deg
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
    // filling
    // ctx.fill()

    // -> drawing arc - clockwise default
    ctx.beginPath();

    (centerX = window.innerWidth / 2 + 100), // sets x to center of screen
        (centerY = 400),
        (radius = 40),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(180)); // go till Math.Pi -> 180 deg
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // -> drawing arc - counterclockwise
    ctx.beginPath();

    (centerX = window.innerWidth / 2 - 100), // sets x to center of screen
        (centerY = 400),
        (radius = 40),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(180)); // go till Math.Pi -> 180 deg
    let counterClockWise = true;
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterClockWise);
    ctx.stroke();

    // -> drawing arc - 0 to 90 deg
    // here the y axis of canvas is inverted, so 90 deg is below
    // that is the reason, when we increase Y value, we go
    // down the canvas
    ctx.beginPath();

    (centerX = window.innerWidth / 2 - 200), // sets x to center of screen
        (centerY = 400),
        (radius = 40),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(90)); // go till Math.Pi -> 180 deg

    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // -> drawing arc - 0 to 90 deg - CounterClock
    // we see that its a 3/4th circle
    // this is because canvas y axis is inverted and we go
    // counterclock from 0 to 90
    ctx.beginPath();

    (centerX = window.innerWidth / 2 + 200), // sets x to center of screen
        (centerY = 400),
        (radius = 40),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(90)); // go till Math.Pi -> 180 deg

    ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterClockWise);
    ctx.stroke();
    ctx.fill();

    // ------------- Drawing Circles within Circles ----------
    // Draw the big circle
    ctx.beginPath();
    (centerX = window.innerWidth / 2), // sets x to center of screen
        (centerY = 525),
        (radius = 80),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(360)); // go till 2 * Math.Pi -> 360 deg
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // Draw an inner circle
    ctx.beginPath();
    (centerX = window.innerWidth / 2), // sets x to center of screen
        (centerY = 525),
        (radius = 60),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(360)); // go till 2 * Math.Pi -> 360 deg
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // Draw an inner arc
    ctx.beginPath();
    (centerX = window.innerWidth / 2), // sets x to center of screen
        (centerY = 525),
        (radius = 40),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(180)); // go till 2 * Math.Pi -> 360 deg
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // --------- Drawing Circles at Different Pos in Inner Circle
    ctx.beginPath();
    (centerX = window.innerWidth / 2), // sets x to center of screen
        (centerY = 700),
        (radius = 80),
        (startAngle = 0), // start from 0 rad i.e. 0 def
        (endAngle = deg2Rad(360)); // go till 2 * Math.Pi -> 360 deg
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();

    // Where is the cursor now currently?
    // so the radius is 80 and centerX and centerY is the center
    // the circle cursor moves from centerX + 80, centerY and
    // comes back to again centerX + 80, centerY to draw a full circle

    // If the angle is 90 (quarter circle)
    // then cursor moves from centerX + 80, centerY to centerX, centerY + 80 (as we move in clockwise we go down)

    // In below steps try commenting uncommenting and check
    // so right now after the cursor is at centerX+80, centerY
    // now lets say I want to draw from centerX+80, centerY to
    // centerX, centerY
    ctx.lineTo(centerX, centerY);
    ctx.stroke();

    // with above code, the cursor moves from centerX+80,centerY -> centerX, centerY
    // now lets say I want to draw line from center, to centerX, centerY+80
    ctx.lineTo(centerX, centerY + 80);
    ctx.stroke();

    // now our cursor is at centerX, centerY+80

    // lets draw a circle on the top left corner of the rectangle in the circle
    // first, now lets bring the cursor back to center
    ctx.moveTo(centerX, centerY);

    // let say we want to draw a circle of radius 30 and the circle should start from centerX,centerY and end at centerX and centerY

    // if the inner circle should start from centerX, centerY,
    // then the center of the inner circle must be
    // centerX - radius, centerY so that the inner circle starts drawing from centerX, centerY
    ctx.beginPath();
    innerRadius = 30;
    // get the centerX i.e. the center of Big circle and minus the innerRadius
    centerX = centerX - innerRadius;
    startAngle = 0;
    endAngle = deg2Rad(360);
    ctx.arc(centerX, centerY, innerRadius, startAngle, endAngle);
    ctx.stroke();

    // ctx.beginPath();
    // // ctx.moveTo(window.innerWidth / 2 - 20,700)
    // (centerX = window.innerWidth / 2), // sets x to center of screen
    //     (centerY = 700),
    //     (radius = 60),
    //     (startAngle = 0), // start from 0 rad i.e. 0 def
    //     (endAngle = deg2Rad(360)); // go till 2 * Math.Pi -> 360 deg
    // ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    // ctx.stroke();
};

/*
ctx.beginPath(): This clears the current path and allows you to start a 
new drawing path. It’s useful for isolating different shapes so that properties 
like strokeStyle and fillStyle apply only to the intended shape.

The arc() method has the following parameters:
x          -> Required. The x-coordinate of the arc's center
y          -> Required. The y-coordinate of the arc's center
radius     -> Required. The radius of the arc
startAngle -> Required. The angle where the arc starts in radians
endAngle   -> Required. The angle where the arc ends in radians
counterclockwise	-> Optional. A boolean value. If set to true, it draws the arc counter-clockwise between the start and end angles. The default is false (clockwise)

Note: If you specify the X as 100, Y as 200 and radius as 50,startAngle as 0 and end as 2radians
Then the cursor will move to X+raidus, Y, i.e. 150,200 and draw an arc from 150,200 to 150,200

The () around vaiables is just put by the Prettie Formatter, theres not meaning to it
*/
