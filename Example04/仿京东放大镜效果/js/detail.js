
//当页面全部加载完之后再执行is代码
window.addEventListener('load',function(){

    /* 1、鼠标经过小图片盒子，黄色的遮挡层 和 大图片盒子显示，离开隐藏两个盒子功能 */
    //获取元素
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //1、当鼠标经过 preview_img 就显示遮挡层和大图片
    preview_img.addEventListener('mouseover',function(){
        mask.style.display="block";
        big.style.display="block";
    })
    //鼠标离开 preview_img 就显隐藏遮挡层和大图片
    preview_img.addEventListener('mouseout',function(){
        mask.style.display="none";
        big.style.display="none";
    })

    //3、黄色的遮挡层跟随鼠标功能。
   preview_img.addEventListener('mousemove',function(e){
     //把鼠标在盒子内的坐标给给遮盖层
    // 3.1 先计算鼠标在盒子内的坐标
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY -  this.offsetTop;
    //3.2把坐标给遮盖层
    var maskX = x- mask.offsetWidth/2;
    var maskY = y - mask.offsetHeight/2;
     //3.3  让遮盖层不超出盒子
     //如果坐标小于零 就让他停在0的位置 
     //如果大于遮挡层的最大移动距离 等于 最大距离
     var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
     var maskMaxY = preview_img.offsetHeight - mask.offsetHeight
    
     if(maskX <= 0){
        maskX = 0;
     }else if(maskX >= maskMaxX){
        maskX = maskMaxX;
     }
     if(maskY <= 0){
        maskY = 0;
     }else if(maskY >=  maskMaxY ){
        maskY = maskMaxY;
     }
    mask.style.left = maskX +"px";
    mask.style.top = maskY +"px";

    //4、移动黄色遮挡层，大图片跟随移动功能。 
     //获取元素
     var bigImg = document.querySelector('.big_img');
     
     //大图片最大移动距离
     var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
     var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
      //大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
      var bigX = maskX * bigMaxX / maskMaxX;
      var bigY = maskY * bigMaxY / maskMaxY;
      //将大图片的移动距离给left和top
      bigImg.style.left = -bigX + 'px';
      bigImg.style.top = -bigY + 'px';
   })
})
