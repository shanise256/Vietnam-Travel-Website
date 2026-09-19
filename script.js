document.addEventListener("DOMContentLoaded", function () {
    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(function (polaroid) {
        polaroid.addEventListener("click", function () {
            alert("A little Vietnam memory ♡ 🇻🇳");
        });
    });
});
