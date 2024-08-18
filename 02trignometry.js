window.onload = () => {
    let canvas = document.getElementById("canvas-tag");
    let ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // checking width, heigh
    console.log(width, height);

    // changing the context height to height / 2 to view the sinwave
    // orelse it will be present at top of page
    ctx.translate(0, height / 2);

    let x, y;
    for (let angle = 0; angle <= Math.PI * 2; angle += 0.01) {
        x = angle * 100;
        y = Math.sin(angle) * 100;
        // console.log(x)
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 2, 2);

        y = Math.cos(angle) * 100;
        // console.log(x)
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 2, 2);
    }
    // console.log(x, y);
    // console.log(width, height / 2);
};
