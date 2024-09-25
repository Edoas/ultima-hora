class Main extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>
          main{
            padding: 0 20%;
            display: grid;
            gap: 1rem;
            grid-template-columns: 2fr 1fr; 
            grid-template-rows: auto 1fr; 
          }
        </style>  
        <main>
          <slot></slot>
        </main>
      `
    }
  }
  customElements.define('main-component', Main)