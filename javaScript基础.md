

##### javaScript组成

- EXMAScript:规定了js语法
- DOM：文档对象模型
- BOM：浏览器对象模型

##### js的书写位置

行内式

```javascript
<input type="button" value="点击" onclick="alert('这是内容')" >
```

内嵌式

```javascript
<script>
         alert("内嵌式js:进入页面弹出");
    </script>
```

外部式

```js
 <script src="./js/demo1.js"></script>
```

demo.js

```js
alert('外部式：弹出内容')
```

##### js的输入输出

alert(msg)  弹出警示框

console(msg) 控制台输出打印

prompt（info）弹出输入框，用户输入

```js
   // 一个输入框
        prompt("请输入数字");
        //警示框
        alert('警示框');
        //console 控制台处输出
        console.log('控制台处输出');
```

##### js变量

###### 变量的使用

使用时分为两部：1、声明变量  2、赋值

```js
//1、声明一个age变量
        var age;
        //赋值
        age = 99;
```

```js
 //变量的初始化：声明并赋值
        var stuName = 'javascript';
        console.log(stuName);
```

案例：

```
 /* 
        弹出输入框提示输入姓名
        弹出对话框，显示姓名
        */
        var youName = prompt('请输入姓名');       
        alert(youName);
```

###### 变量语法扩展

- 更新变量：以最后一次赋值为准


- 声明多个变量：用逗号隔开。

```js
var myname = 'linlin',
             address = '广东',
             age = 99;
```

##### 数据类型

js的变量数据类型是只有在程序运行的过程中，根据等号右边的值来确定的

![image-20220629102507857](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629102507857.png)

在数字前面加0,表示八进制。

```
var demo = 010；
console.log(demo);//输出十进制：8
```

在数字前面加0x,表示十六进制。

```
var demo = 0x10；
console.log(demo);//输出十进制：16
```

```
//数字型max
     console.log(Number.MAX_VALUE);
     //min
     console.log(Number.MIN_VALUE);
     //无穷大
     console.log(Number.MAX_VALUE*2); //infinity
    //无穷小
    console.log(-Number.MAX_VALUE*2); //-infinity
```

 isNaN()：  用来判断非数字  并返回一个值

​        如果是数字：false

​        如果不是数字： true

字符串类型 ： 可用单引号或双引号 可以嵌套

字符串长度

```js
  //1、检测获取字符串的长度 length
  var str = "123456789";
  alert(str.length)//9
```

字符串的拼接：如果有一个是字符串最终会是字符串

```js
    //数值相加，字符相连
    console.log(str+y+'test');
    console.log('11'+11);//1111
    console.log(11+11);//22
    console.log("11"+"11");//1111
```

布尔型boolean

```
 var tmp1 = true;//boolean型
        var tmp2 = false;
        console.log(tmp1+1);//true参与加法运算时为：1
        console.log(tmp2+1);//false参与加法运算时为：0
```

未定义数据类型 undefined 

```
如果一个变量声明的未赋值，就是undefined 未定义数据类型
        var str;
        console.log(str);//undefined    
        var demo = undefined;
        console.log(demo+"lin0");//undefinedlin0
        console.log(demo + 1);//NaN
```

空值null 

```
var space = null;
        console.log(space+"lin");//nulllin
        console.log(space+1);//1
```

###### 获取变量的数据类型 

typeof 变量名

```js
 		 var demo1= 1;
		console.log(typeof demo1);//number
		var demo2= "lin";
        console.log(typeof demo2);//string
        var demo3= true;
        console.log(typeof demo3);//boolean
        var demo4= undefined;
        console.log(typeof demo4);//undefined
        var demo5= null;
        console.log(typeof demo5);//object
```

###### 数据类型的转化

从表单、prompt获取的数据默认为字符串型。

转化为字符串：

![image-20220629111907537](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629111907537.png)

转化为数字型

![image-20220629112826935](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629112826935.png)

```js
	//1、parseInt（变量） 转化为整形
       console.log(parseInt("6.66"));//6
       console.log(parseInt("6.99"));//6
       console.log(parseInt("6demo6"));//6
       console.log(parseInt("demo1"));//NaN
       
       //2、parseFloat（变量) 转化为浮点数
       console.log(parseFloat("6.66"));//6.66
       console.log(parseFloat("6"));//6
      console.log(parseFloat("6.88demo6"));//688
       
       //3、Number强制类型转化
        console.log(Number("12"));//12
       //4、利用算术运算  隐式转化
       console.log("12"-1);//11
```

简单加法器

```js
 /* 计算两个数的值， */
        var tmp1=parseInt(prompt("输入第一个值"));
        var tmp2=parseInt(prompt("输入第二个值"));
        var sum =tmp1+tmp2;
        alert(tmp1+"+"+tmp2+"="+sum);
```

转化为布尔型

![image-20220629114847186](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629114847186.png)

除了” ” ，null, NaN，0 ，undefind 为false，其他的为true。

##### js的运算符

（operator）也称为操作符

###### 算术运算符

![image-20220629130258160](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629130258160.png)

递增运算符

```
// 前置递增运算符 先++后返值
        var num =11;
        ++num;
        console.log(num);
//后置递增运算符 先返值后++
        var tmp = 10;
        tmp++;
        console.log(tmp++);//11
        console.log(tmp);//12
```

![image-20220629211938013](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629211938013.png)

![image-20220629214558118](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629214558118.png)

逻辑运算符

用来进行布尔值运算的运算符，其返回值也是布尔值

![image-20220629215220275](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629215220275.png)

```js
 //逻辑与&& 两个都为true 结果才为true
        console.log(true && false); //false
        console.log(true && true); //true

        //逻辑与|| 两个都为false 结果才为false
        console.log(true || false); //true
        console.log(false || true); //true
        console.log(false || false); //false
        
        //逻辑非
        console.log(!true);
        console.log(!false);
```

运算符的优先级

![image-20220629222930793](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220629222930793.png)

##### js的流程控制

- 顺序流程控制、分支流程控制if语句、循环流程控制

###### 分支流程控制if语句

IF的语法就结构
        if(条件判断){
            // 执行语句
        }

多分支语句 就是利用多个条件来选择不同的语句执行，得到不同的结果

```
 if(条件表达式1){
	 //语句
  }else if(条件表达式2){
    //语句
  }else if(条件表达式3){
    //语句
  }else{
    //最后的语句
  }
```

三元表达式

语法结构

条件表达式？真的执行语句1：假的执行语句2

数字补零

```js
 /* 
            用户输入0-59之间的数字，如果数字小于10，则在数字i却那么补0
        */
       var time = prompt("请输入0-59之间的数字");
       var result = time < 10 ? '0'+time : time;
        alert(result);
```

switch 多分支语句

 语法结构

```
 switch(表达式){
     case value1:
        执行语句;
        break;
      case value2:
        执行语句;
        break;  
      ...
      default:
        执行最后的语句; 
    }
```

###### 循环流程控制

for循环

 循环的目的：可以重复执行某些语句



​    1、for重复执行某些代码，通常跟计数有关

​    2、for语法结构

​    for(初始化变量;条件表达式;操作表达式){

​      // 循环体

  }

​    3、双重for循环

​    for(外层的初始化变量;外层的条件表达式;外层的操作表达式){

​      for(里层的初始化变量;里层的条件表达式;里层的操作表达式){

​        语句

​      }

​    }

 1到100的整数的和的平均值

```
    var sum=0,aver=0;

    for(var i=1;i<=100;i++){
      sum+=i;
    }
    aver=sum/100
    console.log("1到100的整数累加和为："+sum);//1到100的整数累加和为：5050
    console.log("平均数："+aver);
```

求1-100所有的偶数和奇数之和  

```js
  var even=0,odd=0;
    for(var i=1;i<=100;i++){
      if(i%2==0){
        even+=i;
      }else{
        odd+=i;
      }
    }
    console.log("1-100之间的偶数和："+even+"  奇数和为："+odd)   
```

 3、求1-100之间能被三整除的和为

```js
    var result =0;
    for(var i=1;i<=100;i++){
      if(i%3==0){
        result+=i;
      }
    }
    console.log("1-100之间能被三整除的和为"+result);
```

4、打印九九乘法表

```js
 var str ="";
        for(var i=1; i<=9; i++){
            for(var j =1; j<=i; j++){
                str =str+"\t"+i+'✖'+j+"="+i*j;
            }
            str = str+"\n";
        }
        console.log(str);
```

打印星星

```js
 //倒三角星星
 var str ="";
        for(var i=1;i<=10;i++){
            for(var j = i ;j<=10;j++){
                str= str+"⭐";
            }
            str = str+"\n";
        }
        console.log(str);

        /* 
        ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐
        ⭐⭐⭐
        ⭐⭐
        ⭐       
        */
  //正三角星星
        var str1 ="";
        for(var i=1;i<=10;i++){
            for(var j = 1 ;j<=i;j++){
                str1= str1+"⭐";
            }
            str1 = str1+"\n";
        }
        console.log(str1);
        /* 
        ⭐
        ⭐⭐
        ⭐⭐⭐
        ⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        */
```

###### 实习简易ATM

```js
  var balance =0;//用来记录余额
        //获取选择的操作
        do{
            var num = parseInt(prompt("请输入你想要的操作：\n 1:存钱\n2:取钱\n3:显示余额\n4:退出"));
            switch(num){
                case 1:
                    var tmp =parseInt(prompt("请输出要存入的金额："));
                    if(tmp>0){
                        balance += tmp;
                        alert("成功存入"+tmp+"元");
                    }
                    break;
                case 2:
                    var down = parseInt(prompt("请输出要取出的的金额："));
                    if(down<=balance){
                        balance -= down;
                        alert("成功取出"+down+"元");
                    }else{
                        alert("余额不足");
                    }
                    break;
                case 3:
                    alert("现在的余额为："+balance);
                    break;
                case 4:
                    alert("成功退出");
                    break
                default:
                    alert("无该选项，请重新选择");
            }
        }while(num!=4)
```

##### 数组

一组数据的集合

创建数组的方式：

​	1、利用new创建数组

​	2、利用数组字面量创建数组

数组的索引

​        下标值：用来访问数组元素的序号（下标从0开始）

 获取数组元素 格式 数组名[索引号]

/* 求数组中的最大值 */

```js
     var arr5 = [1,3,5,7,9,22,56,78,34,55];
      var max = arr5[0];
      for(var i =1; i < arr5.length; i++ ){
          if(max < arr5[i]){
            max = arr5[i];
          }
      }
      console.log("1,3,5,7,9,22,56,78,34,55的最大数值："+max); //1,3,5,7,9,22,56,78,34,55的最大数值：78
```

##### js的函数

函数：封装相同执行操作的代码块

函数使用：第一步：声明函数 第二步调用函数

   1、声明函数

```
  function 函数名（）{
        //函数体
      }    
```

（function是声明函数的关键字，必须小写）

如累加函数

```js
 		// 累加
        function getSum(num1,num2){
            var sum =0;
            for(var i=num1;i<=num2;i++){
                sum+=i;
            }
            console.log(sum);
        }
        //调用函数：1-100累加 
        getSum(1,100);//5050
        //调用函数：45-1000累加
        getSum(45,1000);//499510
```

![image-20220630224444373](C:\Users\0920\AppData\Roaming\Typora\typora-user-images\image-20220630224444373.png)

```js
 //1、利用函数实现任意两个数的和
        function getSum1(num1,num2){
            var sum =num1+num2;
            console.log("两个数的和"+sum);
        }
//2、利用函数实现任意两个数之间的和
        function getSum2(num1,num2){
            var sum =0;
            for(var i=num1;i<=num2;i++){
                sum+=i;
            }
            console.log("两个数之间的和:"+sum);
        }
        var a =parseInt(prompt("输入第一个数："));
        var b =parseInt(prompt("输入第E二个数："));
        getSum1(a,b);
        getSum2(a,b);
        /* 两个数的和46
            两个数之间的和:529
         */
```

##### return 终止函数

​	return后面的代码不会被执行	

​	只能返回一个值。

###### break，continue，return的区别

​	break：结束当前循环（如for，whlie）

​	continue：跳出本次循环，继续执行下次循环

​	return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码

###### arguments的使用

​	1、存储了传递来的所有实参。

​	2、只有函数才有arguments对象

​	3、每个函数都内置好了argument是

伪数组 并不是真正意义上的数组

​     1、具有数组的length属性

​     2、按照索引的方式进行存储的

​     3、它没有真正的数组的一下方法 pop push 等等

函数的两种声明函数

​	1、利用函数关键字自定义（命名函数）；

```js
function 函数名（）{ ....}
```

​	2、函数表达式 （匿名函数）

```
var fun = function(){
		.......
}
fun();//调用
```

（fun是变量名，不是函数名）

##### js的作用域

限定变量的可用区域的起效果

为了提高程序的可靠性，更重要的是减少命名冲突

###### 	两种作用域（es6前）

​		1、全局作用域 

​				整个script标签 或者是 整一个js文件

​		2、局部作用域（函数作用域）

​				在函数内部为局部作用域。只能在函数内部起作用。

全局变量：

​		特殊情况，在函数内部没有声明之间使用的变量也为全局变量

全局变量和局部变量的执行效率

（1）全局变量只有在浏览器关闭后才会销毁，比较占内存

（2）局部变量在函数运行结束就销毁，节约内存控件

js没有块级作用域 （es6有新增块级作用域）

##### js的预解析

解析器运行js的步骤

​	1、预解析 ：分为 变量预解析（变量提升） 和 函数预解析（函数提升）

​			变量预解析：把所有的变量声明提升到当前作用域的最前面 不提升赋值操作

​			函数提示：把所有的函数声明升到当前作用域的最前面 不调用函数

​	2、代码执行

##### js对象(object)

对象是一组无序的相关属性和方法的集合，对象由属性和方法组成的	

​	属性：事物的特征

​	方法：事物的行为

js中的对象分为3种：自定义对象，内置对象，浏览器对象

创建对象的三种方法：

​	1、利用对象字面量创建对象

​		 (1)对象里的属性和方法采用 键值对 的形式  属性名：值

​      （2）多属性或方法中间用逗号隔开

​      （3）方法后面跟的是匿名函数

```
 var obj1 ={
            username:'linlin',
            age:18,
            sex:'男',
            syHi:function(){
                console.log("hi");
            }
        };
```

###### 		对象的调用

​		(1)调用对象的属性， 采用 对象名。属性名

​    	(2)调用对象的属性第二种方法 ；采用 对象['属性名']

   	 (3) 调用对象的方法 对象名.方法名（）

```
        console.log(obj1.username,obj1['age']); //linlin 18
        obj1.syHi(); //hi
```

​	2、利用new Object创建对象

```
        var obj2 = new Object();
        //追加属性
        obj2.lever=1;
        obj2.name="lin";
        obj2.pewor=100;
        obj2.sayNo=function(){
            console.log("no!");
        }
```

​	3、利用构造函数创建对象

（以上两个方法一次只能创建一个对象）

可以一次创建多个对象

```
 //语法格式
        function 构造函数名(){
            this.属性=值;
            this.方法 =function(){}
        }
        //调用方法
        new 构造函数名();
```

规范：构造函数名首字母要大写

​    		  构造函数不需要return 就可以返回结果

​				调用构造函数必须用 new

```js
 function Star(uname,uage,upower){
            this.name = uname;
            this.age = uage;
            this.power = upower;
            this.fun = function(demo){
                console.log(demo);
            }
        }
         var my = new Star('linlin',89,100);
         console.log(my);
         my.fun("hahhahahahaha");
```

###### new 关键字执行过程

​      1、new构造函数可以在内存中创建一个空的对象

​      2、this 就会在指向刚创建的空对象

​      3、执行构造函数里面的代码 给这个空对象添加属性和方法

​      4、返回这个对象

###### 遍历对象

for... in语句用于遍历对象

​      语法格式

```
   for(变量 in 对象){   }
```

```
 for(var k in obj4){ //kS是变量
                    console.log(k); //输出的是属性名
                    console.log(obj4[k]); //输出的是对应属性名的值

                }
```

##### 内置对象

指js语言自带的一些对象，这些对象开发者使用，并提供了一些常用的或是最基本二必要的功能

###### 查文档

MDN：https://developer.mozilla.org/zh-CN/

###### Math对象

​	Math数学对象 不是一个构造函数 所以不需要new来调用 而是直接使用里面的属性和方法

```
    console.log(Math.PI);//输出圆周率  3.141592653589793
    console.log(Math.max(99,45,6,7,88,9)); //输出最大值 99
    console.log(Math.max(-12,-1)); //输出最大值 -1
    console.log(Math.max(12,"字符")); //输出最大值 NaN
    console.log(Math.max()); //输出最大值  -Infinity
```

绝对值方法Math.abs()

```
console.log(Math.abs(1));
         console.log(Math.abs(-1));
         console.log(Math.abs("-1")); //隐式转化 转换成数字型
         console.log(Math.abs("lin"));
```

三个取整的方法

 向下取整 、向上取整、四舍五入取整

```
		//  向下取整 Math.floor()
        console.log(Math.floor(1.9));//1
        console.log(Math.floor(1.1));//1
        //  向上取整
        console.log(Math.ceil(1.9));//2
        console.log(Math.ceil(1.1));//2
        //  四舍五入取整
        console.log(Math.round(1.9));//2
        console.log(Math.round(1.5));//2
        console.log(Math.round(1.1));//1
        console.log(Math.round(-1.1));//-1
        console.log(Math.round(-1.5));//-1
```

随机数方法random（）

 return 一个随机的浮点数 0=<x<1

```
console.log(Math.random());
```

得到两个数之间的随机整数 并且包含两个整数

```js
 function getRandom(min,max){
            return Math.floor(Math.random()*(max-min+1))+min;
       }
 console.log(getRandom(1,100));
```

随机点名

```
var stuName=["lilin","hehe","手机","随机"];
console.log(stuName[getRandom(0,stuName.length-1)]);
```

###### Date对象

是一个构造函数 必须使用new调用创建我们的日期对象

  使用date对象

```
    var datetime = new Date(); //如果没有参数，返回当前系统的当前时间
    console.log(datetime);
```

// 参数的常用写法：数学型 2022，10，10 或是在 字符串型 '2022-10-10 8:8:8'

```
   console.log(new Date('2022-10-10 8:8:8')); //Mon Oct 10 2022 08:08:08 GMT+0800 (中国标准时间)   
    console.log(new Date('2022/10/10')); //Mon Oct 10 2022 00:00:00 GMT+0800 (中国标准时间)
```

格式化日期 年月日

```
var date = new Date();
    console.log(date.getFullYear());//返回当前的年份
    console.log(date.getMonth()+1);//返回当前的月份
    console.log(date.getDate());//返回当天几号
    console.log(date.getDay());//返回当天星期几 0=周天
```

写一个 写一个 xxxx年x月x日 星期x

```js
 var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dates = date.getDate();
    var day = date.getDay();
    var dayArr= ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]
    console.log("今天是："+year+"年"+month+"月"+dates+"日 "+dayArr[day]);
```

封装一个获取时分秒 格式 11:15:42

```js
//格式化时分秒
    function getTime(){
        var date = new Date();
        var hours = date.getHours();//时
        var minutes = date.getMinutes();//分
        var sec = date.getSeconds();//秒
        hours= hours < 10 ? '0'+hours : hours;
        minutes = minutes<10 ? '0'+minutes : minutes;
        sec = sec < 10? '0'+sec : sec;
        return hours +":"+minutes+":"+sec
    }
```

实现倒计时效果

```js
  // 核心算法；使用时间戳做，将新时间戳-旧时间戳
        function conutDown(time){
            var nowTime=+new Date();//返回当前时间毫秒数
            var inputTmie = +new Date(time);//返回的是用户输入时间总的毫秒数
            var times = (inputTmie-nowTime)/1000;//time是剩余时间总的秒数
            var d = parseInt(times/60/60/24);//计算天数
            var h= parseInt(times/60/60%24);//计算小时
            var m = parseInt(times/60%60);//计算分钟
            var s = parseInt(times%60);//计算当前秒数
            d = d<10? "0"+d:d;
            h = h<10? "0"+h:h;
            m = m<10 ? "0"+m:m;
            s = s<10 ? "0"+s:s;
            return d+'天'+h+"时"+m+"分"+s+"秒";
        }
        console.log(conutDown("2022-7-2 13:00:00"));
```

###### Array对象

创建数组的方式：

​	1、用数组字面量创建数组

​	2、利用new Array()

檢測是否為數組

 1、 instanceof 运算符 用来检测是否为数组

  2、Array.isArray(参数)  （ie9以上版本才支持）

```js
	var arr3 =[];
    var obj ={};
    console.log(arr instanceof Array);//true
    console.log(obj instanceof Array);//false
    
    console.log(Array.isArray(arr3));//true
    console.log(Array.isArray(obj));//false
```

添加和删除数组元素的方法

​	1、push（）：末尾添加一个或多个元素(修改原数组)

​							return 新的长度

​	2、pop() ： 删除数组最后一个元素 (修改原数组)

​							return 被删除的元素的值

​	3、unshift(): 向数组的开头添加一个或多个元素 (修改原数组)

​							return 新的长度

​	4、shift（）：删除数组的第一个元素  (修改原数组)

​							return 第一个元素的值

翻转数组  ：reverse()

```
 var arr5 = ["11","领带","鞋子","衣服","帽子","ipad","raibow"];
    arr5.reverse();//翻转数组函数
    console.log(arr5); // ['raibow', 'ipad', '帽子', '衣服', '鞋子', '领带', '11']
```

数组冒泡排序 sort()

```
 var arr6 =[12,45,22,34,78,99,234,56,7,8];
    arr6.sort(); 
    console.log("冒泡:"+arr6);
    //冒泡:12,22,234,34,45,56,7,78,8,99
```

注意：只能对元素个数为偶数的数组进行排序 

解决办法：

```
 arr6.sort(function(a,b){
        return a-b;//升序的顺序排序
        // return b-a;//降序的顺序排序
    });
```

数组索引方法

​	1、indexOf（）: 查找给定元素的第一个索引 

​							return  索引号/-1

​	2、lastIndexOf（）: 数组中的最后一个索引

​							return  索引号/-1

```
	//Index() 只返回第一个满足条件的索引号
    var arr7 =[12,45,22,34,12,45];
    console.log(arr7.indexOf(45));//1
    console.log(arr7.indexOf(44));//-1
    //lastIndexOf  返回最后面一个满足条件的索引号
    console.log(arr7.lastIndexOf(12));//4
    console.log(arr7.lastIndexOf(23));//-1
```

**数组去重**

 核心算法：

​      1、变量旧数组

​      2、拿着旧数组去查询新数组 ？添加到新数组：不添加

```js
function unique(arr){
        var newArr=[];
        for(var i =0; i < arr.length; i++){
            if(newArr.indexOf(arr[i]) == -1){
                // newArr[newArr.length]=arr[i];
                newArr.push(arr[i]);
            }else{
                continue;
            }
       }
       return newArr;
    }
```

数组转化为字符串

1、toString()：把数组转化为字符串，逗号分隔每一项

​					return 字符串

2、join（）: 用于把数组中的所有元素转化为一个字符串

​					return 字符串

```
 var arr8 = ["11","领带","鞋子","衣服","帽子","ipad","raibow"];
    console.log(arr8.toString());        //11,领带,鞋子,衣服,帽子,ipad,raibow
    console.log(arr8.join());//默认逗号  //11,领带,鞋子,衣服,帽子,ipad,raibow
    console.log(arr8.join("-"));//- 自定义分割  //11-领带-鞋子-衣服-帽子-ipad-raibow
    console.log(arr8.join("&"));//& 自定义分割  //11&领带&鞋子&衣服&帽子&ipad&raibow
```

concat() : 连接两个或多个数组 （不影响原数组）

​				return 新的数组

slice（）: 数组截取（begin，end） 

​				return 被截取项目的新数组

splice()： 数组删除splice（第几个开始，要删除几个数） （影响原数组）

​				return 被删除项目的新数组

###### String对象

​	1、基本包装类型 ：就是把简单数据类型 包装成为了 复杂数据类型

```
//包装的过程
    //1、把简单数据类型 包装成为了 复杂数据类型
    var temp = new String("andy");
    //2、把临时变量的值 给str
    str =temp;
    //3、销毁临时变量
    temp =null;
```

​	2、字符串的不可变

​	指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中开辟了一个内存空间。

​	3、根据字符返回位置

​	 indexOf ("要查找的字符串"，开始位置)	

​				return 指定字符串中的位置 /-1

​	lastIndexOf() 从后往前找，只找第一个匹配的。

**查找字符串 ”abcoefoxyozzopp” 中所有o出现的位置以及次数**

​      **核心算法**：

​		 （1）、先查找第一个o的出现的位置

​          （2）、只要indexOf返回的结果不是 -1，就继续往后查找

​          （3）、因为 indexOf 只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找   

```
		var str ='abcoefoxyozzopp';
        var index = str.indexOf("o");
        var ArrIndex=[];
        while(index!==-1){
            ArrIndex.push(index);
            index = str.indexOf("o",index+1);
        }
        console.log(ArrIndex);
```

4、根据位置返回字符

 charAt(index)：返回指定位置的字符

charCodeAt(index) :获取指定位置处字符的ASCII码  目的：判断用户按下了哪个键

str[index]  获取指定处字符    

```
 // charAt(index) 根据位置放回字符
    var str2 ="string"
    console.log(str2.charAt(2));//r
    //遍历字符串
    for(var i=0;i<str2.length;i++){
        console.log(str2.charAt(i));
    }
/* 
内置对象.html:228 s
内置对象.html:228 t
内置对象.html:228 r
内置对象.html:228 i
内置对象.html:228 n
内置对象.html:228 g */

//2 charCodeAt(index) 返回响应索引号的字符的ASCII码值  目的：判断用户按下了哪个键
    console.log(str2.charCodeAt(0)); //s 115

//3、str[index]  h5新增
console.log(str2[0]);//s
```

**判断一个字符 'abcoefocyozzopp'  统计字符中出现次数最多的字符，并统计其次数**

​	 核心算法：

​      1、利用charAt（）遍历该字符

​      2、把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1

​      3、遍历对象，得到最大值和该字符    

```js
 var str = 'abcoefocyozzopp';
        var tmp ={};//对象
        for(var i=0;i<str.length;i++){
           var chars = str.charAt(i); //chars是字符串的每个字符
            if(tmp[chars]){
                tmp[chars]++;
            }else{
                tmp[chars]=1;
            }
        }
        console.log(tmp);
        /*  a: 1
            b: 1
            c: 2
            e: 1
            f: 1
            o: 4
            p: 2
            y: 1
            z: 2  */
        //遍历tmp对象,找到最大值 for...in
        var max=0;
        var ch='';
        for(var k in tmp){  //K得到的是属性名 tmp[k] 得到的是属性值
            if(tmp[k]>max){
                max =tmp[k];
                ch = k;
            }
        }
        console.log("最多的字符为："+ch+" 次数是："+max);//最多的字符为：o 次数是：4
```

5、字符串的操作方法

​		concat（）；用于连接两个或多个字符串，等效于”+“

​		substr(start,length); 从start位置开始索引，length取的个数 

```
var str3 ="字符串"
    console.log(str3.concat("对象")); //字符串对象

    // 2、	substr(start,length)
    var str4="字符串的操作方法";
    console.log(str4.substr(4,2));//操作
```

 replace('被替换的字符','替换为的字符');  替换字符串

​	注意：只会替换第一个字符

```
var str5 ="replace";
    console.log(str5.replace("e","E"));//rEplace
    //有一个字符串 'abcoefocyozzopp' 要求把所有的哦替换为-
    var str6 = 'abcoefocyozzopp';
    while (str6.indexOf('o') !==-1) {
        str6 = str6.replace('o','-')
    }
    console.log(str6); //abc-ef-cy-zz-pp
```

 split（"分隔符"）：字符转化为数组  （数组转化为字符串使用join）

```js
var str7 = "11,领带,鞋子,衣服,帽子,ipad,raibow";
    console.log(str7.split(","));   //['11', '领带', '鞋子', '衣服', '帽子', 'ipad', 'raibow']
    var str7 = "11-领带-鞋子-衣服-帽子-ipad-raibow";
    console.log(str7.split("-")); // ['11', '领带', '鞋子', '衣服', '帽子', 'ipad', 'raibow']
```

##### js的简单类型和复杂类型

​	简单类型又叫做 基本数据类型 或是 值类型 ，

​			string,number,boolean.undefined,null

简单数据类型 是存放在栈里面，里面直接开辟一个空间存放的是值

​	复杂类型又叫做 引用类型 

​		object ， Array ， Date等

复杂数据类型 首先在栈里面存放地址 十六进制表示  然后地址执行堆里面的数据