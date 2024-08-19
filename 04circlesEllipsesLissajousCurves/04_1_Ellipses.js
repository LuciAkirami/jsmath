window.onload = () => {
    let canvas = document.getElementById("canvas-tag");
    let ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let deg2Rad = (deg) => deg * (Math.PI / 180);

    let centerX = width * 0.5;
    let centerY = height * 0.5;
    let offset = height * 0.4; // basically our object will move vertically between appox -offset to offset
    let speed = 0.05; // increase to increase speed
    let angle = 0;
    // having two different radius will produce an elliptical path
    let aradius = 150;
    let bradius = 200;

    render();

    function render() {
        let y = centerY + aradius * Math.sin(angle);
        let x = centerX + bradius * Math.cos(angle);

        // use this code to visualize the path
        ctx.beginPath();
        ctx.rect(x, y, 2, 2);
        ctx.stroke();
        // commen till ctx.fill() to visualize the path taken by the circle

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
};
