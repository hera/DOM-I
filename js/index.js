const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Title

document.title = "Great Idea!";
document.querySelector("script[defer]").remove();


// Navigation

let navlinks = document.querySelectorAll(".container > header > nav > a");

for (let i = 0; i < 6; i++) {
    navlinks[i].innerText = siteContent["nav"][`nav-item-${i + 1}`];
}

// CTA

let ctaText = document.querySelector(".cta-text");

ctaText.querySelector("h1").textContent = siteContent.cta.h1;
ctaText.querySelector("button").textContent = siteContent.cta.button;
document.getElementById("cta-img").setAttribute("src", siteContent.cta["img-src"]);


// Top content

let topContent = document.querySelector(".top-content");

let topContentHeadings = topContent.querySelectorAll("h4");

topContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];

topContentParagraphs = topContent.querySelectorAll("p");

topContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];


// Middle

document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);


// Bottom content

let bottomContent = document.querySelector(".bottom-content");
let bottomContentHeadings = bottomContent.querySelectorAll("h4");

bottomContentHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeadings[2].textContent = siteContent["main-content"]["vision-h4"];


let bottomContentParagraphs = bottomContent.querySelectorAll("p");

bottomContentParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomContentParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomContentParagraphs[2].textContent = siteContent["main-content"]["vision-content"];


// Contact

let contact = document.querySelector(".contact");

contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = contact.querySelectorAll("p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];


// Footer

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];;


// Add a couple of menu links

// Create the first link
let extraLinkOne = document.createElement("a");
let extraLinkOneContent = document.createTextNode("FAQ");
extraLinkOne.appendChild(extraLinkOneContent);

// one more
let extraLinkTwo = document.createElement("a");
let extraLinkTwoContent = document.createTextNode("Blog");
extraLinkTwo.appendChild(extraLinkTwoContent);


document.querySelector("nav").prepend(extraLinkOne);
document.querySelector("nav").appendChild(extraLinkTwo);


// Make nav links green

document.querySelectorAll("nav a").forEach((item) => item.style.color = "green");


// Stretch 
// update content on the site with a click of a button

let words = ['awesome', 'cool', 'fascinating', 'good'];

function randomizeCta() {
    let randomNum = Math.floor(Math.random() * words.length);

    document.querySelector(".cta-text h1").textContent = `DOM is ${words[randomNum]}`;
}

document.getElementById("random-cta").addEventListener("click", randomizeCta);


// Stretch
// Update styles throughout the page as you see fit


// Place header logo before nav links

document.querySelector("header nav").style.order = 1;
document.getElementById("logo-img").style.alignSelf = "flex-start";
document.getElementById("logo-img").style.marginLeft = 0;
document.getElementById("logo-img").style.marginRight = "28px";