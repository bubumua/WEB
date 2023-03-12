// Particle System
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(randomSeed) {
        this.x = randomSeed * canvas.width;
        this.y = randomSeed * canvas.height;
        this.radius = randomSeed * 3 + 2;    // 粒子半径
        this.color = 'white';   // 粒子颜色
        // this.radians = Math.random() * Math.PI * 100;
        this.radians = 0;
        this.velocity = 0.1;
        this.angle = randomSeed * Math.PI * 2; // 生成 0 到 2π 之间的随机角度
        this.distanceFromCenter = {
            x: randomSeed * 100 + 25,
            y: randomSeed * 100 + 25
        };
        this.lastMouse = {
            x: this.x,
            y: this.y
        };
    }

    draw(lastPoint) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        // ctx.lineWidth = this.radius;
        // ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.stroke();
        ctx.closePath();
    }

    update(mouse) {
        let deltaX = mouse.x - this.lastMouse.x,
            deltaY = mouse.y - this.lastMouse.y;
        this.lastMouse.x += (deltaX) * 0.05;
        this.lastMouse.y += (deltaY) * 0.05;
        this.radians += this.velocity * (deltaX / Math.abs(deltaX));

        this.x =
            this.lastMouse.x +
            Math.cos(this.radians) * this.distanceFromCenter.x;
        this.y =
            this.lastMouse.y +
            Math.sin(this.radians) * this.distanceFromCenter.y;

        this.draw(this.lastMouse);
    }
}
// create particles
const particles = [];
for (let i = 0; i < 2; i++) {
    particles.push(new Particle(Math.random()));
}

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0,0.1)';   // 透明度调节托影，过低影响画面
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update(mouse);
    });
    requestAnimationFrame(animate);
}

// 消除起始画布渐变
ctx.fillStyle = 'rgba(0, 0, 0)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// 启动动画循环
animate();