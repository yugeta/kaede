export class Setting{
  datas = {
    root  : document.getElementById(`kaede`),
    count : 10,
    time  : 20000,
    size  : 25,
    size_offset_rate : 0.8,
    rotate_range : 360,
    delay_time : 1500,
    move  : 500,
  }

  constructor(){
    if(!this.datas.root){return}
    this.set_count()
    this.set_size()
    this.set_move()
    this.set_time()
    this.set_delay()
    this.set_rotate()
    this.set_offset()
  }

  set_count(){
    if(!this.datas.root.hasAttribute("data-count")){return}
    this.datas.count = Number(this.datas.root.getAttribute("data-count"))
  }

  set_size(){
    if(!this.datas.root.hasAttribute("data-size")){return}
    this.datas.size = Number(this.datas.root.getAttribute("data-size"))
  }

  set_move(){
    if(!this.datas.root.hasAttribute("data-move")){return}
    this.datas.move = Number(this.datas.root.getAttribute("data-move"))
  }

  set_time(){
    if(!this.datas.root.hasAttribute("data-time")){return}
    this.datas.time = Number(this.datas.root.getAttribute("data-time"))
  }

  set_delay(){
    if(!this.datas.root.hasAttribute("data-delay")){return}
    this.datas.delay_time = Number(this.datas.root.getAttribute("data-delay"))
  }

  set_rotate(){
    if(!this.datas.root.hasAttribute("data-rotate")){return}
    this.datas.rotate_range = Number(this.datas.root.getAttribute("data-rotate"))
  }

  set_offset(){
    if(!this.datas.root.hasAttribute("data-offset")){return}
    this.datas.size_offset_rate = Number(this.datas.root.getAttribute("data-offset"))
  }
}