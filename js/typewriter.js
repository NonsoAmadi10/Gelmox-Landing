let txt = document.querySelector('.txt');

const typewriter = new Typewriter(txt, {
    loop: true,
    delay: 50,
    deleteSpeed: 300,
});

typewriter
    .pauseFor(2000)
    .typeString('Mouth Watering Delicious Cooking Is The Wish Of Every Busy Woman.')
    .pauseFor(300)
    .deleteAll(100)
    .typeString('Take Home and Taste This Gelmox Jollof Rice + Chicken Combo Pack <strong style="color: #f00">@₦2,000 Only.</strong>')
    .pauseFor(1000)
    .start();


/*
The following executes Ken's Slick Slider with several options.
*/
