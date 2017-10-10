var oMusic=document.querySelector('.bg-music');
var oAudio=document.querySelector('.music');
var flag=true;
oMusic.addEventListener('click',function () {
    flag=!flag;
    if(flag===true){
        oAudio.play();
        oMusic.style.animationPlayState='running';
    }else {
        oAudio.pause();
        oMusic.style.animationPlayState='paused';
    }
});
var resize = document.querySelectorAll('.resize');
scaleW = window.innerWidth / 320;
scaleH = window.innerHeight / 480;
for (var i = 0; i < resize.length; i++) {

    resize[i].style.width = parseInt(getComputedStyle(resize[i])['width']) * scaleW + 'px';
    resize[i].style.height = parseInt(getComputedStyle(resize[i])['height']) * scaleH + 'px';
    resize[i].style.left = parseInt(getComputedStyle(resize[i])['left']) * scaleW + 'px';
    resize[i].style.top = parseInt(getComputedStyle(resize[i])['top']) * scaleH + 'px';
}

var scales = document.querySelectorAll('.txt');
for (var i = 0; i < scales.length; i++) {
    ss = scales[i].style;
    // 控制第四张图上文本的位置和大小
    ss.webkitTransform = ss.MsTransform = ss.msTransform = ss.MozTransform = ss.OTransform = ss.transform = 'translateX(' +
        scales[i].offsetWidth * (scaleW - 1) / 2 + 'px) translateY(' + scales[i].offsetHeight * (scaleH - 1) / 2 +
        'px)scaleX(' + scaleW + ') scaleY(' + scaleH + ') ';
}