let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let downLoadButton = document.getElementById("save-text-file");
let text = document.querySelector("textarea");

function download(filename, downloadText) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(downloadText));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


upperCaseButton.addEventListener("click", () => {
     text.value = text.value.toUpperCase().split(" ").join(" ");
});

lowerCaseButton.addEventListener("click", () => {
    text.value = text.value.toLowerCase().split(" ").join(" ");
});

properCaseButton.addEventListener("click", () => {
    text.value = text.value.toLowerCase().split(" ").map(word => word.trim().charAt(0).toUpperCase() + word.substring(1)).join(" ");
});

// sentenceCaseButton.addEventListener("click", () => {
//     console.log(text.value.toLowerCase().split('.').map(sentence => {
//         return `${sentence.trim().charAt(0).toUpperCase()}${sentence.trim().slice(1)}`;
//     }).join('. '));
// });

sentenceCaseButton.addEventListener("click", () => {
   text.value = text.value.toLowerCase().split('. ').map(sentence => sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1)).join('. ');
});

downLoadButton.addEventListener(("click"), () => {
   let downloadText = text.value;
   let filename = "text.txt";
   download(filename, downloadText)
}, false);

