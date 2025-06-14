export class Items{
  #src
  #root
  #root_width
  #root_height
  #item_size
  #item_size_min
  #item_size_max
  #rotate_range
  #delay_time
  #time

  constructor(options){
    if(!options){return}
    options = options || {}
    this.#item_size = options.size
    this.#item_size_min = options.size - (options.size * options.size_offset_rate)
    this.#item_size_max = options.size + (options.size * options.size_offset_rate)
    this.#rotate_range  = options.rotate_range || 360
    this.#delay_time    = options.delay_time || 1.5
    this.#time          = options.time || 5000

    const root = this.#elm_root
    if(!root){return}
    this.#root = root
    this.#root_width  = window.innerWidth
    this.#root_height = window.innerHeight
    const img = this.#root.querySelector(`:scope > img`)
    if(!img){return}
    this.#src = img.getAttribute("src")
    img.parentNode.removeChild(img)
    this.#copy(options)
  }

  get #elm_root(){
    return document.getElementById(`kaede`)
  }

  #copy(options){
    for(let i=0; i<options.count; i++){
      this.#create_img()
    }
  }

  #create_img(){
    const new_img = new Image()
    new_img.src = this.#src
    this.#set_img(new_img)
  }

  #set_img(img){
    const div = document.createElement("div")
    div.classList.add("item")
    this.#root.appendChild(div)

    const pos    = this.#random_position()
    const size   = this.#random_size()
    const rotate = this.#random_rotate()
    const delay  = this.#random_delay()
    const speed  = this.#get_speed(size.w)

    div.style.setProperty("--y", `${pos.y}px`)
    div.style.setProperty("--x", `${pos.x}px`)
    div.style.setProperty("--w", `${size.w}px`)
    div.style.setProperty("--h", `${size.h}px`)
    div.style.setProperty("--r", `${rotate}deg`)
    div.style.setProperty("--s", `${speed}ms`)
    div.style.setProperty("--d", `${delay}ms`)

    div.appendChild(img)
    div.addEventListener("animationend", e =>{
      e.target.parentNode.removeChild(e.target)
      this.#create_img(e.target)
    })
  }

  #random_position(){
    return { 
      x: Math.floor(Math.random() * this.#root_width),
      y: Math.floor(Math.random() * this.#root_height),
    };
  }

  #random_size(max,min){
    return { 
      w: Math.floor(Math.random() * (this.#item_size_max - this.#item_size_min) + this.#item_size),
      h: Math.floor(Math.random() * (this.#item_size_max - this.#item_size_min) + this.#item_size),
    };
  }

  #random_rotate(){
    return Math.floor(Math.random() * this.#rotate_range)
  }

  #random_delay(){
    let rnd = Math.random() * this.#delay_time
    return Math.floor(rnd * 10) / 10
  }

  #get_speed(size){
    const rate = this.#item_size / size
    return Math.floor(this.#time * rate)
  }

  repeat(){
    console.log("repeat")

  }
}