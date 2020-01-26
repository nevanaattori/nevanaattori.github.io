//Select a link randomly to a button on the site

var randomLinkArray = [
    "https://youtu.be/Dma8Cq2i0cc",
    "https://youtu.be/dFhky0BoPKI",
    "https://youtu.be/cjqPQe-XcCg",
    "https://youtu.be/CJU7Siaifo8",
    "https://youtu.be/JTN3Dmu-TiE",
    "https://youtu.be/8uFHElblycA",
    "https://youtu.be/XbYc3SS10NQ",
    "https://youtu.be/c2x3Tbpa_F8"
]

function generateRandomLink()
{
    //randomLinkArray.sort(function(a,b){return 0.5 - Math-random()});
    return randomLinkArray.pop
}

var randomLink = generateRandomLink();
console.log(randomLink);

document.getElementById("randomBtn").href = JSON.stringify(randomLink);