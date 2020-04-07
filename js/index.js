const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const nav = document.querySelectorAll("nav a");
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  nav[i].style.color = "green";
}
document
  .querySelector("nav")
  .appendChild(
    document.createElement("a").appendChild(document.createTextNode("link2"))
  );

document
  .querySelector("nav")
  .prepend(
    document.createElement("a").appendChild(document.createTextNode("link1"))
  );

let logo1 = document.getElementById("cta-img");
logo1.setAttribute("src", siteContent["cta"]["img-src"]);

let logo2 = document.getElementById("middle-img");
logo2.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// const cta = document.querySelector(".cta h1");
// cta.textContent = siteContent["cta"].h1;

document.querySelector(".cta h1").textContent = siteContent["cta"].h1;

const cta1 = document.querySelector(".cta button");
cta1.textContent = siteContent["cta"].button;

const main = document.querySelectorAll(".main-content h4");
main[0].textContent = siteContent["main-content"]["features-h4"];
// main[0].textContent = 2+2 4 would show up on the page

main[1].textContent = siteContent["main-content"]["about-h4"];
main[2].textContent = siteContent["main-content"]["services-h4"];
main[3].textContent = siteContent["main-content"]["product-h4"];
main[4].textContent = siteContent["main-content"]["vision-h4"];

const par = document.querySelectorAll(".main-content p");
par[0].textContent = siteContent["main-content"]["features-content"];
par[1].textContent = siteContent["main-content"]["about-content"];
par[2].textContent = siteContent["main-content"]["services-content"];
par[3].textContent = siteContent["main-content"]["product-content"];
par[4].textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent =
  siteContent.contact["contact-h4"];

document.querySelectorAll(".contact p")[0].textContent =
  siteContent.contact["address"];
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.contact["phone"];
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.contact["email"];

document.querySelector("footer p").textContent =
  siteContent.footer["copyright"];
