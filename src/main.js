import { SetCss } from "./set_css.js"
import { Items }  from "./items.js"

class Main{
  #setting = {
    count : 10,
    time  : 20000,
    size  : 25,
    size_offset_rate : 0.8,
    rotate_range : 360,
    delay_time : 1500,
    move  : 500,
  }
  #item

  constructor(){
    new SetCss()
    this.#item = new Items(this.#setting)
  }
}

switch(document.readyState){
  case "complete":
  case "interactive":
    new Main();break
  default:
    window.addEventListener("DOMContentLoaded", (()=> new Main()))
}