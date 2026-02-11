const body = this.document.body;
body.style.backgroundColor = "#0D0D0D";
body.style.alignContent = "center";
body.style.margin = 0;
body.style.height = "100vh";

const main = document.getElementById("main");
main.style.backgroundColor = "#f4f4f4";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.maxWidth = "1200px";
main.style.margin = "0 auto";
main.style.padding = "16px";
main.style.textAlign = "center";
main.style.gap = "16px";
main.style.justifyContent = "center";
main.style.alignItems = "center";

const textarea = document.getElementById("textarea");
textarea.style.width = "90%";

const btn = document.getElementById("change-bg-btn");
btn.style.maxWidth = "200px";
btn.style.cursor = "pointer";

function changeBg() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

function changeText(e) {
    const text = e.target.value;

    const letters = (text.match(/[a-z]/gi) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;const sentences = text.split(/[.!?]+/)
    .filter(segment => segment.trim().length > 0)
    .length;
    const numbers = (text.match(/\d/g) || []).length;


    document.getElementById('lettersCount').innerText = letters;
    document.getElementById('wordsCount').innerText = words;
    document.getElementById('sentencesCount').innerText = sentences;
    document.getElementById('numbersCount').innerText = numbers;
}
