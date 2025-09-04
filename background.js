const btn = document.getElementById("colorBtn");
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";});

    const auto = document.getElementById("auto");
    auto.addEventListener("click", function() {
        setInterval(function() {
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
    });

    const calculators = document.getElementById("calculators");
    function getResult() {
        const display = document.getElementById("displayResult");
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    }
    
    const gradient = document.getElementById("gradient");
    gradient.addEventListener("click", function() {
        let color1 = getRandomColor();
        let color2 = getRandomColor();
        document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    })