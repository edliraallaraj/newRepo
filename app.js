const links = document.querySelectorAll('a');

links.forEach((link) => {
    if (link.href.includes("https")) {
        link.style.color = "yellow";
    } else {
        link.style.color = "red";
    }
});

// for (let link of links) {
//     if (link.href.includes("https")) {
//         link.style.color = "yellow";
//     } else {
//         link.style.color = "red";
//     }
// }