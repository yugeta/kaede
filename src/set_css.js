

export class SetCss{
  #name = `kaede`
  #resolve
  #reject

  constructor(){
    this.promise = new Promise((resolve, reject)=>{
      this.#resolve = resolve
      this.#reject  = reject
    })
    if(!document.querySelector(`head link.${this.#name}`)){
      this.#load()
    }
    this.#finish()
  }

  #load(){
    const link = document.createElement("link")
    link.classList.add(this.#name)
    link.rel = "stylesheet"
    link.href = import.meta.url.split("/").slice(0,-1).join("/") +"/style.css"
    document.head.appendChild(link)
  }

  #finish(){
    this.#resolve()
  }
}