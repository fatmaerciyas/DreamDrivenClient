const { remote } = require('electron')
const currentWindow = remote.getCurrentWindow()

document.querySelector('.btn-close').addEventListener('click', () => {
  currentWindow.close()
})

document.querySelector('.btn-minimize').addEventListener('click', () => {
  currentWindow.minimize()
})

document.querySelector('.btn-maximize').addEventListener('click', () => {
  if (currentWindow.isMaximized()) {
    currentWindow.unmaximize()
  } else {
    currentWindow.maximize()
  }
})
