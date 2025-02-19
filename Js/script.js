        // Meal Plan Generator
        document.querySelector('#diet-select').addEventListener('change', function() {
            const dietType = this.value;
            const meals = {
                vegan: [{ name: "Vegan Buddha Bowl", calories: 400 }, { name: "Vegan Tacos", calories: 300 }],
                keto: [{ name: "Keto Chicken Salad", calories: 500 }, { name: "Keto Zucchini Noodles", calories: 350 }]
            };
            const mealPlanContainer = document.querySelector('.meal-plan-list');
            mealPlanContainer.innerHTML = '';
            meals[dietType]?.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('meal-item');
                mealDiv.innerHTML = `<h3>${meal.name}</h3><p>Calories: ${meal.calories}</p>`;
                mealPlanContainer.appendChild(mealDiv);
            });
        });

        // Ingredient Tracker
        document.querySelector('#ingredient-button').addEventListener('click', function() {
            const ingredientInput = document.querySelector('#ingredient-input').value;
            const recipes = [{ name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato"] }];
            const recipeContainer = document.querySelector('.recipe-list');
            recipeContainer.innerHTML = '';
            recipes.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe-item');
                recipeDiv.innerHTML = `<h3>${recipe.name}</h3>`;
                recipeContainer.appendChild(recipeDiv);
            });
        });

        // Geolocation and Nearby Restaurants
        document.querySelector('#geolocation-btn').addEventListener('click', function() {
            const restaurantContainer = document.querySelector('.restaurant-list');
            restaurantContainer.innerHTML = '';

            const restaurants = [
                {
                    name: "McDonald's Sandton Rock & Roll Drive-Thru",
                    address: "Rivonia Rd, Sandton, GP, ZA",
                    hours: "06:00 - 23:00",
                    link: "https://www.waze.com/live-map/directions/mcdonalds-sandton-rock-and-roll-drive-thru-rivonia-rd-sandton?to=place.w.18417155.183909406.768394"
                },
                {
                    name: "McDonald's Sandton",
                    address: "Cnr Grayston Dr (M40) & Rivonia Rd (M9), Morningside, Sandton, South Africa",
                    hours: "Open 24 hours",
                    link: "https://www.waze.com/live-map/directions/mcdonalds-sandton-cnr-grayston-dr-and-rivonia-rd-morningside-sandton?to=place.w.18417155.183909410.394044"
                },
                {
                    name: "McDonald's Rivonia Square",
                    address: "329 Rivonia Blvd, Rivonia, Sandton, South Africa",
                    hours: "06:00 - 23:00",
                    link: "https://www.waze.com/live-map/directions/mcdonalds-rivonia-square-rivonia-blvd-329-rivonia-sandton?to=place.w.18417155.183909413.982935"
                }
            ];

            restaurants.forEach(restaurant => {
                const restaurantDiv = document.createElement('div');
                restaurantDiv.classList.add('restaurant-item');
                restaurantDiv.innerHTML = `
                    <h3>${restaurant.name}</h3>
                    <p>Address: ${restaurant.address}</p>
                    <p>Hours: ${restaurant.hours}</p>
                    <a href="${restaurant.link}" target="_blank" class="directions-btn">Find Directions</a>
                `;
                restaurantContainer.appendChild(restaurantDiv);
            });
        });