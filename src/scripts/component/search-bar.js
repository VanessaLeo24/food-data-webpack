class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchInput').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            margin: 0 auto;
            padding: 5px;
            text-align: center;
            background-color: rgb(176, 34, 81);
        }
        
        .search-container input {
            width: 30%;
        }

        .search-container input:focus {
            outline: 0;
            border: 2px solid rgb(125, 10, 49);
          }
          
          .search-container input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container input::placeholder {
            color: rgb(176, 67, 108);
            font-weight: normal;
          }
          
          .search-container button {
            cursor: pointer;
          
            color: rgb(176, 67, 108);
          } 

          .search-container button:hover {
            background-color: rgb(252, 152, 186);
            border: 2px solid rgb(133, 14, 53);
          }
        
        </style>
        
        <div id="search-container" class="search-container">
        <input placeholder="Search any meals you want to know ..." id="searchInput" type="search">
        <button id="searchButton" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector('#searchButton').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);