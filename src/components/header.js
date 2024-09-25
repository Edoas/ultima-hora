class Header extends HTMLElement {
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
            
            <header>
                <slot></slot>
            </header>
            `    
    }
}
customElements.define('header-component', Header)