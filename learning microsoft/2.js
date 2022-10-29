'use strict'
const switcher = document.querySelector('.btn')
switcher.addEventListener('click', function () {
  // 上面代码相当于switcher.addEventListener('click', function() {
  document.body.classList.toggle('light-theme')
  document.body.classList.toggle('dark-theme')
  // 在前面的代码中，您使用该toggle方法来修改<body>元素的类属性。此方法自动添加或删除light-themeanddark-theme类。此代码在单击时应用深色样式而不是浅色样式，如果再次单击，则应用浅色样式而不是深色。
  const className = document.body.className
  if (className == "light-theme") {
    this.textContent = "Dark"
  } else {
    this.textContent = "Light"
  }
  console.log("current class name:" + className)

})
