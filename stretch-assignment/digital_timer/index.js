var myVar = setInterval(msTens, 1000);

function msTens() {
  let t = document.getElementById("msTens").textContent;
  console.log(t);
  if (t === "-") {
    t = "1";
    console.log(t)
  }
}