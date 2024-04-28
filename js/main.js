document.addEventListener("DOMContentLoaded", function () {
  // Buton olaylarını ayarlama
  const buttons = document.querySelectorAll(".blue-button-3");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setActive(button);
      switch (button.textContent.trim()) {
        case "Yoga":
          showYoga();
          break;
        case "Group":
          showGroup();
          break;
        case "Solo":
          showSolo();
          break;
        case "Stretching":
          showStretching();
          break;
        default:
          break;
      }
    });
  });

  // Scroll olayı ekleme
  const navbarOverlay = document.querySelector(".navbar-overlay");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbarOverlay.classList.add("scrolled");
    } else {
      navbarOverlay.classList.remove("scrolled");
    }
  });

  // BMI hesaplama fonksiyonları için event listener ekleme
  document
    .getElementById("height-input")
    .addEventListener("input", calculateBMI);
  document
    .getElementById("weight-input")
    .addEventListener("input", calculateBMI);
});

// Aktif butonu ayarlayan fonksiyon
function setActive(button) {
  var buttons = document.querySelectorAll(".blue-button-3");
  buttons.forEach(function (btn) {
    btn.classList.remove("active-button");
  });

  button.classList.add("active-button");
}
function showYoga() {
  document.getElementById("title-1").textContent = "Why are your Yoga?";
  document.getElementById("content-1").textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas accusantium molestiae illo hic? Commodi ducimus quo voluptatibus molestias ipsum nam dolorum quia dolor earum.";
  document.getElementById("title-2").textContent = "When comes Yoga Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 8:00am - 10:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 10:00am - 12:00pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 3:00pm - 6:00pm";
  document.getElementById("image-1").src = "images/yoga.jpg";
}

function showGroup() {
  document.getElementById("title-1").textContent = "Why are your Group?";
  document.getElementById("content-1").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum urna at quam viverra, a fermentum libero vulputate. Aliquam scelerisque urna est, ornare mollis urna.";
  document.getElementById("title-2").textContent =
    "When comes Group Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 10:00am - 12:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 12:00am - 14:00pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 14:00pm - 16:00pm";
  document.getElementById("image-1").src = "images/group.webp";
}

function showSolo() {
  document.getElementById("title-1").textContent = "Why are your Solo?";
  document.getElementById("content-1").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum urna vitae dolor ornare ornare. Donec vulputate turpis sed interdum vulputate. Aenean consectetur arcu vel.";
  document.getElementById("title-2").textContent = "When comes Solo Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 12:00am - 14:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 14:00am - 16:30pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 17:20pm - 19:30pm";
  document.getElementById("image-1").src = "images/solo.jpg";
}

function showStretching() {
  document.getElementById("title-1").textContent = "Why are your Stretching?";
  document.getElementById("content-1").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa nunc, volutpat sit amet arcu nec, finibus gravida nulla. Pellentesque habitant morbi tristique senectus et.";
  document.getElementById("title-2").textContent =
    "When comes Stretching Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 18:00am - 20:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 20:00am - 20:30pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 20:30pm - 22:30pm";
  document.getElementById("image-1").src = "images/stret.webp";
}

document.getElementById("height-input").addEventListener("input", calculateBMI);
document.getElementById("weight-input").addEventListener("input", calculateBMI);

function calculateBMI() {
  const heightValue = document.getElementById("height-input").value;
  const weightValue = document.getElementById("weight-input").value;

  if (heightValue && weightValue) {
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);
    updateTrianglePosition(bmi);
  }
}

function updateTrianglePosition(bmi) {
  const triangle = document.getElementById("triangle");
  let translateXValue = 0;

  if (bmi < 18.5) {
    translateXValue = -345; // Çok zayıf
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    translateXValue = -115; // Normal
  } else if (bmi >= 25 && bmi <= 29.9) {
    translateXValue = 125; // Fazla kilolu
  } else if (bmi >= 30 && bmi <= 34.9) {
    translateXValue = 365; // Obezite
  } else if (bmi >= 35) {
    translateXValue = 595; // Şiddetli obezite
  }

  triangle.style.transform = `translateX(${translateXValue}%)`;
}

function setActive(button) {
  // Önce tüm butonlardan 'active-button' sınıfını kaldır
  var buttons = document.querySelectorAll(".blue-button-3");
  buttons.forEach(function (btn) {
    btn.classList.remove("active-button");
  });

  // Şimdi tıklanan butona 'active-button' sınıfını ekle
  button.classList.add("active-button");
}

function showYoga() {
  document.getElementById("title-1").textContent = "Why are your Yoga?";
  document.getElementById("content-1").textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas accusantium molestiae illo hic? Commodi ducimus quo voluptatibus molestias ipsum nam dolorum quia dolor earum.";
  document.getElementById("title-2").textContent = "When comes Yoga Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 8:00am - 10:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 10:00am - 12:00pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 3:00pm - 6:00pm";
  document.getElementById("image-1").src = "images/yoga.jpg";
}

function showGroup() {
  document.getElementById("title-1").textContent = "Why are your Group?";
  document.getElementById("content-1").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum urna at quam viverra, a fermentum libero vulputate. Aliquam scelerisque urna est, ornare mollis urna.";
  document.getElementById("title-2").textContent =
    "When comes Group Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 10:00am - 12:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 12:00am - 14:00pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 14:00pm - 16:00pm";
  document.getElementById("image-1").src = "images/group.webp";
}

function showSolo() {
  document.getElementById("title-1").textContent = "Why are your Solo?";
  document.getElementById("content-1").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum urna vitae dolor ornare ornare. Donec vulputate turpis sed interdum vulputate. Aenean consectetur arcu vel.";
  document.getElementById("title-2").textContent = "When comes Solo Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 12:00am - 14:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 14:00am - 16:30pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 17:20pm - 19:30pm";
  document.getElementById("image-1").src = "images/solo.jpg";
}

function showStretching() {
  document.getElementById("title-1").textContent = "Why are your Stretching?";
  document.getElementById("content-1").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa nunc, volutpat sit amet arcu nec, finibus gravida nulla. Pellentesque habitant morbi tristique senectus et.";
  document.getElementById("title-2").textContent =
    "When comes Stretching Your Time.";
  document.getElementById("content-2").textContent =
    "Saturday-Sunday: 18:00am - 20:00am";
  document.getElementById("content-3").textContent =
    "Monday-Tuesday: 20:00am - 20:30pm";
  document.getElementById("content-4").textContent =
    "Wednesday-Friday: 20:30pm - 22:30pm";
  document.getElementById("image-1").src = "images/stret.webp";
}

document.getElementById("height-input").addEventListener("input", calculateBMI);
document.getElementById("weight-input").addEventListener("input", calculateBMI);

function calculateBMI() {
  const heightValue = document.getElementById("height-input").value;
  const weightValue = document.getElementById("weight-input").value;

  if (heightValue && weightValue) {
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);
    updateTrianglePosition(bmi);
  }
}

function updateTrianglePosition(bmi) {
  const triangle = document.getElementById("triangle");
  let translateXValue = 0;

  if (bmi < 18.5) {
    translateXValue = -345; // Çok zayıf
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    translateXValue = -115; // Normal
  } else if (bmi >= 25 && bmi <= 29.9) {
    translateXValue = 125; // Fazla kilolu
  } else if (bmi >= 30 && bmi <= 34.9) {
    translateXValue = 365; // Obezite
  } else if (bmi >= 35) {
    translateXValue = 595; // Şiddetli obezite
  }

  triangle.style.transform = `translateX(${translateXValue}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarOverlay = document.querySelector(".navbar-overlay");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbarOverlay.classList.add("scrolled");
    } else {
      navbarOverlay.classList.remove("scrolled");
    }
  });
});
