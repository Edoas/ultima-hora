class TopHeader extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    async connectedCallback () {
      await this.loadData()
      await this.render()
    }

    async loadData(){
        this.data = [
            {  
                newTitle: "Tragedia en la Serra"
            },
            {
                newTitle: "Alquiler de pisos"
            },
            {
                newTitle: "Asentamiento en Nou Llevant"
            }

        ]
    }
  

    render () {
      this.shadow.innerHTML =
      /*html*/`

      <style>
        
        *{
          box-sizing: border-box;
        }
        
        .top-header {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 20%;
        align-items: center;
        background-color: hsl(210, 18%, 91%);
        }

        .top-header-news-highlight {
            font-size: 1.2em;
            font-weight: bold;
        }

        .top-header ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        .top-header ul li {
            color: #040404;
            cursor: pointer;
            font-family: "Roboto", sans-serif;
            font-size: 0.8rem;
        }

        .featured-news ul li:first-child {
            color: hsl(0, 100%, 50%);  /* Cambia el color del primer <li> a rojo */
            text-transform: uppercase;
            font-weight: 600;
        }

        .featured-news ul li:first-child::after {
            content:':';
            margin-right: 0.25rem;
        }

        .featured-news ul li:not(:first-child):not(:last-child)::after {
            padding: 0 0.25rem;
            content: "-";
        }

        .editions ul li:not(:last-child)::after {
            content:'|';
            padding: 0 0.25rem;
        }

        .editions ul li {
            text-transform: uppercase;
        }


        </style> 
    
        <div class="top-header">
            <div class="featured-news">
                <ul>
                    <li>Hoy es Noticia</li>
                </ul>
            </div>
            <div class="editions">
                <ul>
                    <li>Mallorca</li> 
                    <li>Menorca</li>
                    <li>Ibiza y Formentera</li>
                </ul>
        </div>
        </div>
        `

        const newsTop = this.shadow.querySelector('.featured-news ul')

        this.data.forEach(element => {

            const li = document.createElement('li')
            li.textContent = element.newTitle;  


            newsTop.appendChild(li)
        })

    }

}

customElements.define('top-header-component', TopHeader)