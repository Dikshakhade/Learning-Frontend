class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const divElem = document.createElement("div");
    divElem.innerHTML = `
        <h1>Hello World!</h1>`;
    divElem.style.color = "skyblue";
    divElem.style.textAlign = "center";
    shadow.appendChild(divElem);
  }
}

customElements.define("my-element", MyElement);
