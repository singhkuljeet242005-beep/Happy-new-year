// 🌸 Global floating hearts generator (soft & slow)

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "global-heart";
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 10) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}, 2000);

// Keep your consent alert
function noConsent() {
  alert("Aww 🥺 you HAVE to say yes… this was made with love 💖");
}
