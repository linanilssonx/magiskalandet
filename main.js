var hattis = document.getElementById('hattis');
hattis.addEventListener('dragstart', function (event) {});

var ts = document.getElementById('ts');

var boat = document.getElementById('boat');
boat.addEventListener('dragenter', function (ev) {
    ev.preventDefault();
    return true;
});
boat.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});
boat.addEventListener('drop', function (ev) {
    console.log(ev);
    //ts.loop = true;
    ts.play();
    setTimeout(function () {
        var hiddenImage = document.getElementById("hiddenImage");
        hiddenImage.classList.remove("hidden");
    }, 4500);
});

