/**
 * Created by Administrator on 2017/4/1.
 */
//window.onload = function () {
//    var menuIcon = findEle('menuIcon');
//    var menuContent = findEle("menuContent");
//    var w = document.documentElement.clientWidth ||
//                document.body.clientWidth;
//    var menuClose = findEle("menuClose");
//    var isOpen = false;
//    var button = findEle('button');
//
//    menuIcon.onclick = function () {
//        if(isOpen) {
//            startMove(w);
//        }else{
//            startMove(w - 350);
//        }
//        isOpen = !isOpen;
//    }
//
//    menuClose.onclick = function(){
//        startMove(w);
//        isOpen = false;
//    };
//    button.onclick = function () {
//        startMove(w-350);
//        isOpen = true;
//    }
//};
//
///*根据ID返回节点*/
//function findEle(id) {
//    return document.getElementById(id);
//}
//
//
//var timer;
//function startMove(iTarget) {
//    clearInterval(timer);
//    var menuContent = document.getElementById('menuContent');
//    timer = setInterval(function () {
//        var speed = (iTarget - menuContent.offsetLeft) / 10;
//        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//        if (menuContent.offsetLeft === iTarget) {
//            clearInterval(timer);
//        } else {
//            menuContent.style.left = menuContent.offsetLeft + speed + 'px';
//        }
//    }, 30);
//}

;
$(function () {
    'use strict'
    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger = $('#menuIcon'),
        backButton = $('.back-to-top');

    function showSideBar() {
        mask.fadeIn();
//        sidebar.animate({'right':0});
        sidebar.css('right', 0);
    }

    function hideSideBar() {
        mask.fadeOut();
        sidebar.css('right', -sidebar.width());
    }

    sidebar_trigger.on('click', showSideBar);
    mask.on('click', hideSideBar);
    backButton.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })
    $(window).trigger('scroll');
})


