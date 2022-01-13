const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const navbar = getElement(".navbar");
const navBtnDOM = getElement(".nav-btn");
const menuIcon = getElement(".menu");
const headerNav = document.querySelector(".header-nav");


navBtnDOM.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  navBtnDOM.classList.toggle("change-btn");
  menuIcon.classList.toggle("fa-times");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;


// Slideshow
var imgNumber = 0;
var path = ["assets/bg1.PNG",
    "assets/bg2.PNG",
    "assets/bg3.PNG",
    "assets/bg4.PNG",
    "assets/bg5.PNG",
    "assets/bg6.PNG",
    "assets/bg7.PNG",
    "assets/bg8.PNG",
    "assets/bg9.PNG",
    "assets/bg10.PNG",
    "assets/bg11.PNG",
    "assets/bg12.PNG",
    "assets/bg13.PNG",
];

// var path = ["assets/bg1.png", "assets/bg2.png"];

var numberOfImg = path.length;
var timer = null;

function slide() {
    imgNumber = (imgNumber + 1) % path.length;
    console.log(imgNumber);
    document.getElementById(
        "slideshow"
    ).style.backgroundImage = `url(${path[imgNumber]})`;
    changeCounter(imgNumber + 1, numberOfImg);
}

function setTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        document.getElementById("startCycle").innerHTML = `<i class="fa fa-play"></i>`;
    } else {
        timer = setInterval(slide, 15000);
        document.getElementById("startCycle").innerHTML = `<i class="fa fa-pause"></i>`;
    }
    return false;
}

setTimer();

function previousImage() {
    --imgNumber;
    if (imgNumber < 0) {
        imgNumber = numberOfImg - 1;
    }
    document.getElementById(
        "slideshow"
    ).style.backgroundImage = `url(${path[imgNumber]})`;
    changeCounter(imgNumber + 1, numberOfImg);
    return false;
}

function nextImage() {
    ++imgNumber;
    if (imgNumber > numberOfImg - 1) {
        imgNumber = 0;
    }
    document.getElementById(
        "slideshow"
    ).style.backgroundImage = `url(${path[imgNumber]})`;
    changeCounter(imgNumber + 1, numberOfImg);
    return false;
}

function changeCounter(cur, total) {
    document.getElementById("counter").innerHTML = cur + "/" + total;
}
document.getElementById("counter").innerHTML = 1 + "/" + path.length;
