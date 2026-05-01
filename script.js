const fortunes =[
    "大吉💖素敵な出会いがあるかも！",
    "中吉😊少し勇気を出すと良いことが起きる",
    "小吉😐今日はゆっくり過ごそう",
    "凶😥無理せず慎重に行動しよう",
    "吉(^_^)きっかけになる出来事が起きる",
    "大凶Σ(ﾟДﾟ)何もしないほうがいいかも"
];

const button = document.getElementById("ebi")
const result = document.getElementById("ryu")

button.addEventListener("click", function () {

    const randomNumber = Math.floor(Math.random() * fortunes.length);

    result.textContent = fortunes[(randomNumber)];
})