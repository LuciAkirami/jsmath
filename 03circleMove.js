window.onload = () => {
    let canvas = document.getElementById("canvas-tag");
    let ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let centerX = width * 0.5;
    let centerY = height * 0.5;
    let offset = height * 0.4; // basically our object will move vertically between appox -offset to offset
    let speed = 0.05; // increase to increase speed
    let angle = 0;

    render();

    function render() {
        let y = centerY + Math.sin(angle) * offset;
        // this tells how much we move btw -offset & +offset, the minimum we can move is -offset when sin=-1 and max is +offset when sin=1
        // let arr = ['red','blue','orange','purple','black']
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        // ctx.fillStyle = arr[(Math.floor(Math.random()*arr.length))]
        ctx.arc(centerX, y, 50, 0, Math.PI * 2);
        ctx.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
};
