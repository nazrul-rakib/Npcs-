/* =========================================টপ হেডার শুরু========================================*/
document.addEventListener("DOMContentLoaded", function () {
      fetch('main-header.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Fetch error:', err));
    });
/* =========================================টপ হেডার শেষ========================================*/
/* =========================================মেইন হেডার শুরু========================================*/
    function toggleMenu() {
      const menu = document.getElementById('navLinks');
      menu.classList.toggle('show');
    }
/* =========================================মেইন হেডার শেষ========================================*/
/* ========================================= 5 image slide start ========================================*/
 // Typing effect
    const words = [
      { text: "আবাসিক প্রতিষ্ঠান", class: "text-red" },
      { text: "অনাবাসিক প্রতিষ্ঠান", class: "text-blue" },
      { text: "ডে-কেয়ার প্রতিষ্ঠান", class: "text-green" },
    ];

    let i = 0,
      j = 0,
      currentWord = "",
      isDeleting = false;
    const typingEl = document.getElementById("typing");

    function type() {
      const wordObj = words[i];
      currentWord = wordObj.text;

      if (!isDeleting) {
        j++;
      } else {
        j--;
      }

      const displayText = currentWord.substring(0, j);
      typingEl.innerHTML = `<span class="${wordObj.class}">${displayText}</span>`;

      let speed = isDeleting ? 50 : 120;

      if (!isDeleting && j === currentWord.length) {
        speed = 1000;
        isDeleting = true;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }

    type();

    // Looping Slider
    const slides = document.getElementById("slides");
    let index = 0;
    const total = slides.children.length;

    setInterval(() => {
      index = (index + 1) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
/* =========================================5 image slide end ========================================*/
