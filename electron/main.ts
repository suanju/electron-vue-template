import { join } from "path"
import { app, BrowserWindow } from 'electron'

const url = process.env['VITE_DEV_SERVER_URL']

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800
  })

  if(url){
    win.loadURL(url)
  }else{
    win.loadFile(join(process.env.DIST as string,"index.html"))
  }  
}

app.whenReady().then(() => {
  createWindow()
})