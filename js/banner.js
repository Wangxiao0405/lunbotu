window.onload=function () {
    let imgBox1li=document.querySelectorAll("li");
    let circleBtn=document.querySelectorAll(".circleBtn div")
    let banner=document.querySelector(".banner");
    let leftBtn=document.querySelector(".leftBtn");
    let rightBtn=document.querySelector(".rightBtn");
    // console.log(getComputedStyle(imgBox1li, null).width);

    console.log(imgBox1li,circleBtn,banner,rightBtn,leftBtn);

    let now=next=0;
    let t=setInterval(move,2000);
    function move(){
        next++;
        if(next==imgBox1li.length){
            next=0;
        }
        imgBox1li[next].style.left="1226px";
        animate(imgBox1li[now],{left:-1226});
        animate(imgBox1li[next],{left:0});
        circleBtn[now].className="";
        circleBtn[next].className="hot"
        now=next;
    }
    function moveL() {
        next--;
        if(next<0){
            next=imgBox1li.length-1;
        }
        imgBox1li[next].style.left="-1226px";
        animate(imgBox1li[now],{left:1226});
        animate(imgBox1li[next],{left:0});
        circleBtn[now].className="";
        circleBtn[next].className="hot";
        now=next;
    }
    banner.onmouseenter=function () {
       clearInterval(t) ;
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    rightBtn.onclick=function () {
        move()
    }
    leftBtn.onclick=function () {
        moveL();
    }
    //小点点击
    for(let i=0;i<circleBtn.length;i++){
        circleBtn[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                imgBox1li[i].style.left="1226px";
                animate(imgBox1li[now],{left:-1226});
                animate(imgBox1li[i],{left:0});
                circleBtn[now].className="";
                circleBtn[i].className="hot"
            }else{
                imgBox1li[i].style.left="-1226px";
                animate(imgBox1li[now],{left:1226});
                animate(imgBox1li[i],{left:0});
                circleBtn[now].className="";
                circleBtn[i].className="hot";
            }
            next=now=i;
        }
    }

}