import { SetCss }  from "./set_css.js"
import { Items }   from "./items.js"
import { Setting } from "./setting.js"

class Main{
  constructor(){
    new SetCss()
    const setting = new Setting()
    if(!setting.datas.root){return}
    new Items(setting.datas)
  }
}

switch(document.readyState){
  case "complete":
  case "interactive":
    new Main();break
  default:
    window.addEventListener("DOMContentLoaded", (()=> new Main()))
}