const firstHeader = document.querySelector(".article__header");
firstHeader.textContent ="Welcome to the Jacquelyn blog";

const headers = document.querySelectorAll(".article__header");

for (let i=0; i<headers.length; i++) {
  let header = headers[i];
  header.classList.add("important");
}

// Can also use a for-each loop: 
// document.querySelectorAll('.article__header').forEach(item => {item.classList.add('important')});

const dashedElement = document.querySelector(".dashed");
dashedElement.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");