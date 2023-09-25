let text;
const btn = document.getElementById("submit");
const show = document.getElementById("show");

function getVal() {
  text = document.getElementById("comment").value;
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!text) {
    alert("Pls write comment");
  } else {
    const li = document.createElement("li");
    li.innerText = text;
    show.appendChild(li);
  }
});
