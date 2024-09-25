class TabsMenuHeader extends HTMLElement {
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

        .tabs-menu-header {
            display: flex;
            justify-content: space-between;
            padding: 0 20%;
            background-color: hsl(0, 0%, 90%);
        }

        .menu{
            width: 100%;
        }

        .menu ul {
            align-items: center;
            list-style: none;
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin: 0;
            padding: 0;
        }

        .menu ul li {
            color: hsl(0, 0%, 20%);
            cursor: pointer;
            font-family: "Roboto Condensed", sans-serif;
            text-transform: uppercase;
            transition: color 0.3s ease;
        }

        .menu ul li:hover {
            color: #E74C3C;
        }

        .menu ul li:first-child svg{
            fill: hsl(0, 0%, 20%);
            width: 2rem;
        }

        .menu ul li:last-child svg{
            fill: hsl(0, 0%, 20%);
            width: 1.5rem;
        }


        .button-home-menu-header,
        .button-home-search-header {
            width: 30px;
            height: 30px;
            background-color: white; /* Placeholder for buttons */
            cursor: pointer;
        }
        </style>  

    <div class="tabs-menu-header">
    <div class="menu">
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l8 7.77-1.5 1.46-6.5-6.3-6.49 6.3L4 11.77 12 4zM6.29 19v-4.98L12 8.61l5.71 5.4V19h-4.08v-4.53h-3.26V19H6.29z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </li>
            <li>Noticias</li>
            <li>Sucesos</li>
            <li>Deportes</li>
            <li>Opinion</li>
            <li>Xaloc</li>
            <li>Participa</li>
            <li>Ocio</li>
            <li>Vips</li>
            <li>Guía Útil</li>
            <li>Siurells club valores</li>
            <li>Monográfico</li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M195.55 173.79l-41.22-41.22c9.94-14.34 14.9-30.32 14.9-47.95 0-11.47-2.22-22.42-6.67-32.88-4.45-10.45-10.46-19.47-18.03-27.04s-16.58-13.59-27.04-18.03C107.03 2.22 96.08 0 84.62 0 73.16 0 62.2 2.22 51.74 6.67 41.28 11.11 32.27 17.13 24.7 24.7c-7.58 7.57-13.58 16.59-18.03 27.04C2.22 62.2 0 73.15 0 84.62c0 11.46 2.22 22.42 6.67 32.88 4.45 10.45 10.46 19.47 18.03 27.04 7.57 7.56 16.59 13.58 27.04 18.03 10.46 4.44 21.42 6.67 32.87 6.67 17.63 0 33.62-4.98 47.96-14.91l41.22 41.1c2.89 3.05 6.49 4.58 10.82 4.58 4.25 0 7.87-1.51 10.87-4.51 3.01-3 4.51-6.63 4.51-10.88s-1.47-7.86-4.44-10.83zm-72.89-51.13c-10.54 10.53-23.22 15.8-38.04 15.8s-27.5-5.26-38.04-15.8c-10.54-10.54-15.81-23.22-15.81-38.04s5.27-27.51 15.81-38.04c10.54-10.53 23.21-15.81 38.04-15.81s27.5 5.28 38.04 15.81c10.54 10.53 15.81 23.22 15.81 38.04s-5.28 27.5-15.81 38.04z"></path></svg>
            </li>
        </ul>
    </div>
        
      `
    }
  }
  customElements.define('tabs-menu-header-component', TabsMenuHeader)