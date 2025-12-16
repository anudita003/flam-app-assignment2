const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// ---------- Vector ----------
class Vec {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;
  }
}

// ---------- Control Points ----------
let P0 = new Vec(100, 250);
let P3 = new Vec(700, 250);

let P1 = new Vec(300, 150);
let P2 = new Vec(500, 350);

// Target (mouse)
let target = { x: 400, y: 250 };

// ---------- Physics ----------
const k = 0.02;
const damping = 0.85;

function spring(point, tx, ty) {
  let ax = -k * (point.x - tx) - damping * point.vx;
  let ay = -k * (point.y - ty) - damping * point.vy;

  point.vx += ax;
  point.vy += ay;

  point.x += point.vx;
  point.y += point.vy;
}

// ---------- Bézier ----------
function bezier(t, P0, P1, P2, P3) {
  let u = 1 - t;
  let tt = t * t;
  let uu = u * u;

  return {
    x: uu*u*P0.x + 3*uu*t*P1.x + 3*u*tt*P2.x + tt*t*P3.x,
    y: uu*u*P0.y + 3*uu*t*P1.y + 3*u*tt*P2.y + tt*t*P3.y
  };
}

// ---------- Derivative ----------
function tangent(t, P0, P1, P2, P3) {
  let u = 1 - t;
  return {
    x: 3*u*u*(P1.x-P0.x) + 6*u*t*(P2.x-P1.x) + 3*t*t*(P3.x-P2.x),
    y: 3*u*u*(P1.y-P0.y) + 6*u*t*(P2.y-P1.y) + 3*t*t*(P3.y-P2.y)
  };
}

// ---------- Mouse ----------
canvas.addEventListener("mousemove", e => {
  let r = canvas.getBoundingClientRect();
  target.x = e.clientX - r.left;
  target.y = e.clientY - r.top;
});

// ---------- Draw ----------
function draw() {
  ctx.clearRect(0,0,800,500);

  // Physics update
  spring(P1, target.x - 80, target.y);
  spring(P2, target.x + 80, target.y);

  // Curve
  ctx.beginPath();
  for (let t=0; t<=1; t+=0.01) {
    let p = bezier(t, P0, P1, P2, P3);
    t === 0 ? ctx.moveTo(p.x,p.y) : ctx.lineTo(p.x,p.y);
  }
  ctx.strokeStyle = "#0f0";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Tangents
  for (let t=0; t<=1; t+=0.1) {
    let p = bezier(t,P0,P1,P2,P3);
    let tan = tangent(t,P0,P1,P2,P3);

    let len = Math.hypot(tan.x,tan.y);
    tan.x /= len; tan.y /= len;

    ctx.beginPath();
    ctx.moveTo(p.x,p.y);
    ctx.lineTo(p.x+tan.x*25, p.y+tan.y*25);
    ctx.strokeStyle = "#ff0";
    ctx.stroke();
  }

  // Control points
  [P0,P1,P2,P3].forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,6,0,Math.PI*2);
    ctx.fillStyle="red";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
