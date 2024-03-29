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

// Nav
const navA = document.querySelectorAll('nav a');

navA[0].textContent = siteContent["nav"]["nav-item-1"]; 
navA[1].textContent = siteContent["nav"]["nav-item-2"]; 
navA[2].textContent = siteContent["nav"]["nav-item-3"]; 
navA[3].textContent = siteContent["nav"]["nav-item-4"]; 
navA[4].textContent = siteContent["nav"]["nav-item-5"]; 
navA[5].textContent = siteContent["nav"]["nav-item-6"]; 

const navNewA = document.querySelector('nav a');
const newNav1 = document.createElement('a');
newNav1.textContent = 'Careers';
newNav1.style.color = 'green';
navNewA.appendChild(newNav1);

const newNav2 = document.createElement('a');
newNav2.textContent = 'React';
newNav2.style.color = 'green';
navNewA.appendChild(newNav2);

for (let i = 0;i < navA.length;i++) {
  navA[i].style.color = "green"
}

document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

// cta
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
document.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"];
document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"];

// main-content
const mainH4 = document.querySelectorAll('.main-content h4');
mainH4[0].textContent = siteContent['main-content']['features-h4']
mainH4[1].textContent = siteContent['main-content']['about-h4']
mainH4[2].textContent = siteContent['main-content']['services-h4']
mainH4[3].textContent = siteContent['main-content']['product-h4']
mainH4[4].textContent = siteContent['main-content']['vision-h4']

const mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent['main-content']['features-content']
mainP[1].textContent = siteContent['main-content']['about-content']
mainP[2].textContent = siteContent['main-content']['services-content']
mainP[3].textContent = siteContent['main-content']['product-content']
mainP[4].textContent = siteContent['main-content']['vision-content']

document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// contact
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// footer
document.querySelector('footer').textContent = siteContent['footer']['copyright'];