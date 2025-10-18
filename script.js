// ===============================
// 🌸 Opening Page Logic
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openButton");
  if (openButton) {
    openButton.addEventListener("click", () => {
      // Smooth redirection with fade effect
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "landing.html";
      }, 1200);
    });
  }
});

// ===============================
// 🌷 Landing Page Scroll Animation
// ===============================
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-section");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});

// ===============================
// 🎶 Music Change per Section
// ===============================
const songs = [
  "assets/Songs for love/Diwana Hua Badal.mp3", // replace with your song files later
  "assets/Songs for love/Abhi Saans Lene Ki Fursat Nahin Jeet 128 Kbps.mp3",
  "assets/Songs for love/Taarif Karoon Kya Uski Kashmir Ki Kali 320 Kbps.mp3",
  "assets/Songs for love/Saathiya Nahin Jana Aya Sawan Jhoom Ke 320 Kbps.mp3",
  "assets/Songs for love/Lag Ja Gale Se Phir.mp3",
  "assets/Songs for love/Mera Dil Bhi Kitna Pagal.mp3",
  "assets/Songs for love/Isharon Isharon Men Dil Lenewale.mp3",
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex]);

function playSong(index) {
  if (audio) {
    audio.pause();
  }
  audio = new Audio(songs[index]);
  audio.play();
}

document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const section = Math.floor((scrollPos / docHeight) * songs.length);

  if (section !== currentSongIndex && section < songs.length) {
    currentSongIndex = section;
    playSong(section);
  }
});

// ===============================
// 🎂 Birthday Surprise Section
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const barbie = document.getElementById("barbie");
  const messageBox = document.getElementById("birthdayMessage");

  if (barbie) {
    barbie.addEventListener("click", () => {
      // Barbie blows candles
      const candles = document.querySelectorAll(".candle");
      candles.forEach((candle) => candle.classList.add("blow"));

      // Message appears smoothly
      setTimeout(() => {
        messageBox.style.opacity = "1";
        messageBox.style.transform = "scale(1)";
        // Play birthday song
        const bdaySong = new Audio("birthday.mp3");
        bdaySong.play();

        // Floating pictures & quotes
        startFloatingImages();
        startFloatingQuotes();
      }, 2000);
    });
  }
});

// ===============================
// 💞 Floating Animations
// ===============================
function startFloatingImages() {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // your pics
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("floating-img");
    img.style.left = Math.random() * 90 + "vw";
    img.style.animationDuration = Math.random() * 4 + 6 + "s";
    document.body.appendChild(img);
  });
}

function startFloatingQuotes() {
  const quotes = [
    "You’re my forever 🌹",
    "My sweetest blessing 💖",
    "Love you beyond stars ✨"
  ];
  quotes.forEach((text) => {
    const span = document.createElement("span");
    span.classList.add("floating-text");
    span.textContent = text;
    span.style.left = Math.random() * 90 + "vw";
    span.style.animationDuration = Math.random() * 4 + 6 + "s";
    document.body.appendChild(span);
  });
}
// End of script.js