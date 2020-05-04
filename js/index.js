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

