# WEB
HTML, CSS, JS and so on
# HTML+[CSS](#CSS)+[JS](#JS) 

## PS切片

量图：PS视图→标尺→右击标尺→像素

## HTML

### 链接

```
<a href="#id">锚入口</a>

<p id="id">锚点</p>
```

### base

可以设置整体链接的打开方式，例如全部从新标签页打开

```
<base target="_blank">
```

### pre预格式化标签

```
<pre>
	预格式化
	的
	文本
	照此输出，保留换行和空格
</pre>
```

### [特殊字符](https://tool.lu/htmlentity/)

### [表格 table CSS见下](#table表格)

#### 创建表格

用**\<tr>**创建一列，在一列中用**\<th>**和**\<td>**创建列(行)头和单元格

#### 合并单元格

- **跨行合列：rowspan="个数"**
- **跨列合行：colspan="个数"**

<u>被合并的单元格无需再创建</u>，否则会多出来。

#### 拓展——表格划分结构

```
<thead></thead>用于定义表格的头部，放标题之类的。内部必须含				有<tr></tr>标签！
<thead></thead>用于定义表格的主体，放数据本体
<thead></thead>放表格的脚注之类的
以上标签都放置于table标签中
```

#### 表格标题

```
<caption>标题</caption>
```

### 列表

#### 无序列表

```html
<ul>
    <li></li>
    <li></li>
</ul>
```

#### 有序列表


    <ol>
        <li></li>
        <li></li>
    </ol>
### 表单form

form表单——用于收集用户输入，允许用户填写数据并上传
表单：提示文本、表单控件、表单域(规定了这份表单的范围)
表单标签：input输入控件、label、textarea(文本域)、select(下拉菜单)
表单本身不可见
表单属性简要概况：
**action：**规定向何处提交表单的地址（URL）（提交页面）
**method：**规定在提交表单时所用的 HTTP 方法（默认：GET）
**name：**规定识别表单的名称（对于 DOM 使用：document.forms.name）
**target：**规定 action 属性中地址的目标（默认：_self）

```
<form action="" method="GET" name="NPYCustomization" target="_blank">

```

#### input

input控件是行级元素

其中name标签用来区分各个表单控件，比如区分两个textinput

 一般情况下，除了单选和复选，每个表单控件都需要一个name

##### 输入框

```
<input type="text" name="usln" placeholder="userlittlename">
```

##### 密码框

```
<input type="password" name="pwd" placeholder="password">
```

##### 单选

```
<input type="radio" name="gender" value="女" checked="checked">
<!--checked="checked"表示默认选项-->
```

*注*：radio虽然是“单选按钮”，但是要真正使其单选就需要设置为同一name值，从而在前、后端意义上使其成为单选

##### 复选

```
<input type="checkbox" name="hobby" value="reading">
```

##### 按钮

```
<input type="button" value="生成随机のNPY">
```

##### 提交

```
<input type="submit" value="提交">
```

##### 重置

```
<input type="reset" value="重置">
<!--重置所在表单的所有信息-->
```

##### 图片按钮

```
<input type="image" id="picbtn" src="img/fuji.jpg" value="富士山">
```

##### 上传文件

```
<input type="file">
```

##### 留言框

```
<textarea name="msgboard" id="msgboard" placeholder="和同学们分享一下你的思维"></textarea>
```

##### *下拉列表

```
<!--select下拉列表，由于在不同浏览器上显示效果不同，且难以改变样式，故现在用的较少，-->
<select name="cars">
	<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="fiat">Fiat</option>
	<option value="audi" selected>Audi</option>
<!--添加selected属性以预选-->
</select>
```

##### 数据列表

 <datalist> 元素为 <input> 元素规定预定义选项列表。

用户会在他们输入数据时看到预定义选项的下拉列表。

<input> 元素的 list 属性必须引用 <datalist> 元素的 id 属性。

```
 <input list="browsers">
 	<datalist id="browsers">
    	<option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
        <option value="Microsoft Edge"></option>
    </datalist>
```



### label

label标签——用于绑定一个表单元素，当点击label标签的时候，被绑定的表单元素就会获得输入焦点

不属于表单，但经常与表单一同使用。其目的在于提高用户体验

两种绑定用法：

​          1、直接包裹，用法简单，但在复杂情况下只能用法2

​          2、通过for和id来锚定，详见下例

```
法二：
<label for="username">用户名：</label>
<input type="text" id="username" name="usn" placeholder="username" >
法一：
<label>密码：<input type="password" name="pwd" placeholder="password"></label>

```



## CSS

### <u>CSS书写顺序：</u>

1. 布局定位属性：display / position / float / clear / visibility / overflow 
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white-space / break-word
4. 其他属性：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient...

### CSS布局流程：

1. 确定页面的版心（可视区）
2. 分析页面的行模块，随后是每个行模块的列模块
3. 制作HTML结构
4. 运用盒子模型，div+css布局各个模块 

<u>css布局核心是摆放[盒子模型](#盒子模型(Box Model))。</u><u>摆放的三种机制：普通流(标准流)、[浮动](#浮动)、定位</u>

### 选择器（这里分为基础选择器和复合选择器）

#### <u>基础选择器：</u>

**标签选择器**：标签 {...}例如div{}

**类选择器**：**.**类名 {...}例如.nav{}

特殊用法：html内class="class1 class2"表示该元素既属于class1类，又属于class2类

**id选择器**：#id{...}例如#id1{...}

**通配符选择器**：*{...}匹配页面中所有的元素为其设置样式，可能会降低页面响应速度，不建议滥用，不过有一个常用的地方：

##### 通配符清除所有默认边距

```
* {
	padding:0;
	margin:0;
}
```



#### <u>复合选择器：</u>

**后代选择器：**基选 基选{...}选中父类里的所有子类，例如.nav a{...}选定nav类下的**所有**a标签<br>再例如：html内：<div><p><strong></strong></p></div><div><strong></strong></div>此时css内div strong{...}会选择html内所有strong标签元素。

**子元素选择器：**基选>基选{...}选中父类里的亲儿子类（若无则不选任何元素）例如上个html内，css中div>strong{...}则只有第二个div中的strong标签会被选中。

**交集选择器：**标签选择器类名选择器（中间无空格）例如，p.red{...}选中所有p标签中是red类的元素。tip：加了空格就成了后代选择器！

**并集选择器：**基选, 基选{...}选中两个基础选择器所选中的元素，例如p，.red{...}

#### <u>伪类选择器：</u>

伪类用于定义元素的特殊状态。

伪类用法：基选:伪类{...}常用的例如a:link,a:visited,a:hover,a:active(这四个顺序建议不要变)

#### <u>伪元素选择器：</u>

| [::after](https://www.w3school.com.cn/cssref/selector_after.asp) | p::after        | 在每个<p> 元素之后插入内容。  |
| ------------------------------------------------------------ | --------------- | ----------------------------- |
| [::before](https://www.w3school.com.cn/cssref/selector_before.asp) | p::before       | 在每个 <p> 元素之前插入内容。 |
| [::first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p::first-letter | 选择每个 <p> 元素的首字母。   |
| [::first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p::first-line   | 选择每个 <p> 元素的首行。     |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | p::selection    | 选择用户选择的元素部分。      |

注意：::first-letter 伪元素只适用于块级元素。

下面的属性适用于 ::first-letter 伪元素：

- 字体属性
- 颜色属性
- 背景属性
- 外边距属性
- 内边距属性
- 边框属性
- text-decoration
- vertical-align（仅当 "float" 为 "none"）
- text-transform
- line-height
- float
- clear

### CSS三大特性

#### 层叠性

当元素被同一种选择器多次设定样式时，后来者居上（或者叫就近原则）。层叠性可以说是优先级的特殊情况，即权重相同。

#### 继承性

父元素的某些样式会被默认应用到子元素上(**text-**，**font-**，**line-** ，以及**color**等)

#### 优先级

当元素被不同的选择器设定样式时，考虑权重（权重叠加）权重一样时，依照层叠性，采用就近原则。

| 标签选择器                 | 权重    |
| -------------------------- | ------- |
| 继承或*                    | 0,0,0,0 |
| 标签选择器                 | 0,0,0,1 |
| 类选择器（包括伪类选择器） | 0,0,1,0 |
| id选择器                   | 0,1,0,0 |
| 内联样式                   | 1,0,0,0 |
| !important                 | 无穷大  |

- specificity不可进位，从左到右比较，官大一级直接压死

例如：


    <div class="nav">
        <a href="#" class="first">alink</a>
        <a href="#">alink</a>
        <a href="#">alink</a>
    </div>
```
.nav a{			/*权为0,0,1,1*/
	color: red;
}
.first{			/*权为0,0,1,0*/
	color: blue;
}
.nav .first{	/*权为0,0,2,0*//*权最大，故采用此样式*/
	color: green;
}
```

tip:由于继承权重为0，所以先看标签有没有被直接选中。

做个题巩固一下吧

```
/*css*/
#father #son{
	color:blue;
}
#father p.c2{
	color:black;
}
div.c1 p.c2{
	color:red;
}
#father{
	color:green !important;
}
```

```
<!--html-->
<body>
	<div id="father" class="c1">
		<p id="son" class="c2">
			这行字体什么颜色呀？
		</p>
	</div>
</body>
```

*答案：black*

### 标签分类

**行内元素：**一行多个，只可以嵌套行内元素。宽高等样式不可直接设置。例如span、a

**块级元素：**一行一个，可以嵌套行内元素和块级元素。可设置宽高，最典型的div，还有h1-h6、p等，但后者都是文字类块级标签，里面不能再放div

**行内块元素：**一行多个，可设置宽高，例如img

#### display 属性：标签显示模式转换

行内inline，块级block，行内块inline-block

转为block后一行便只能放一个，可设置宽高。

转为inline后一行多个，宽高无效。

**display**—每个元素都有一个默认的display值，它**决定了元素如何显示，但不改变元素的种类**，例如带有 display: block; 的行内元素不允许在其中包含其他块元素。

通过设置属性 **display : none ;**可以隐藏元素。该元素将被隐藏，并且页面将显示为好像该元素不在其中，通常可以通过JavaScript来改变display值来完成交互；<br>**visibility: hidden ;**  也可以隐藏元素。但是，该元素仍将占用与之前相同的空间。元素将不可见，但仍会影响布局。

### <u>Box Model(盒子模型)</u>

由内到外分别是：**content**→**padding**→**border**→**margin**

![盒子模型示意图](https://img-blog.csdnimg.cn/2020110215424764.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDAxOTUyMw==,size_16,color_FFFFFF,t_70#pic_center)



#### border（边框）

边框**border**一定要有style和width值才能显示

简写格式如下：border(-top/bottom/left/right): width || style || color ;

style常见有以下几个：solid实线、dashed虚线、dotted点线

#### padding（内边距）

简写格式如下：padding: width||width||width||width ;

一个值，表示上下左右

两个值，上下，左右

三个值，上，左右，下

四个值，顺时针对应，上，右，下，左

若给定了盒子的宽度，则根据盒子模型，padding会撑开盒子；但特殊情况，即盒子没有给定宽度的情况下，则padding不会撑开盒子。

#### margin（外边距）

简写方式完全等同于padding

- **text-align**可以让盒子里的**行内元素和行内块元素**对齐。
- 为了照顾兼容性，**行内元素尽量只设置左右的内外边距**，不要设置上下的内外边距

##### 外边距合并问题

1. 相邻块元素垂直外边距的合并<br>上个盒子的下外边距与下个盒子的上外边距取较大值，而不是相加。<br><u>解决方法</u>：尽量只给一个盒子加垂直外边距。

2. 嵌套块元素的垂直外边距的合并（塌陷）<br>塌陷现象：例如，父盒子里有个子盒子，现欲将子盒子在父盒子里向下平移，若设置子盒子margin-top: 10px ; 则父盒子会与子盒子一同平移10px，而且父盒子与子盒子间的位置关系不变。<br><u>解决方法</u>：

   1. 为父元素添加上边框
   2. 为父元素添加上内边距
   3. 为父元素添加 **overflow: hidden ;**
   4. 其他方法：**浮动**、**固定**、**绝对定位**等盒子不会有问题

   推荐按照以下优先顺序：width>padding>margin

#### 盒子阴影

box-shadow: 水平阴影*(必须)*	垂直阴影*(必须)*	模糊距离(模糊)	阴影尺寸	阴影颜色	内外阴影

参考小米：box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);

### <u>float 浮动</u>

任何元素都可以浮动，通过设置float属性

为什么要浮动？

例一：若要在一行上放置紧密排列的盒子，用行内块会导致块之间有难以去除的空隙

例二：在大盒子内使小盒子们分别左右对齐

作用

1. 使盒子们在水平排列成一行
2. 实现盒子左右对齐
3. 最早用于实现文字环绕图片

什么是浮动？1脱、2浮、3变行内块

浮动会使元素脱离普通流控制(脱标)，“浮”在普通流上面，不再占有位置(表现为叠在其他元素上方)

同时移动到指定位置

浮动会改变元素 **display** 属性，使<u>块级元素</u>变为<u>行内块元素</u>。

浮动元素之间没有空隙

浮动只会影响浮动元素和在后面标准流里的元素

### clear 清除浮动

为什么清除？

很多情况下父盒子不设高度，此时一旦子盒子都浮动则父盒子高度为零，下面的标准流元素会来占位子

为解决此问题，就要**清除浮动**

清除浮动的本质：清除浮动后，父元素根据子元素的大小自动调整高度

#### 用法

**clear: both ;**/\*left和right极少用到\*/

1. 额外标签法（隔墙法）：在**最后一个浮动元素后面加上一个空标签**，例如**<div style="clear: both"></div>**，或其他标签比如\<br>亦可

   - 优点：是W3C推荐的做法
   - 缺点：添加无意义标签，结构化差

2. 给父元素添加 **overflow** 属性

   - 优点：代码简洁
   - 缺点：内容增多时，hidden会隐藏，auto和scroll会有丑陋的滚动条

3. 使用 **after** 伪元素来清除浮动

   ```
   /*清除浮动样式*/
   .clearfix::after {
       content: "";
       display: block;
       height: 0;
       visibility: hidden;
       clear: both;
   }
   .clearfix {
       *zoom:1;/*IE6-7专门清除浮动语句*/
   }
   ```

   - 优点：符合闭合浮动思想，结构化语义正确
   - 缺点：由于IE6-7不支持 **:after**，所以需要*zoom=1;触发hasLayout

4. 双伪元素清除浮动

   ```
   /*清除浮动双伪元素样式*/
   .clearfix::before,
   .clearfix::after {
       content: "";
       display: table;
   }
   .clearfix::after {
       clear: both;
   }
   .clearfix {
       *zoom:1;/*IE6-7专门清除浮动语句*/
   }
   ```

   - 优点：代码更简洁
   - 缺点：同单伪元素清除浮动法

### position 属性

position 属性规定应用于元素的定位方法的类型，有五个不同的位置值：

- static（默认值）
- relative
- fixed
- absolute
- sticky

元素其实是使用 **top**、**bottom**、**left** 和 **right** 属性定位的。但是，除非首先设置了 **position** 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。

另外，relative、absolute和fixed会将**行级元素**默认显示为**行内块元素**

**position: static;**

​	静态定位的元素不受 top、bottom、left 和 right 属性的影响，它始终根据页面的正常流进行定位。

**position: relative;**

​	**相对于原位置进行定位**，原来的位置会被完整地空出

**position: fixed;**

​	fixed是**相对于视口定位**的，这意味着即使滚动页面，它也始终位于同一位置。 top、right、bottom 和 left 属性用于定位此元素。<br>	固定定位的元素不会在页面中通常应放置的位置上留出空隙。

**position: absolute;**

​	position: absolute; 的元素**相对于最近的定位祖先元素进行定位**（而不是相对于视口定位，如 fixed）。

​	然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。

​	**注意：“被定位的”元素是其位置除 static 以外的任何元素。**

​	绝对定位的元素无法使用margin: auto;若要左右居中

```
left:50%;
margin-left:自身盒子长度的一半;
```



**position: sticky;** 

​	position: sticky; 的元素根据用户的滚动位置进行定位，同relative，原来的位置会被完整地空出。<br>	粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 position:fixed）。<br>	例如，设置一个top: 100px;那么sticky元素将在距离视口100px时开始粘住，直到sticky元素抵达父元素底部<br>	sticky的元素不能随屏幕滚动而粘到父元素外面

**z-index:整数;**

​	控制元素堆叠顺序，属性值只能为整数（可负），数字越大位置越靠上

#### 子绝父相

实现子盒子在父盒子里自由移动时，子盒absolute父盒relative



### table表格

表格实际上也是一个盒子

标题位置：**caption-side: top | bottom | inherit;**

可以为表格和单元格加上边框，不过会有边框叠加的现象，此时：

**cellspace= “0” ;**将单元格之间的距离设为0；

cellpadding 设置单元格的内边距

**border-collapse: collapse ;**将相邻的边框合并。

### overflow 属性

控制对太大而区域无法容纳的内容的处理方式。

overflow 属性可设置以下值：

- **visible - 默认**。溢出没有被剪裁。内容在元素框外渲染
- **hidden** - 溢出被剪裁，其余内容将不可见
- **scroll** - 溢出被剪裁，同时添加滚动条以查看其余内容
- auto - 与 scroll 类似，但仅在必要时添加滚动条

**注：overflow 属性仅适用于具有指定高度的块元素。**



### 行高line-height

常用于<u>**单行文字**</u>垂直居中。

### 背景

背景色：background-color默认为透明

**背景图片**：background-image: url(绝对或相对地址) ;括号内不建议加引号

背景平铺：background-repeat:默认为repeat

​	no-repeat不平铺

​	repeat-x、repeat-y横向、纵向平铺

**背景位置**：background-position: length||length或者position||position；如果两个值都是方位名词则顺序无关紧要；如果两个值都是精确数值，则前值为x方向，后值为y方向；若只有一个方位名词或一个精确值，则另一值默认center；**不妨统一记忆：第一个为x方向，第二个为y方向**

背景附着：background-attachment:scroll 或 fixed;背景滚动或固定

**背景简写**：虽然没有规定各属性书写顺序，但建议按以下顺序：

background: 背景颜色 背景图片url() 背景平铺 背景滚动 背景位置；



## JS

https://www.w3school.com.cn/js/js_validation_api.asp

### 一、语言基础

#### 1、变量声明（定义）

可用**var**、**let**、**const**声明，区别如下：

var 声明的范围是函数作用域，关键字声明的变量会自动提升到函数作用域顶部，这叫做**var声明提升**

let 声明的范围是块作用域，let 也不允许同一个块作用域中出现冗余声明，否则会导致报错。另外，**let没有声明提升**

const 的行为与 let 基本相同，唯一一个重要的区别是：**const声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误**

const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，

那么修改这个对象内部的属性并不违反 const 的限制。

```
const person = {}; 
person.name = 'Matt'; // ok
```

JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变量很相似，但是不能用 const 来声明迭代变量（因为迭代变量会自增）：

```
for (const i = 0; i < 10; ++i) {} // TypeError：给常量赋值
```

不过，如果你只想用 const 声明一个不会被修改的 for 循环变量，那也是可以的。也就是说，每次迭代只是创建一个新变量。这对 for-of 和 for-in 循环特别有意义：

```
let i = 0; 

for (const j = 7; i < 5; ++i) { 
 console.log(j); 
} 
// 7, 7, 7, 7, 7 

for (const key in {a: 1, b: 2}) { 
 console.log(key); 
} 
// a, b 

for (const value of [1,2,3,4,5]) { 
 console.log(value); 
} 
// 1, 2, 3, 4, 5 
```

总的来说，let与const和C语言的声明（定义）基本相同，var比较特殊。

#### 2、数据类型

ECMAScript 有 6 种简单数据类型（也称为原始类型）：**Undefined**、**Null**、**Boolean**、**Number**、**String** 和 **Symbol**。

Symbol（符号）是 ECMAScript 6 新增的。还有一种复杂数据类型叫 Object（对象）。Object 是一种无序名值对的集合。因为在 ECMAScript 中不能定义自己的数据类型，所有值都可以用上述 7 种数据类型之一来表示。只有 7 种数据类型似乎不足以表示全部数据。但 ECMAScript 的数据类型很灵活，一种数据类型可以当作多种数据类型来使用。

#### 3、操作符

##### 指数操作符

ECMAScript 7 新增了指数操作符，Math.pow()现在有了自己的操作符\*\*，结果是一样的：

```
console.log(Math.pow(3, 2); // 9 
console.log(3 ** 2); // 9 
console.log(Math.pow(16, 0.5); // 4 
console.log(16** 0.5); // 4 
```

不仅如此，指数操作符也有自己的指数赋值操作符**=，该操作符执行指数运算和结果的赋值操作：

```
let sqrt = 16; 
sqrt **= 0.5; 
console.log(sqrt); // 4 
```

##### 相等操作符

![image-20211009160554766](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20211009160554766.png)

全等和不全等操作符与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数。全等操

作符由 3 个等于号（===）表示，只有两个操作数在不转换的前提下相等才返回 true，比如：

```
let result1 = ("55" == 55); // true，转换后相等
let result2 = ("55" === 55); // false，不相等，因为数据类型不同
```

##### 条件操作符

let max = (num1 > num2) ? num1 : num2; 

#### 4、语句

##### **for-in** 语句

下面是一个例子：

```
for (const propName in window) { 
 document.write(propName); 
} 
```

ECMAScript 中对象的属性是无序的，因此 for-in 语句不能保证返回对象属性的顺序。换句话说，所有可枚举的属性都会返回一次，但返回的顺序可能会因浏览器而异。如果 for-in 循环要迭代的变量是 null 或 undefined，则不执行循环体。

##### **for-of** 语句

下面是示例：

```
for (const el of [2,4,6,8]) { 
 document.write(el); 
} 
```

for-of 循环会按照可迭代对象的 next()方法产生值的顺序迭代元素。如果尝试迭代的变量不支持迭代，则 for-of 语句会抛出错误。

##### switch语句

与C语言一样

```
switch (i) { 
 case 25: 
 console.log("25"); 
 break; 
 case 35: 
 console.log("35"); 
 break; 
 case 45: 
 console.log("45"); 
 break; 
 default: 
 console.log("Other"); 
} 
```

*注意* switch 语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类型（比如，字符串"10"不等于数值 10）。

### 二、变量、作用域与内存

#### 1、原始值和引用值

ECMAScript 变量可以包含两种不同类型的数据：原始值和引用值。原始值（primitive value）就是最简单的数据，引用值（reference value）则是由多个值构成的对象。

6 种原始值：**Undefined**、**Null**、**Boolean**、**Number**、**String** 和 **Symbol**。

保存原始值的变量是按值（by value）访问的，因为我们操作的就是存储在变量中的实际值。

引用值是保存在内存中的对象。与其他语言不同，JavaScript 不允许直接访问内存位置，因此也就**不能直接操作对象所在的内存空间**。在操作对象时，实际上操作的是对该对象的引用（reference）而非实际的对象本身。为此，保存引用值的变量是按引用（by reference）访问的。（也就是操作地址）

#### 2、动态属性

**只有引用值可以动态添加后面可以使用的属性**

注意，原始类型的初始化可以只使用原始字面量形式。如果使用的是 new 关键字，则 JavaScript 会创建一个 Object 类型的实例，但其行为类似原始值。下面来看看这两种初始化方式的差异：

```
let name1 = "Nicholas"; 
let name2 = new String("Matt"); 
name1.age = 27; 
name2.age = 26; 
console.log(name1.age); // undefined 
console.log(name2.age); // 26 
console.log(typeof name1); // string 
console.log(typeof name2); // object
```

#### 3、复制值

obj1与obj2有相同地址

```
let obj1 = new Object(); 
let obj2 = obj1; 
obj1.name = "Nicholas"; 
console.log(obj2.name); // "Nicholas"
```

#### 4、传递参数

##### **ECMAScript 中所有函数的参数都是按值传递的。**

```
function addTen(num) { 
 num += 10; 
 return num; 
} 
let count = 20; 
let result = addTen(count); 
console.log(count); // 20，没有变化
console.log(result); // 30
```

**注意：**


```
function setName(obj) { 
 obj.name = "Nicholas";	//通过obj这个引用(地址)为obj所指向的空间添加name属性 
 obj = new Object();	//相当于修改了局部变量obj的值，函数结束后局部变量obj被销毁，对外无影响 
 obj.name = "Greg"; 
} 	
let person = new Object(); 
setName(person); 
console.log(person.name); // "Nicholas"
```

#### 5、确定类型

```
let s = "Nicholas"; 
let b = true; 
let i = 22; 
let u; 
let n = null; 
let o = new Object(); 
console.log(typeof s); // string 
console.log(typeof i); // number 
console.log(typeof b); // boolean 
console.log(typeof u); // undefined 
console.log(typeof n); // object 
console.log(typeof o); // object
```

typeof 虽然对原始值很有用，但它对引用值的用处不大。我们通常不关心一个值是不是对象，而是想知道它是什么类型的对象。为了解决这个问题，ECMAScript 提供了 instanceof 操作符，语法如下：

```
console.log(person instanceof Object); // 变量 person 是 Object 吗？
console.log(colors instanceof Array); // 变量 colors 是 Array 吗？
console.log(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？
```

如果变量是给定引用类型（由其原型链决定，将在后面详细介绍）的实例，则 instanceof 操作符返回 true

#### 6、垃圾回收

如果数据不再必要，那么把它设置为 null，从而释放其引用。这也可以叫作解除引用。这个建议最适合全局变量和全局对象的属性。

```
function createPerson(name){ 
 let localPerson = new Object(); 
 localPerson.name = name; 
 return localPerson; 
} 
let globalPerson = createPerson("Nicholas"); 
// 解除 globalPerson 对值的引用
globalPerson = null;
```

不过要注意，解除对一个值的引用并不会自动导致相关内存被回收。解除引用的关键在于确保相关的值已经不在上下文里了，因此它在下次垃圾回收时会被回收。

### 三、基本引用类型

引用值（或者对象）是某个特定引用类型的实例。新对象通过使用 new 操作符后跟一个构造函数（constructor）来创建。比如：

```
let now = new Date();
```

#### 1、Date()

在不给 Date 构造函数传参数的情况下，创建的对象将保存当前日期和时间。要基于其他日期和时间创建日期对象，必须传入其毫秒表示（UNIX 纪元 1970 年 1 月 1 日午夜之后的毫秒数）。ECMAScript为此提供了两个辅助方法：**Date.parse()**和 **Date.UTC()**

**Date.parse()**方法接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数。

“月/日/年”，如"5/23/2019"； 

“月名 日, 年”，如"May 23, 2019"； 

“周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"； 

 ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00（只适用于兼容 ES5 的实现）。

比如，要创建一个表示“2019 年 5 月 23 日”的日期对象，可以使用以下代码：

```
let someDate = new Date(Date.parse("May 23, 2019")); 
```

如果传给 Date.parse()的字符串并不表示日期，则该方法会返回 NaN。

。如果直接把表示日期的字

符串传给 Date 构造函数，那么 Date 会在后台调用 Date.parse()。换句话说，下面这行代码跟前面那行代码是等价的：

```
let someDate = new Date("May 23, 2019"); 
```

注意：不同的浏览器对 Date 类型的实现有很多问题。

**Date.UTC()**方法也返回日期的毫秒表示。传给 Date.UTC()的参数是年、**零起点月数**（1 月是 0，2 月是 1，以此类推）、日（1~31）、时（0~23）、分、秒和毫秒。这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他参数的默认值都是 0。下面是使用 Date.UTC()的两个例子：

```
// GMT 时间 2000 年 1 月 1 日零点
let y2k = new Date(Date.UTC(2000, 0)); 
// GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
```

 Date.parse()一样，Date.UTC()也会被 Date 构造函数隐式调用，但有一个区别：这种情况下创建的是本地日期，不是 GMT 日期。

ECMAScript 还提供了 **Date.now()**方法，返回表示方法执行时日期和时间的毫秒数。这个方法可以方便地用在代码分析中：

```
// 起始时间
let start = Date.now(); 
// 调用函数
doSomething(); 
// 结束时间
let stop = Date.now(), 
result = stop - start;
```

还有其他日期格式化，日期/时间组件方法，这里不一一列举。

#### 2、RegExp

ECMAScript 通过 RegExp 类型支持正则表达式。正则表达式使用类似 Perl 的简洁语法来创建：

```
let expression = /pattern/flags;
```

这个正则表达式的 pattern（模式）可以是任何简单或复杂的正则表达式，包括字符类、限定符、分组、向前查找和反向引用。每个正则表达式可以带零个或多个 flags（标记），用于控制正则表达式的行为。下面给出了表示匹配模式的标记：

 g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。

 i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。

 m：多行模式，表示查找到一行文本末尾时会继续查找。

 y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。

u：Unicode 模式，启用 Unicode 匹配。

s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。

```
// 匹配字符串中的所有"at" 
let pattern1 = /at/g; 
// 匹配第一个"bat"或"cat"，忽略大小写
let pattern2 = /[bc]at/i; 
// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi;
```

与其他语言中的正则表达式类似，所有元字符在模式中也必须转义，包括：

( [ { \ ^ $ | ) ] } ? * + . 

正则表达式也可以使用 RegExp 构造函数来创建，它接收两个参数：模式字符串和（可选的）标记字符串。

```
let pattern2 = new RegExp("[bc]at", "i");	//效果与上面的pattern2一样
```

此外，使用 RegExp 也可以基于已有的正则表达式实例，并可选择性地修改它们的标记：

```
const re1 = /cat/g; 
console.log(re1); // "/cat/g" 
const re2 = new RegExp(re1); 
console.log(re2); // "/cat/g" 
const re3 = new RegExp(re1, "i"); 
console.log(re3); // "/cat/i"
```

 [更多关于正则表达式](https://www.zhihu.com/question/48219401/answer/742444326)

#### 3、字符串方法

String类型有lengh属性

**charAt(index)**：返回字符串中下标为index的字符

##### 1、字符串操作方法

**concat()**，用于将一个或多个字符串拼接成一个新字符串，并且。concat()方法可以接收任意多个参数，因此可以一次性拼接多个字符串，如下所示：

```
let stringValue = "hello "; 
let result = stringValue.concat("world", " !"); 
console.log(result); // "hello world !" 
console.log(stringValue); // "hello"
```

**slice()**、**substring()**、**substr()**：从字符串中提取子字符串，都接收一或两个参数。

对 slice()和 substring()而言，第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。

对 substr()而言，第二个参数表示返回的子字符串数量。任何情况下，省略第二个参数都意味着提取到字符串末尾。

当某个参数是负值时，这 3 个方法的行为又有不同：

slice()方法将所有负值参数都当成字符串长度加上负参数值。

substr()方法将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为 0。

substring()方法会将所有负参数值都转换为 0。

##### 2、字符串位置方法

**indexOf()**和 **lastIndexOf()**这两个方法从字符串中搜索传入的字符串，并返回位置（如果没找到，则返回-1）

indexOf()方法从字符串开头开始查找子字符串，而 lastIndexOf()方法从字符串末尾开始查找子字符串。

##### 3、转换大小写

toLowerCase()和toUpperCase()。皆对原字符串无影响

##### 4、字符串模式匹配方法

**match(pattern)**

```
    let b= "abcdefffeffff";
    let pattern=/.ef/g;
    let matches;
    matches=pattern.exec(b);	//等效于matches = b.match(pattern); 
    print(matches.index);
    print(matches[0]);
    matches=pattern.exec(b);
    print(matches.index);
    print(matches[0]);
```

**search(pattern)**

与上一个方法几乎一样，但返回的不是数组，而是匹配的字串的首字符下标

 **replace()**

这个方法**接收两个参数**，第一个参数可以是一个 RegExp 对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记，如下面的例子所示：

```
let text = "cat, bat, sat, fat"; 
let result = text.replace("at", "ond"); 
console.log(result); // "cond, bat, sat, fat" 
result = text.replace(/at/g, "ond"); 
console.log(result); // "cond, bond, sond, fond"
```

replace()的第二个参数可以是一个函数。<u>在只有一个匹配项时</u>，这个函数会收到 3 个参数：与整个模式匹配的字符串、匹配项在字符串中的开始位置，以及整个字符串。这个函数应该返回一个字符串</u>，表示应该把匹配项替换成什么。

使用函数作为第二个参数可以更细致地控制替换过程，如下所示：

```
function htmlEscape(text) { 
    return text.replace(/[<>"&]/g, function(match, pos, originalText) { 
        switch(match) { 
            case "<": 
            	return "&lt;"; 
            case ">": 
            	return "&gt;"; 
            case "&": 
            	return "&amp;"; 
            case "\"": 
            	return "&quot;"; 
        } 
    }); 
} 
console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>")); 
// "&lt;p class=&quot;greeting&quot;&gt;Hello world!</p>"
```

**split()**

这个方法会根据传入的分隔符将字符串拆分成数组，并返回这个数组。作为分隔符的参数可以是字符串，也可以是 RegExp 对象。（字符串分隔符不会被这个方法当成正则表达式。）还可以传入第二个参数，即数组大小，确保返回的数组不会超过指定大小。

```
let colorText = "red,blue,green,yellow"; 
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"] 
let colors2 = colorText.split(",", 2); // ["red", "blue"] 
let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]这里的^是取反的用法
```

#### 4、单例内置对象（Global、Math）

开发者不用显式地实例化内置对象，因为它们已经实例化好了。前面我们已经接触了大部分内置对象，包括 Object、Array 和 String。本节介绍 ECMA-262定义的另外两个单例内置对象：Global 和 Math。

##### Global

Global对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性 。

###### 1. URL 编码方法

encodeURI()	//encodeURI()不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、井号

encodeURIComponent()	//encodeURIComponent()会编码它发现的所有非标准字符。

与它们相对的是 

decodeURI()	//只用于还原encodeURI()

decodeURIComponent()	//只用于还原encodeURIComponent()

###### 2.**eval()**方法

整个EMCAScript最强大的语法！它接收一个参数，即一个要执行的 ECMAScript（JavaScript）字符串，并执行它。

```
eval("console.log('hi')"); 
上面这行代码的功能与下一行等价：
console.log("hi");
```

###### 3.Global属性

Global属性有很多，比如Number（Number构造函数）、undefined、NaN、Array、Function等等

###### 4.window对象

但浏览器将 window 对象实现为 Global对象的代理。因此，所有全局作用域中声明的变量和函数都变成了 window 的属性。

```
var color = "red"; 
function sayColor() { 
 console.log(window.color); 
} 
window.sayColor(); // "red"
```

##### Math

Math有一些固有属性，比如Math.PI，需要自查

Math.max()和Math.min()支持任意多参数，或一个数组，比如Math.max(...arrayName)，来返回最大或最小值

Math.abs(*x*) 返回 *x* 的绝对值

Math.log(*x*) 返回 *x* 的自然对数

Math.pow(*x*, *power*) 返回 *x* 的 *power* 次幂

Math.cos(*x*) 返回 *x* 的余弦

Math.sin(*x*) 返回 *x* 的正弦

Math.tan(*x*) 返回 *x* 的正切

Math.ceil()方法始终向上舍入为最接近的整数。

Math.floor()方法始终向下舍入为最接近的整数。

Math.round()方法执行四舍五入。

Math.fround()方法返回数值最接近的单精度（32 位）浮点值表示。

**Math.random()**返回一个在[0,1)之间的随机数

*如果是为了加密而需要生成随机数（传给生成器的输入需要较高的不确定性），那么建议使用 window.crypto. getRandomValues()*

### 四、集合引用类型

#### 1、对象Object

创建实例有两种方式，一是new Object()，二是**对象字面量表示法**（这更普遍）

```
//法一
let person = new Object();	
//法二
let person = { 			
 name: "Nicholas", 
 age: 29 
};
```

*注意 在使用对象字面量表示法定义对象时，并不会实际调用 Object 构造函数。*

事实上，对象字面量已经成为给函数传递大量可选参数的主要方式：

```
function displayInfo(args) { 
    let output = ""; 
    if (typeof args.name == "string"){ 
    	output += "Name: " + args.name + "\n"; 
    } 
    if (typeof args.age == "number") { 
    	output += "Age: " + args.age + "\n"; 
    } 
    alert(output); 
}
displayInfo({ 
    name: "Greg" 
});
```

注意 这种模式非常适合函数有大量可选参数的情况。一般来说，命名参数更直观，但在可选参数过多的时候就显得笨拙了。**最好的方式是对必选参数使用命名参数，再通过一个对象字面量来封装多个可选参数。**

也可以使用中括号来存取属性。在使用中括号时，要在括号内使用属性名的字符串形式：

```
let propertyName = "name"; 
console.log(person[propertyName]); // "Nicholas"
```

另外，如果属性名中包含可能会导致语法错误的字符，或者包含关键字/保留字时，也可以使用中括号语法。比如：

```
person["first name"] = "Nicholas"; 
```

#### 2、数组Array

JS的数组中每个槽位可以存储任意类型的数据，并且ECMAScript 数组也是动态大小的，会随着数据添加而自动增长。

##### 创建数组

1、使用 Array 构造函数。参数可以是一个整数，来表示创建多大的数组；可以直接传入元素，

```
let colors = new Array();
let colors = new Array(20);
let colors = new Array("red", "blue", "green");
```

2、使用数组字面量（array literal）表示法。数组字面量是在中括号中包含以逗号分隔的元素列表

```
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
let names = []; // 创建一个空数组
let values = [1,2,]; // 创建一个包含 2 个元素的数组
```

*注意 与对象一样，在使用数组字面量表示法创建数组不会调用 Array 构造函数。*

在使用 Array 构造函数时，也可以省略 new 操作符。结果是一样的。

Array 构造函数还有两个 ES6 新增的用于创建数组的静态方法：from()和 of()

Array.from()用于将 类数组结构 转换为 数组实例

第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个 length 属性和可索引元素的结构

```
// 字符串会被拆分为单字符数组
console.log(Array.from("Matt")); // ["M", "a", "t", "t"] 
// 可以使用 from()将集合和映射转换为一个新数组
const m = new Map().set(1, 2) 
 .set(3, 4); 
const s = new Set().add(1) 
 .add(2) 
 .add(3) 
 .add(4); 
console.log(Array.from(m)); // [[1, 2], [3, 4]] 
console.log(Array.from(s)); // [1, 2, 3, 4] 
// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4]; 
const a2 = Array.from(a1); 
console.log(a1); // [1, 2, 3, 4] 
alert(a1 === a2); // false 
// 可以使用任何可迭代对象
const iter = { 
 *[Symbol.iterator]() { 
 yield 1; 
 yield 2; 
 yield 3; 
 yield 4; 
 } 
}; 
console.log(Array.from(iter)); // [1, 2, 3, 4] 
140 第 6 章 集合引用类型
// arguments 对象可以被轻松地转换为数组
function getArgsArray() { 
 return Array.from(arguments); 
} 
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4] 
// from()也能转换带有必要属性的自定义对象
const arrayLikeObject = { 
 0: 1, 
 1: 2, 
 2: 3, 
 3: 4, 
 length: 4 
}; 
console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
```

Array.of()用于将一组参数转换为数组实例









### 函数

#### arguments的使用

用于参数未知的情况。相当于伪数组，有length，有索引可用其访问，没有真数组的一些方法比如pop()、push()









## JSON

JSON 的通常用法是从 web 服务器读取数据，然后在网页中显示数据。

为了简单起见，可以使用字符串作为输入演示。

首先，创建包含 JSON 语法的 JavaScript 字符串：

```
var text = '{ "employees" : [' +
'{ "firstName":"Bill" , "lastName":"Gates" },' +
'{ "firstName":"Steve" , "lastName":"Jobs" },' +
'{ "firstName":"Alan" , "lastName":"Turing" } ]}';
```

然后，使用 JavaScript 的内建函数 JSON.parse() 来把这个字符串转换为 JavaScript 对象：

```
var obj = JSON.parse(text);
```

最后，请在您的页面中使用这个新的 JavaScript 对象：

## jQuery

功能：

### 快速选取元素

**$("#text")[i].html()** 选取 **id**="text" 的第 **i+1** 个元素

**$(".text")[i].html()** 选取 **class**="text" 的第 **i+1** 个元素

**$(".text #text")[i].html()** 选取 **class**="text"里 **id**="text" 的第 **i+1** 个元素

### 事件

**$("#text").mouseenter(function(){...});**鼠标移入

**$("#text").mouseleave(function(){...});**鼠标移出

**$("#text").hover(function(){...},function(){...});**需要两个(函数)参数，相当于鼠标移入和移出的合体。

# 微信小程序开发

## 关于目录

page表示页面，每个page至少由html、css、js、json四个文件组成

app开头的文件通常表示全局的设定

sitmap.json文件用于配置小程序及其页面是否能被微信索引

## 全局配置文件 app.json

(1)pages字段

显示了所有页面的路径

对pages字段的编辑可以增加/删除页面，也可以调整页面的显示顺序，排在上面的先显示

(2)windows字段

定义小程序所有页面的顶部背景、文字等

(3)tabbar字段

定义小程序所有页面的底部菜单栏

## 页面配置文件 xxx.json

可单独为此页面设置window的属性、上拉下拉设置、自定义组件的配置

## 关于组件

view=div：块级元素，拥有与按下相关的hover类；hover-stop-propagation：若值为true，当子view触发hover时，不会使夫view也触发hover

text=span：行级元素，拥有文字是否可选，是否显示空格，是否解码等，例如space="ensp"，decode="true"

## 事件

[事件 | 微信开放文档 (qq.com)](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)

事件的响应先进行**捕获阶段**，再进行**冒泡阶段**。

**捕获事件**会先执行父节点事件，再执行自身事件，若父节点阻止了捕获，则自身也不再执行，例如capture-catch

**冒泡**事件与**非冒泡**事件：冒泡事件会在执行完自身事件后，再触发父节点事件，非冒泡则不会。

**互斥事件**会在冒泡链中只触发其中一个，一旦某一互斥事件执行，其他互斥事件均不会触发

