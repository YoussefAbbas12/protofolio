// عمل link لتغير اللون
function main(classes) {
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet', 'href');
    link.href = `css/${classes}.css`;

    document.head.appendChild(link);
}
// لفتع النافذه
let btn = document.querySelector('.open');

btn.addEventListener('click', () => {
    let cont = document.querySelector('.theme-content');
    cont.style.display = 'block';
})


// لغلق النافذه
let btn2 = document.querySelector('.close');

btn2.addEventListener('click', () => {
    let cont = document.querySelector('.theme-content');
    cont.style.display = 'none';
})

// غلق لنافذه عن عمل scroll

addEventListener('scroll', () => {
    if (document.querySelector('.theme-content')) {
        document.querySelector('.theme-content').style.display = 'none';
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------


window.addEventListener('scroll', function () {
    var aboutImg = document.querySelector('.img11');
    var section2 = document.getElementById('about-us');
    let title2 = document.querySelector('.title2');
    let lorem = document.querySelector('.lorem');


    if (window.scrollY >= section2.offsetTop - 300) {
        aboutImg.style.width = '400px'
        aboutImg.style.height = '400px'
        title2.style.opacity = '1';
        title2.style.transform = 'translateX(100px)';
        lorem.style.opacity = '1';
        lorem.style.transform = 'translateX(100px)';
    }
    if (window.scrollY <= section2.offsetTop - 300) {
        aboutImg.style.width = '0'
        aboutImg.style.height = '0'
        title2.style.opacity = '0';
        title2.style.transform = 'translateX(0)';
        lorem.style.opacity = '0';
        lorem.style.transform = 'translateX(0)';
    }

});


// -------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('scroll', function () {
    var section3 = document.getElementById('contact');
    let form = document.querySelector('.form');
    let lorem = document.querySelector('.send');

    if (window.scrollY >= section3.offsetTop - 300) {
        form.style.opacity = '1';
        form.style.transform = 'translateY(0)';
        lorem.style.opacity = '1';
        lorem.style.transform = 'translateX(0)';
    }
    if (window.scrollY <= section3.offsetTop - 300) {
        form.style.opacity = '0';
        form.style.transform = 'translateY(100px)';
        lorem.style.opacity = '0';
        lorem.style.transform = 'translateX(100px)';
    }

});
