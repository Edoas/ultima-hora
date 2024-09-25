class News extends HTMLElement {
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
        
        .one-column,
        .two-column,
        .three-column {
            width: 100%;
        }

        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr; /* Dos columnas iguales */
            gap: 1rem;
        }

        .three-column {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Tres columnas iguales */
            gap: 1rem;
        }

        </style>  

            <div class="news">
            <div class="one-column">
                <div class="new">
                    <div class="new-image">
                        <img src="/media/1.webp" alt="imagen-de-noticia">
                    </div>
                    <div class="new-category">
                        <span>Tragedia en la serra</span>
                    </div>
                    <div class="new-title">
                        <h2>La Guardia Civil localiza el cuerpo sin vida del turista desaparecido en el Torrent de Pareis</h2>
                    </div>
                    <div class="new-resume">
                        <p>Los equipos buscaban a Alexander Johnson desde el martes por la tarde cuando fue arrollado por la riada.</p>
                    </div>
                    <div class="new-creator">
                        <span>Javier Jiménez</span>
                    </div> 
                </div>  
            </div>

            <div class="two-column">
                <div class="new">
                    <div class="new-image">
                        <img src="/media/1-_1.webp" alt="imagen-de-noticia">
                    </div>
                    <div class="new-category"></div>
                        <span>Local</span>
                    <div class="new-title">
                        <h2>El Consell quiere habilitar tiendas de campaña para acoger menores migrantes</h2>
                    </div>
                    <div class="new-creator">
                        <span>Kike Oñate</span>
                    </div> 
                    <div class="news-related">
                        <ul>
                            <li>El PSIB lamenta arrancar el curso con Galmés «escondido y de viaje durante la DANA»</li>
                            <li>Baleares acoge menores migrantes ocho veces por encima de sus posibilidades</li>
                        </ul>
                    </div>
                </div>  
                <div class="new red">
                    <div class="new-image">
                        <img src="/media/1-_2_.webp" alt="imagen-de-noticia">
                    </div>
                    <div class="new-category">
                        <span>Palma</span>
                    </div>
                    <div class="new-title">
                        <h2>Nace en Nou Llevant un nuevo asentamiento de trabajadores en precario</h2>
                    </div> 
                    <div class="subscription-button"></div> 
                        <button>Suscribete</button>           
                    <div class="new-creator">
                        <span>Itziar F. Landero</span>
                    </div> 
                </div>  
            </div>

            <div class="three-column">
                <div class="new">
                    <div class="new-image">
                        <img src="/media/2986825.webp" alt="imagen-de-noticia">
                    </div>
                    <div class="new-category">
                        <span>Local</span>
                    </div>
                    <div class="new-title">
                        <h2>Los dueños de pisos que los alquilen al Govern tendrán rebajas fiscales</h2>
                    </div>
                    <div >
                        
                    </div>
                    <div class="new-creator">
                        <span>Nekane Domblás</span>
                    </div> 
                </div>  
                <div class="new">
                    <div class="new-image">
                        <img src="/media/2987501.webp" alt="imagen-de-noticia">
                    </div>
                    <div class="new-category">
                        <span>Local</span>
                    </div>
                    <div class="new-title">
                        <h2>El Govern responde a los hoteleros y defiende que con la 'enmienda March' «no se crea ninguna plaza nueva»</h2>
                    </div>

                </div>  
                <div class="new blue">
                    <div class="new-image">
                        <img src="/media/2958773.webp" alt="imagen-de-noticia">
                    </div>
                    <div class="new-category">
                        <span>Branded Content</span>
                    </div>
                    <div class="new-title">
                        <h2>Specsavers Ópticas da valor a la importancia de la investigación sobre la diabetes</h2>
                    </div>               
                    <div class="new-creator">
                        <span>Redacción Monográficos</span>
                    </div> 
                </div>  
            </div>
            </div>
        
      `
    }
  }
  customElements.define('news-component', News)