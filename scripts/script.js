"use strict";

document.addEventListener("DOMContentLoaded", () => {
    function DomElement(
        selector,
        height,
        width,
        bg,
        fontSize,
        position,
        top,
        left
    ) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.position = position;
        this.top = top;
        this.left = left;

        this.createElement = function() {
            if (selector[0] === ".") {
                let div = document.createElement("div");
                div.classList.add("selector");
                div.style.cssText = `position: ${position};
                                 top: ${top}px;
                                 left: ${left}px;
                                 height: ${height}px;
                                 width: ${width}px;
                                 background: ${bg};
                                 fontSize: ${fontSize}px;`;
                div.textContent = "Build constructor with .block";

                document.body.append(div);
            } else if (selector[0] === "#") {
                let div = document.createElement("div");
                div.setAttribute("id", "selector");
                div.style.cssText = `position: ${position};
                                 top: ${top}px;
                                 left: ${left}px;
                                 height: ${height}px;
                                 width: ${width}px;
                                 background: ${bg};
                                 fontSize: ${fontSize}px;`;
                div.textContent = "Build constructor with #block";

                document.body.append(div);
            }
        };

        this.moveSquare = function() {
            document.addEventListener("keydown", (eventObject) => {
                console.log(eventObject);
                const div = document.querySelector("div");
                if (eventObject.key === "ArrowUp") {
                    // нажата клавиша up
                    console.log("Кнопка вверх");
                    div.style.top = `${parseInt(div.style.top) - 10}px`;
                } else if (eventObject.key === "ArrowDown") {
                    // нажата клавиша down
                    console.log("Кнопка вниз");
                    div.style.top = `${parseInt(div.style.top) + 10}px`;
                } else if (eventObject.key === "ArrowRight") {
                    // нажата клавиша right
                    console.log("Кнопка вправо");
                    div.style.left = `${parseInt(div.style.left) + 10}px`;
                } else if (eventObject.key === "ArrowLeft") {
                    // нажата клавиша left
                    console.log("Кнопка влево");
                    div.style.left = `${parseInt(div.style.left) - 10}px`;
                }
            });
        };

        this.init = function() {
            this.createElement();
            this.moveSquare();
        };
    }

    let newBlock = new DomElement(
        "#square",
        "100",
        "100",
        "green",
        "14",
        "absolute",
        "10",
        "20"
    );
    newBlock.init();
});