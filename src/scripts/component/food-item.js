class FoodItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    set food(food) {
        this._food = food;
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
        
            .content {
                background-color: #FFF5E4;
                border: 1px solid black;
                padding: 10px 20px;

            }
            </style>

        <div class="content">
            <h2>${this._food.strMeal}</h2>
            <p>Meal Area : ${this._food.strArea}</p>
            <p>Meal Category : ${this._food.strCategory}</p>
            <p>Meal Instruction : ${this._food.strInstructions}</p>
        </div> `;
    }
}

customElements.define('food-item', FoodItem);