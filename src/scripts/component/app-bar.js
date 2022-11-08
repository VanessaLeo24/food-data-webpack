class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .app-bar {
            display: block;
            text-align: center;
            color: rgb(255, 135, 135);
            background-color: rgb(133, 14, 53);
        }
        
        h1 {
            padding-top: 20px;
            padding-bottom: 10px;
        }
        
        p {
            padding-bottom: 10px;
        }
        </style>

        <h1>Eat with Vanessa</h1>
        <p>Here are the food's data with instructions, check it out!</p>`;
    }
}

customElements.define('app-bar', AppBar);