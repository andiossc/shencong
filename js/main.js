/**
 * Created by Administrator on 2017/4/1.
 */
window.onload = function () {
    var menuIcon = document.getElementById('menuIcon');
    var menuContent = document.getElementById("menuContent");
    var w = document.documentElement.clientWidth ||
                document.body.clientWidth;
    var menuClose = document.getElementById("menuClose");
    var isOpen = false;

    console.log(menuIcon);
    menuIcon.onclick = function () {
        if(isOpen) {
            startMove(w);
        }else{
            startMove(w - 350);
        }
        isOpen = !isOpen;
    }
    menuClose.onclick = function(){
        startMove(w);
        isOpen = false;
    }
};
var timer;
function startMove(iTarget) {
    clearInterval(timer);
    var menuContent = document.getElementById('menuContent');
    timer = setInterval(function () {
        var speed = (iTarget - menuContent.offsetLeft) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (menuContent.offsetLeft === iTarget) {
            clearInterval(timer);
        } else {
            menuContent.style.left = menuContent.offsetLeft + speed + 'px';
        }
    }, 30);
}