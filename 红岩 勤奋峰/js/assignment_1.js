'use script'
const switcher = document.querySelector('.btn')
switcher.addEventListener('click', function () {
  document.body.classList.toggle('light-theme')
  document.body.classList.toggle('dark-theme')
  // 更改按下按钮时按钮的变化
  const className = document.body.className
  if (className == 'light-theme') {
    this.textContent = '想让页面变黑按我捏！'
  }
  if (className == 'dark-theme') {
    this.textContent = '想让页面变白按我捏！'
  }
  console.log("现在页面样式：" + className)
})