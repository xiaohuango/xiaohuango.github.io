// 设置导航栏ul的自动宽度
var nav_new = document.getElementsByClassName('nav')[0];
var nav_uls = document.getElementsByClassName('nav_uls')[0];
var navlen = nav_uls.children.length;
nav_uls.style.width = navlen * 150 + 'px';


// 设置pc端导航栏ol高度的自动获取
var ulis = document.getElementsByClassName('ulis');
var ols = document.getElementsByClassName('ols');

for (let i = 1; i < ulis.length; i++) {
    let len = ols[i - 1].children.length;
    ulis[i].onmouseover = function () {
        ols[i - 1].style.height = (len - 1) * 40 + 'px';
    }

    ulis[i].onmouseout = function () {
        ols[i - 1].style.height = '0' + 'px';
    }
}

// 移动端导航栏的展开

var mbtn = document.getElementsByClassName('mbtn')[0];
var wapnavf = document.getElementsByClassName('wapnavf')[0];
var wapnavf_ul = document.getElementsByClassName('wapnavf_ul')[0];
var wapnav = document.getElementsByClassName('wapnav')[0];
var mbtnb = false;
var wapnavf_ulen = wapnavf_ul.children.length;

mbtn.onclick = function () {
    if (mbtnb == false) {
        mbtnb = true;
        wapnav.style.width = '100%';
        let hei = document.documentElement.clientHeight || document.body.clientHeight;

        wapnav.style.height = hei * 2 / 5 + 'px';
        wapnavf.style.height = hei * 2 / 5 - 60 + 'px';


    } else {
        mbtnb = false;
        wapnav.style.width = 0;
        wapnav.style.height = 0;

    }
}

//  调整移动端导航栏
function changeMoNav() {
    let hei = document.documentElement.clientHeight || document.body.clientHeight;
    if (mbtnb == true) {
        wapnav.style.height = hei * 2 / 5 + 'px';

        wapnavf.style.height = hei * 2 / 5 - 60 + 'px';

    }
}


//  设置 移动端 导航栏的自动获取

var palis = document.getElementsByClassName('palis');
var paols = document.getElementsByClassName('paols');
var mores = document.getElementsByClassName('more');

var le = palis.length;
var boo = new Array(le).fill('false');

for (let i = 1; i < palis.length; i++) {
    let len = paols[i - 1].children.length;
    mores[i].onclick = function () {

        if (boo[i] == 'false') {
            boo[i] = 'true';
            palis[i].style.height = (len + 1) * 40 + 'px';
            paols[i - 1].style.height = len * 40 + 'px';
            for (let j = 1; j < palis.length; j++) {
                if (i != j && boo[j] == 'true') {
                    boo[j] = 'false';
                    palis[j].style.height = '40' + 'px';
                    paols[j - 1].style.height = 0;
                }
            }
        } else {
            boo[i] = 'false';
            palis[i].style.height = '40' + 'px';
            paols[i - 1].style.height = 0;
        }

    }
}


//  导航栏的适应整个屏幕

var header = document.getElementsByClassName('header')[0];
var scrolltop = document.getElementsByClassName('scrolltop')[0];
window.onscroll = function () {
    let wid = document.body.clientWidth;
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollY >= 150 && wid >= 1478) {
        header.style.opacity = 0.97;
        // scrolltop.style.display = "block";
        // header.style.position = "fixed";
    }
    else if (scrollY >= 130 && wid < 1478) {
        header.style.opacity = 0.97;
    }
    else {
        // scrolltop.style.display = "none";
        header.style.opacity = 1;
    }
}



window.onresize = function () {

    // 移动端
    changeMoNav();

    // 友情链接
    links();

}