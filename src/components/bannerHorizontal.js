class BannerHorizontal extends HTMLElement {
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

          *{
            box-sizing: border-box;
          }

          img{
            object-fit: cover;
            width: 100%;
          }
          
					.banner {
						text-align: center;
            
					}
					.banner.horizontal{
						grid-column: 1 / span 2; 
            margin: 1rem 0;
            padding: 0 20%;
					}        

        </style>  

        <div class="banner horizontal">
            <img src="/media/banner1.webp" alt="banner">
        </div>     
      `

    }
  }
  customElements.define('banner-horizontal-component', BannerHorizontal)