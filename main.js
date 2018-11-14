const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
// 启动前台服务
const cp = require('child_process')
const iconv = require('iconv-lite')

const debug = (process.argv.indexOf("--debug") >= 0)
const serverPort = debug ? 7781 : 7780
// 用于调试
let instance = cp.spawn('node',[path.join(__dirname, debug ? 'server/index.js' : 'dist/backend/server.js'), debug ? 'debug' : ''])
instance.stdout.on("data",(data) => {
    console.log(iconv.decode(data,'utf-8'))
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        icon: path.join(__dirname,'client/dist/favicon.ico')
    })

    // and load the index.html of the app.
    setTimeout(function(){
        mainWindow.loadURL('http://localhost:' + serverPort + '/index.html');
    }, 2000)
  
    if(debug){
        // Open the DevTools.
        mainWindow.webContents.openDevTools()
        mainWindow.maximize()
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
