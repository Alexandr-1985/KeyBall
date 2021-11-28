"use strict";

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function() {
        if (selector[0] === ".") {
            let div = document.createElement("div");
            div.classList.add("selector");
            div.style.cssText = `height: ${height}px;
                                 width: ${width}px;
                                 background: ${bg};
                                 fontSize: ${fontSize}px;`;
            div.textContent = "Build constructor with .block";
            // selector.position = "absolute";
            document.body.append(div);
        } else if (selector[0] === "#") {
            let div = document.createElement("div");
            div.setAttribute("id", "selector");
            div.style.cssText = `height: ${height}px;
                                 width: ${width}px;
                                 background: ${bg};
                                 fontSize: ${fontSize}px;`;
            div.textContent = "Build constructor with #block";
            // selector.position = "absolute";
            document.body.append(div);
        }
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    let newBlock = new DomElement(".square", "100", "100", "green", "14");
    newBlock.createElement(".square");
    const square = document.querySelector(".square");
    body.style.margin = 0;
    //square.style.position = "absolute";
    console.log("DOM fully loaded and parsed, newBlock");

    let top = 15;
    let left = 15;
    document.addEventListener("keydown", (eventObject) => {
        if (eventObject.key == 24) {
            // нажата клавиша up
            square.style.top = top - 20 + "px";
            top -= 10;
        } else if (eventObject.key == 25) {
            // нажата клавиша down
            square.style.top = top + "px";
            top += 10;
        } else if (eventObject.key == 26) {
            // нажата клавиша right
            square.style.left = left + "px";
            left += 10;
        } else if (eventObject.key == 27) {
            // нажата клавиша left
            square.style.left = left - 20 + "px";
            left -= 10;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let newBest = new DomElement("#square", "100", "1000", "yellow", "14");
    newBest.createElement();
    console.log("DOM fully loaded and parsed, newBest");
});