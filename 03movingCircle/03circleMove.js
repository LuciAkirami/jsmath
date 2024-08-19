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

    render();

    function render() {
        // this tells how much we move btw -offset & +offset, the minimum we can move is -offset when sin=-1 and max is +offset when sin=1
        let y = centerY + Math.sin(angle) * offset;

        // other ball will move in opposite direction
        // as the angle difference btw 2 balls Math.PI
        let otherY = centerY + Math.sin(angle + Math.PI) * offset;

        // let arr = ['red','blue','orange','purple','black']

        // we clear the screen on every render
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        // ctx.fillStyle = arr[(Math.floor(Math.random()*arr.length))]
        ctx.arc(centerX, y, 50, 0, Math.PI * 2);
        ctx.arc(centerX + 200, otherY, 50, 0, Math.PI * 2);
        ctx.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
};
