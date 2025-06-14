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
  #move

  constructor(options){console.log(options)
    if(!options){return}
    options = options || {}
    this.#item_size = options.size
    this.#item_size_min = options.size - (options.size * options.size_offset_rate)
    this.#item_size_max = options.size + (options.size * options.size_offset_rate)
    this.#rotate_range  = options.rotate_range
    this.#delay_time    = options.delay_time
    this.#time          = options.time
    this.#move          = options.move

    const root = options.root
    if(!root){return}
    this.#root = root
    this.#set_window_size()
    const img = this.#root.querySelector(`:scope > img`)
    if(!img){return}
    this.#src = img.getAttribute("src")
    img.parentNode.removeChild(img)
    this.#copy(options)
    this.#set_event()
  }

  #set_window_size(){
    this.#root_width  = window.innerWidth
    this.#root_height = window.innerHeight
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

    const pos    = this.#random_position(this.#root_width, this.#root_height)
    const size   = this.#random_size(this.#item_size_max, this.#item_size_min, this.#item_size)
    const rotate = this.#random_rotate(this.#rotate_range)
    const delay  = this.#random_delay(this.#delay_time)
    const speed  = this.#get_speed(size.w)
    const move   = this.#get_move(this.#move)

    div.style.setProperty("--y", `${pos.y}px`)
    div.style.setProperty("--x", `${pos.x}px`)
    div.style.setProperty("--w", `${size.w}px`)
    div.style.setProperty("--h", `${size.h}px`)
    div.style.setProperty("--r", `${rotate}deg`)
    div.style.setProperty("--s", `${speed}ms`)
    div.style.setProperty("--d", `${delay}ms`)
    div.style.setProperty("--m", `${move}px`)

    div.appendChild(img)
    div.addEventListener("animationend", e =>{
      e.target.parentNode.removeChild(e.target)
      this.#create_img(e.target)
    })
  }

  #random_position(width, height){
    return { 
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
  }

  #random_size(max, min, size){
    return { 
      w: Math.floor(Math.random() * (max - min) + size),
      h: Math.floor(Math.random() * (max - min) + size),
    };
  }

  #random_rotate(range){
    if(!range){return 0}
    return Math.floor(Math.random() * range)
  }

  #random_delay(delau_time){
    let rnd = Math.random() * delau_time
    return Math.floor(rnd * 10) / 10
  }

  #get_speed(size){
    const rate = this.#item_size / size
    return Math.floor(this.#time * rate)
  }

  #get_move(move){
    if(!move){return 0}
    return Math.floor(Math.random() * (move / 2) + (move / 2))
  }

  /**
   * Event
   */
  #set_event(){
    window.addEventListener("resize", this.#set_window_size.bind(this))
  }
}