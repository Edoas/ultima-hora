class MainHeader extends HTMLElement {
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
        .main-header {
            background-color: hsl(2, 97%, 50%);
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 20%;
            align-items: center;
            display: flex;
            align-items: center;
        }

        .menu-main-header svg{
            fill: hsla(0, 0%, 100%);
            width: 2rem;
        }

        .logo{
            margin-left: 5rem;
        }

        .logo svg {
            width: 300px;
            height: 50px;
            background-color: hsl(2, 97%, 50%); /* Placeholder for logo */
            color: hsl(0, 0%, 100%);
            fill: hsla(0, 0%, 100%);
        }

        .user-area {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .sign-in, .register {
            display: flex;
            align-items: center;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
        }

        .sign-in button{
            background-color: hsl(207, 17%, 88%);
            border: none;
            border-radius: 0.2rem;
            align-items: center;
            display: flex;
            gap: 0.5rem;
            padding: 0.2rem 0.5rem;
        }

        .register button{
            background-color: hsl(47, 100%, 50%);
            border: none;
            border-radius: 0.2rem;
            font-style: italic;
            font-weight: 600;
            padding: 0.5rem;
        }

        .sign-in button svg{
            width: 1.5rem;
        }

      </style>
      
      <div class="main-header">
            <div class="menu-main-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
            </div>
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 25"><path d="M137.96 7.01c-2.93.13-3.88 1.95-3.88 1.95V7.21h-6.9v3.81h.81v9.39h-.92v3.92h8.14v-3.92h-1.13V15.1s-.43-2.22 2.27-2.22c.68 0 1.62.26 1.62.26l-.01-6.13zM91.63 1.17v4.02h1.52v15.06h-1.52v4.03h8.96v-3.92h-1.3V15.2h3.46v5.05h-1.3v4.03h9.28v-4.03h-1.62V5.09h1.62V1.17h-9.39v3.92h1.41v5.16h-3.46V5.09h1.3V1.17zm53.67 20.07c-1.02 0-.97-.88-.97-.88v-2.48s.11-1.08 1.02-1.08c.97 0 .97 1.08.97 1.08v2.48s.06.88-1.02.88m6.52-.83v-8.36s.49-5.62-6.82-5.62c-4.13 0-5.91 1.39-5.91 1.39v4.28s2.05-1.39 4.48-1.39c2.7 0 2.64 1.39 2.64 1.39v2.53s-1.24-1.08-3.1-1.08c-5.21 0-4.99 5.57-4.99 5.57s-.33 5.88 4.89 5.88c1.9 0 3.2-1.5 3.2-1.5v.83h6.63V20.4l-1.02.01zm-34.27-7.79s.06-1.6 1.19-1.6c1.19 0 1.24 1.6 1.24 1.6v6.65s-.06 1.24-1.19 1.24-1.24-1.24-1.24-1.24v-6.65zm1.21-5.83c-6.04 0-7.66 4.02-7.66 9.13 0 4.39 1.78 8.82 7.66 8.82 6.14 0 7.66-4.18 7.66-8.82 0-5-1.56-9.13-7.66-9.13M.36 1.02h9.77v3.94h-1.5v13.23s-.08 2.34 1.95 2.34c0 0 2.26.22 2.26-2.34.08 0 0-12.13 0-12.13s-.3-1.1-1.8-1.1V1.02h6.92v3.94s-1.58.15-1.58 1.02c.08 0 0 13.08 0 13.08s.45 5.19-5.71 5.77c0 0-8.57 1.24-8.5-6.72-.08 0 0-13.15 0-13.15H.37V1.02zM18.85.91v3.98h.75v15.52h-.97v3.92h8.14v-3.92h-1.08V.91zm9.06 2.99v3.3h-1.08v3.82h1.03v8.62s-.9 2.62 1.4 4.07c2.07 1.31 6.47-.16 6.47-.16v-3.77s-1.03.52-1.72-.16c-.26-.25-.22-.88-.22-.88V11h2.11V7.2h-2.11V2.4l-5.88 1.5zm8.95 3.31v3.81h.97v9.39h-.97v3.92H45v-3.92h-1.02V7.21zm0-3.87c0-1.62 1.62-2.94 3.61-2.94 1.99 0 3.61 1.32 3.61 2.94 0 1.62-1.62 2.94-3.61 2.94-1.99 0-3.61-1.32-3.61-2.94m9 3.87v3.82h.81v9.39h-.92v3.92h8.14v-3.92h-1.13v-8.36s-.06-1.08.92-1.08c1.02 0 1.02 1.08 1.02 1.08v12.27h7.23v-3.92H60.8v-8.36s.11-1.08 1.02-1.08c.97 0 1.02 1.08 1.02 1.08v12.27h6.9V20.4h-.92V10.35s-.06-3.97-4.37-3.97c-2.86 0-3.99 1.91-3.99 1.91s-1.19-1.96-3.51-1.96c-3.18 0-4.21 2.63-4.21 2.63V7.21h-6.88zm31.5 14.03c-1.02 0-.97-.88-.97-.88v-2.48s.11-1.08 1.02-1.08c.97 0 .97 1.08.97 1.08v2.48c.01 0 .06.88-1.02.88m6.52-.83v-8.36s.49-5.62-6.82-5.62c-4.13 0-5.91 1.39-5.91 1.39v4.28s2.05-1.39 4.48-1.39c2.7 0 2.64 1.39 2.64 1.39v2.53s-1.24-1.08-3.1-1.08c-5.21 0-4.99 5.57-4.99 5.57S69.86 25 75.08 25c1.9 0 3.19-1.49 3.19-1.49v.83h6.63v-3.92l-1.02-.01z"></path></svg>
            </div>
            <div class="user-area">
                <div class="sign-in">
                    <button>Iniciar sesión <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.05 6.6L5.99 5.54c3.57-3.46 9.27-3.37 12.73.19s3.37 9.27-.19 12.73-9.27 3.37-12.73-.19c-.1-.1-.2-.21-.3-.32l1.06-1.06c2.7 3.14 7.43 3.51 10.58.81s3.51-7.43.81-10.58-7.43-3.51-10.58-.81c-.11.09-.22.19-.32.29z"></path><path d="M5.86 12.29H0v-1.5h5.86M12.5 18c1.01 0 1.99-.26 2.86-.77.86-.47 1.6-1.15 2.14-1.97-.01-.52-.33-.99-.94-1.42-.53-.37-1.21-.66-2.04-.9-.75-.2-1.42-.31-2.03-.31s-1.28.1-2.03.31c-.83.23-1.5.53-2.02.9-.61.43-.93.91-.94 1.42.54.82 1.28 1.5 2.14 1.97.91.51 1.86.77 2.86.77zm0-11c-.44 0-.85.11-1.24.35A2.563 2.563 0 0010 9.54c0 .45.11.87.34 1.26.23.39.53.71.92.94a2.4 2.4 0 002.48 0c.39-.23.69-.54.92-.94.23-.39.34-.81.34-1.26 0-.45-.11-.87-.34-1.26-.22-.39-.54-.71-.92-.93A2.4 2.4 0 0012.5 7z"></path><path d="M3.68 8.61v5.87h-1.5V8.61"></path></svg></button>
                </div>
                <div class="register">
                    <button>Regístrate</button>
                </div>
            </div>
        </div>
      
      `
    }
  }
  customElements.define('main-header-component', MainHeader)
