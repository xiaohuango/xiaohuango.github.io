// 友情链接
var con3_ul = document.getElementsByClassName('con3_ul')[0];
var linklen = con3_ul.children.length;
var content_three = document.getElementsByClassName('content_three')[0];
var lendd = linklen/4;

let wei = document.documentElement.clientWidth || document.body.clientWidth;
if(wei <= 993){
    content_three.style.height = linklen * 70 + 40 + 'px';
    console.log(content_three.style.height)
}else {
    content_three.style.height =  70 * lendd + 120 + 'px';
}

    // 友情链接
function links(){
    let wei = document.documentElement.clientWidth || document.body.clientWidth;
    if(wei <= 993){
        content_three.style.height = linklen * 70 + 40 + 'px';
    }else {
        content_three.style.height =  70 * lendd + 120 + 'px';
    }
}