let Yes_button = document.querySelector("#Yes_btn");
let No_button = document.querySelector("#No_btn");
let para = document.querySelector("#text");

Yes_button.addEventListener("click", () => {

    para.innerHTML = `
    I love you too, Debarati. ❤️<br><br>

    You make my days brighter and my heart happier just by being in my life.<br><br>

    Thank you for loving me and for being the wonderful person you are.<br><br>

    I promise to always care for you, stand by your side, make you smile whenever I can, and cherish every moment we share.<br><br>

    No matter what life brings, you'll always have a very special place in my heart.<br><br>

    I love you more than words can truly express. 💖
    `;
    para.style.color = "white";

});

No_button.addEventListener("click", () => {

    para.innerHTML = `
    😱 Wait... did you really click <b>No</b>? I think your finger slipped! 😂<br><br>

    Let's pretend that never happened and give the <b>Yes!</b> button another chance.<br><br>

    After all, it's much happier than the <b>No</b> button. 😄<br><br>

    Go ahead... I promise I won't tell anyone. ❤️
    `;
    para.style.color = "white";

});
