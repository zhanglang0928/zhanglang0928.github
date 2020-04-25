//设置图片切换
//获取图片的引用
let myImage = document.querySelector('img');

//使用onclick事件处理器，鼠标点击图片时，图片发生切换
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
      myImage.setAttribute('src', 'images/firefox-icon2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}

//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//个性化欢迎信息函数的设置
function setUserName() {
  let myName = prompt('请输入你的名字');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 真是酷毙了！' + myName;
  }
}

//初始化代码，在页面再次读取时进行构造工作
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 真是酷毙了！' + storedName;
}

//为按钮设置onclick事件处理器
myButton.onclick = function() {
  setUserName();
}