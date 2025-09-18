let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let FPS = 10;
let x = canvas.width;

// потрібно згенерувати x зірок рандомне положення на канавасі по x
// y - рандомне  положення по у
// radius - від нуля до 1 рандомне число
// вектор руку vx: від -5 до 5, vy: від -5 до 5

for (let i = 0; i < x; i++) {
    stars[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.random() * 10 - 5,
        vy: Math.random() * 10 - 5
    }
}


function draw() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.globalCompositeOperation = "lighter";

 for (let i = 0; i < stars.length; i++) {
    let s = stars[i];

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius * 2, 0, Math.PI * 2);
    ctx.fill();
 }
}

function update() {
for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    s.x += s.vx/FPS;
    s.y += s.vy/FPS;

    if (s.x >= canvas.width || s.x <= 0) {
        s.vx = -s.vx;
    }


    if (s.y >= canvas.height || s.y <= 0) {
        s.vy = -s.vy;
    }

}
}

function tick() {
    update();
    draw();
    requestAnimationFrame(tick);
}

tick();