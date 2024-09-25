class BannerVertical extends HTMLElement {
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
            .banner {
            text-align: center;
        }
        .banner.vertical{
        position: sticky;
        top: 1rem;
        }
           
        </style>  
        
        <div class="banner vertical">
            <img src="/media/banner.webp" alt="banner">
        </div>
            
      `
      
    }
  }
  customElements.define('banner-vertical-component', BannerVertical)