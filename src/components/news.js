class News extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      await this.loadData();
        this.render();
    }
  
    async loadData() {
      this.noticias = [
        {
          imageSrc: '/media/1.webp',
          imageAlt: 'imagen-de-noticia',
          category: 'Tragedia en la serra',
          title: 'La Guardia Civil localiza el cuerpo sin vida del turista desaparecido en el Torrent de Pareis',
          resume: 'Los equipos buscaban a Alexander Johnson desde el martes por la tarde cuando fue arrollado por la riada.',
          creator: 'Javier Jiménez'
        },
        {
          imageSrc: '/media/1-_1.webp',
          imageAlt: 'imagen-de-noticia',
          category: 'Local',
          title: 'El Consell quiere habilitar tiendas de campaña para acoger menores migrantes',
          relatedNews: [
            'El PSIB lamenta arrancar el curso con Galmés «escondido y de viaje durante la DANA»',
            'Baleares acoge menores migrantes ocho veces por encima de sus posibilidades'
          ],
          creator: 'Kike Oñate'
        },
        {
          imageSrc: '/media/1-_2_.webp',
          imageAlt: 'imagen-de-noticia',
          category: 'Palma',
          title: 'Nace en Nou Llevant un nuevo asentamiento de trabajadores en precario',
          creator: 'Itziar F. Landero',
          subscription: true
        },
        {
          imageSrc: '/media/2986825.webp',
          imageAlt: 'imagen-de-noticia',
          category: 'Local',
          title: 'Los dueños de pisos que los alquilen al Govern tendrán rebajas fiscales',
          creator: 'Nekane Domblás',
          column: 'three-column',
          subscription: true
        },
        {
          imageSrc: '/media/2987501.webp',
          imageAlt: 'imagen-de-noticia',
          category: 'Local',
          title: 'El Govern responde a los hoteleros y defiende que con la "enmienda March" «no se crea ninguna plaza nueva»',
          column: 'three-column'
        },
        {
          imageSrc: '/media/2958773.webp',
          imageAlt: 'imagen-de-noticia',
          category: 'Branded Content',
          title: 'Specsavers Ópticas da valor a la importancia de la investigación sobre la diabetes',
          creator: 'Redacción Monográficos',
          column: 'three-column'
        }
      ];
    }
  
    render() {
      this.shadow.innerHTML = `
        <style>
          img {
            object-fit: cover;
            width: 100%;
          }
          
          .one-column, .two-column, .three-column {
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
  
          .new {
            padding: 1rem;
            background: #fff;
          }
  
          .new-image img {
            width: 100%;
            height: auto;
          }
  
          .new-category {
            font-weight: bold;
            margin: 0.5rem 0;
          }
  
          .new-title h2 {
            margin: 0;
            font-size: 1.2rem;
          }
  
          .new-resume p {
            margin: 0.5rem 0;
          }
  
        .subscription-button {
          display: flex;
          align-items: center;
          justify-content: left;
          margin-top: 1rem;
        }

        .subscription-button img {
          width: 100px; /* Ajusta el tamaño según sea necesario */
          height: auto;
          cursor: pointer;
        }
  
          .news-related ul {
            list-style-type: none;
            padding: 0;
          }
  
          .news-related li {
            margin: 0.5rem 0;
          }
        </style>
  
        <div class="news">
          <div class="one-column"></div>
          <div class="two-column"></div>
          <div class="three-column"></div>
        </div>
      `;
  
      const oneColumn = this.shadow.querySelector('.one-column');
      const twoColumn = this.shadow.querySelector('.two-column');
      const threeColumn = this.shadow.querySelector('.three-column');
  
      this.noticias.forEach((noticia, index) => {
        const noticiaDiv = document.createElement('div');
        noticiaDiv.classList.add('new');
  
        // Agregar imagen
        const newImageDiv = document.createElement('div');
        newImageDiv.classList.add('new-image');
        const img = document.createElement('img');
        img.src = noticia.imageSrc;
        img.alt = noticia.imageAlt;
        newImageDiv.appendChild(img);
        noticiaDiv.appendChild(newImageDiv);
  
        // Agregar categoría
        if (noticia.category) {
          const newCategoryDiv = document.createElement('div');
          newCategoryDiv.classList.add('new-category');
          const spanCategory = document.createElement('span');
          spanCategory.textContent = noticia.category;
          newCategoryDiv.appendChild(spanCategory);
          noticiaDiv.appendChild(newCategoryDiv);
        }
  
        // Agregar título
        const newTitleDiv = document.createElement('div');
        newTitleDiv.classList.add('new-title');
        const h2 = document.createElement('h2');
        h2.textContent = noticia.title;
        newTitleDiv.appendChild(h2);
        noticiaDiv.appendChild(newTitleDiv);
  
        // Agregar resumen (si existe)
        if (noticia.resume) {
          const newResumeDiv = document.createElement('div');
          newResumeDiv.classList.add('new-resume');
          const pResume = document.createElement('p');
          pResume.textContent = noticia.resume;
          newResumeDiv.appendChild(pResume);
          noticiaDiv.appendChild(newResumeDiv);
        }
  
        // Agregar creador
        if (noticia.creator) {
          const newCreatorDiv = document.createElement('div');
          newCreatorDiv.classList.add('new-creator');
          const spanCreator = document.createElement('span');
          spanCreator.textContent = noticia.creator;
          newCreatorDiv.appendChild(spanCreator);
          noticiaDiv.appendChild(newCreatorDiv);
        }
  
        // Agregar noticias relacionadas (si existen)
        if (noticia.relatedNews) {
          const relatedNewsDiv = document.createElement('div');
          relatedNewsDiv.classList.add('news-related');
          const ul = document.createElement('ul');
          noticia.relatedNews.forEach(related => {
            const li = document.createElement('li');
            li.textContent = related;
            ul.appendChild(li);
          });
          relatedNewsDiv.appendChild(ul);
          noticiaDiv.appendChild(relatedNewsDiv);
        }
  
        // Agregar botón de suscripción (si existe)
        if (noticia.subscription) {
            const subscriptionButtonDiv = document.createElement('div');
            subscriptionButtonDiv.classList.add('subscription-button');
            const buttonImage = document.createElement('img');
            buttonImage.src = '/media/subscription.webp'; // Ruta de la imagen WebP
            buttonImage.alt = 'Suscribete';
            subscriptionButtonDiv.appendChild(buttonImage);
            noticiaDiv.appendChild(subscriptionButtonDiv);
          }
  
        // Distribuir noticias en las columnas correspondientes
        if (index === 0) {
            oneColumn.appendChild(noticiaDiv);
          } else if (index <= 2) {
            twoColumn.appendChild(noticiaDiv);
          } else {
            threeColumn.appendChild(noticiaDiv);
          }
      });
    }
  }
  
  customElements.define('news-component', News);
  