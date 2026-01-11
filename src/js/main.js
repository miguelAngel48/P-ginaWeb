const canvas = document.getElementById("skillsCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();


const skillImagesSrc = [
  "./public/skills/java.png",
  "./public/skills/SpringBoot.png",
  "./public/skills/javascript.png",
  "./public/skills/sql.png",
  "./public/skills/css.png",
  "./public/skills/html.png",
  "./public/skills/git.png"
];


const skills = [];

skillImagesSrc.forEach(src => {
  const img = new Image();
  img.src = src;

  skills.push({
    img,
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    size: 96
  });
});


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  skills.forEach(skill => {
    skill.x += skill.vx;
    skill.y += skill.vy;

  
   if (skill.x <= 0) {
  skill.x = 0;
  skill.vx *= -1;
} else if (skill.x + skill.size >= canvas.width) {
  skill.x = canvas.width - skill.size;
  skill.vx *= -1;
}

if (skill.y <= 0) {
  skill.y = 0;
  skill.vy *= -1;
} else if (skill.y + skill.size >= canvas.height) {
  skill.y = canvas.height - skill.size;
  skill.vy *= -1;
}


    ctx.drawImage(skill.img, skill.x, skill.y, skill.size, skill.size);
  });

  requestAnimationFrame(animate);
}

animate();
