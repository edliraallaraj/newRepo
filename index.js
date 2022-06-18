const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.href.includes("https")) {
    link.style.color = "yellow";
  } else {
    link.style.color = "red";
  }
});

// for (let i = 0; i < links.length; i++) {
//   if (links[i].href.includes("https")) {
//     links[i].style.color = "yellow";
//   } else {
//     links[i].style.color = "red";
//   }
// }