const childs = document.querySelectorAll("header .color-display div");
const colorName = document.querySelectorAll("header .color-display div span");
const generate = document.querySelector("nav .generate");
const colors = [
  "#ff0000",
  "#008000",
  "#dda0dd",
  "#ff4500",
  "#a52a2a",
  "#000000",
  "#d2691e",
  "#dc143c",
  "#7fff00",
  "#ff7f50",
  "#00ffff",
  "#008b8b",
  "#8b0000",
  "#ffd700",
  "#ff69b4",
  "#4b0082",
  "#f0e68c",
  "#fa8072",
  "#f4a460",
  "#ff6347",
  "#008080",
  "#40e0d0",
  "#d8bfd8",
  "#9acd32",
  "#ee82ee",
  "#ffa500",
  "#800080",
  "#808080",
  "#0000ff",
  "#000080",
  "#d2b48c",
  "#ffffff",
];

function shuffle(params) {
  for (let index = params.length - 1; index > 0; index--) {
    let colorSwap = Math.floor(Math.random() * (index + 1));
    [params[colorSwap], params[index]] = [params[index], params[colorSwap]];

    childs.forEach((val, i) => {
      params.forEach((colVal, colI) => {
        if (i == colI) {
          const cols = val.style;
          cols.backgroundColor = colVal;
          colorName[i].textContent = colVal;

          if (params[i] == "#000000") {
            colorName[i].style.color = "#ffffff";
          } else {
            colorName[i].style.color = "#000000";
          }
        }
      });
    });
  }
}

generate.addEventListener("click", () => {
  shuffle(colors);
});

childs.forEach(child=>{
  child.addEventListener('click', ()=>{
    const colorCode=child.querySelector('span').textContent;
    navigator.clipboard.writeText(colorCode);
    alert(`The color code ${colorCode} has been copied to your clip board`)
  })
})
