import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/menuSection.css";

import masalaDosa from "../../assets/images/menu/masala-dosa.jpg";
import plainDosa from "../../assets/images/menu/plain-dosa.jpg";
import idliVada from "../../assets/images/menu/idli-vada.jpg";
import pooriBhaji from "../../assets/images/menu/poori-bhaji.jpg";

import chickenBiryani from "../../assets/images/menu/chicken-biryani.jpg";
import vegBiryani from "../../assets/images/menu/veg-biryani.jpg";
import muttonBiryani from "../../assets/images/menu/mutton-biryani.jpg";
import vegMeals from "../../assets/images/menu/veg-meals.jpg";
import familyCombo from "../../assets/images/menu/special-family-combo.jpg";

import cheeseBurger from "../../assets/images/menu/cheese-burger.jpg";
import vegBurger from "../../assets/images/menu/veg-burger.jpg";
import crispyChicken from "../../assets/images/menu/crispy-chicken.jpg";
import chickenLollipop from "../../assets/images/menu/chicken-lollipop.jpg";
import vegManchurian from "../../assets/images/menu/veg-manchurian.jpg";

import italianPizza from "../../assets/images/menu/italian-pizza.jpg";
import whiteSaucePasta from "../../assets/images/menu/white-sauce-pasta.jpg";
import redSaucePasta from "../../assets/images/menu/red-sauce-pasta.jpg";
import lasagna from "../../assets/images/menu/lasagna.jpg";

import paneerButterMasala from "../../assets/images/menu/paneer-butter-masala.jpg";
import paneerTikka from "../../assets/images/menu/paneer-tikka.jpg";
import grilledFish from "../../assets/images/menu/grilled-fish.jpg";
import steak from "../../assets/images/menu/steak.jpg";

import caesarSalad from "../../assets/images/menu/caesar-salad.jpg";
import greekSalad from "../../assets/images/menu/greek-salad.jpg";
import cornSalad from "../../assets/images/menu/corn-salad.jpg";
import paneerSalad from "../../assets/images/menu/paneer-salad.jpg";
import greenSalad from "../../assets/images/menu/green-salad.jpg";
import fruitSalad from "../../assets/images/menu/fruit-salad-special.jpg";

import tomatoSoup from "../../assets/images/menu/tomato-soup.jpg";
import sweetCornSoup from "../../assets/images/menu/sweet-corn-soup.jpg";
import hotSourSoup from "../../assets/images/menu/hot-and-sour-soup.jpg";
import manchowSoup from "../../assets/images/menu/manchow-soup.jpg";

import chocolateCake from "../../assets/images/menu/chocolate-cake.jpg";
import blackForestCake from "../../assets/images/menu/black-forest-cake.jpg";
import brownie from "../../assets/images/menu/brownie.jpg";

import coldCoffee from "../../assets/images/menu/cold-coffee.jpg";
import cappuccino from "../../assets/images/menu/cappuccino.jpg";
import mangoMilkshake from "../../assets/images/menu/mango-milkshake.jpg";
import freshLimeJuice from "../../assets/images/menu/fresh-lime-juice.jpg";

function MenuSection() {

    const { addToCart } = useCart();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleAddToCart = (item) => {

    const token = localStorage.getItem("token");

    if (!token) {

        const choice = window.confirm(
            "Please login first to order food.\n\nClick OK to go to Login.\nClick Cancel to Register."
        );

        if (choice) {

            navigate("/login");

        } else {

            navigate("/register");

        }

        return;

    }

    addToCart(item);

};

    const menu = [

        // Breakfast

        {
            id: 1,
            category: "Breakfast",
            name: "Masala Dosa",
            image: masalaDosa,
            price: 120,
            desc: "Crispy dosa served with chutney & sambar"
        },

        {
            id: 2,
            category: "Breakfast",
            name: "Plain Dosa",
            image: plainDosa,
            price: 90,
            desc: "Traditional South Indian dosa"
        },

        {
            id: 3,
            category: "Breakfast",
            name: "Idli Vada",
            image: idliVada,
            price: 100,
            desc: "Soft idli with crispy vada"
        },

        {
            id: 4,
            category: "Breakfast",
            name: "Poori Bhaji",
            image: pooriBhaji,
            price: 110,
            desc: "Poori served with potato curry"
        },

        // Lunch

        {
            id: 5,
            category: "Lunch",
            name: "Chicken Biryani",
            image: chickenBiryani,
            price: 299,
            desc: "Hyderabadi Dum Biryani"
        },

        {
            id: 6,
            category: "Lunch",
            name: "Veg Biryani",
            image: vegBiryani,
            price: 229,
            desc: "Aromatic vegetable biryani"
        },

        {
            id: 7,
            category: "Lunch",
            name: "Mutton Biryani",
            image: muttonBiryani,
            price: 379,
            desc: "Traditional mutton biryani"
        },

        {
            id: 8,
            category: "Lunch",
            name: "Veg Meals",
            image: vegMeals,
            price: 199,
            desc: "Rice, curry, dal & chapati"
        },

        {
            id: 9,
            category: "Lunch",
            name: "Family Combo",
            image: familyCombo,
            price: 699,
            desc: "Meal for four people"
        },

        // Fast Food

        {
            id: 10,
            category: "Fast Food",
            name: "Cheese Burger",
            image: cheeseBurger,
            price: 199,
            desc: "Loaded cheese burger"
        },

        {
            id: 11,
            category: "Fast Food",
            name: "Veg Burger",
            image: vegBurger,
            price: 159,
            desc: "Fresh veggie burger"
        },

        {
            id: 12,
            category: "Fast Food",
            name: "Crispy Chicken",
            image: crispyChicken,
            price: 249,
            desc: "Golden crispy chicken"
        },

        {
            id: 13,
            category: "Fast Food",
            name: "Chicken Lollipop",
            image: chickenLollipop,
            price: 239,
            desc: "Spicy chicken lollipop"
        },

        {
            id: 14,
            category: "Fast Food",
            name: "Veg Manchurian",
            image: vegManchurian,
            price: 179,
            desc: "Chinese style manchurian"
        },

        // Italian

        {
            id: 15,
            category: "Italian",
            name: "Italian Pizza",
            image: italianPizza,
            price: 349,
            desc: "Wood Fired Pizza"
        },
                {
            id: 16,
            category: "Italian",
            name: "White Sauce Pasta",
            image: whiteSaucePasta,
            price: 249,
            desc: "Creamy white sauce pasta"
        },

        {
            id: 17,
            category: "Italian",
            name: "Red Sauce Pasta",
            image: redSaucePasta,
            price: 239,
            desc: "Classic tomato pasta"
        },

        {
            id: 18,
            category: "Italian",
            name: "Lasagna",
            image: lasagna,
            price: 329,
            desc: "Cheesy baked lasagna"
        },

        // Dinner

        {
            id: 19,
            category: "Dinner",
            name: "Paneer Butter Masala",
            image: paneerButterMasala,
            price: 249,
            desc: "Served with butter naan"
        },

        {
            id: 20,
            category: "Dinner",
            name: "Paneer Tikka",
            image: paneerTikka,
            price: 279,
            desc: "Grilled paneer cubes"
        },

        {
            id: 21,
            category: "Dinner",
            name: "Grilled Fish",
            image: grilledFish,
            price: 399,
            desc: "Fresh grilled fish"
        },

        {
            id: 22,
            category: "Dinner",
            name: "Steak",
            image: steak,
            price: 499,
            desc: "Juicy grilled steak"
        },

        // Salads

        {
            id: 23,
            category: "Salads",
            name: "Caesar Salad",
            image: caesarSalad,
            price: 169,
            desc: "Fresh Caesar salad"
        },

        {
            id: 24,
            category: "Salads",
            name: "Greek Salad",
            image: greekSalad,
            price: 189,
            desc: "Healthy Greek salad"
        },

        {
            id: 25,
            category: "Salads",
            name: "Corn Salad",
            image: cornSalad,
            price: 159,
            desc: "Sweet corn salad"
        },

        {
            id: 26,
            category: "Salads",
            name: "Paneer Salad",
            image: paneerSalad,
            price: 199,
            desc: "Fresh paneer salad"
        },

        {
            id: 27,
            category: "Salads",
            name: "Green Salad",
            image: greenSalad,
            price: 129,
            desc: "Mixed fresh vegetables"
        },

        {
            id: 28,
            category: "Salads",
            name: "Fruit Salad",
            image: fruitSalad,
            price: 179,
            desc: "Seasonal fruit salad"
        },

        // Soups

        {
            id: 29,
            category: "Soups",
            name: "Tomato Soup",
            image: tomatoSoup,
            price: 119,
            desc: "Creamy tomato soup"
        },

        {
            id: 30,
            category: "Soups",
            name: "Sweet Corn Soup",
            image: sweetCornSoup,
            price: 129,
            desc: "Classic sweet corn soup"
        },
                {
            id: 31,
            category: "Soups",
            name: "Hot & Sour Soup",
            image: hotSourSoup,
            price: 139,
            desc: "Spicy hot & sour soup"
        },

        {
            id: 32,
            category: "Soups",
            name: "Manchow Soup",
            image: manchowSoup,
            price: 149,
            desc: "Chinese style Manchow soup"
        },

        // Desserts

        {
            id: 33,
            category: "Desserts",
            name: "Chocolate Cake",
            image: chocolateCake,
            price: 149,
            desc: "Soft chocolate cake"
        },

        {
            id: 34,
            category: "Desserts",
            name: "Black Forest Cake",
            image: blackForestCake,
            price: 169,
            desc: "Rich black forest cake"
        },

        {
            id: 35,
            category: "Desserts",
            name: "Brownie",
            image: brownie,
            price: 139,
            desc: "Chocolate brownie"
        },

        // Beverages

        {
            id: 36,
            category: "Beverages",
            name: "Cold Coffee",
            image: coldCoffee,
            price: 120,
            desc: "Fresh cream cold coffee"
        },

        {
            id: 37,
            category: "Beverages",
            name: "Cappuccino",
            image: cappuccino,
            price: 140,
            desc: "Hot cappuccino"
        },

        {
            id: 38,
            category: "Beverages",
            name: "Mango Milkshake",
            image: mangoMilkshake,
            price: 160,
            desc: "Fresh mango milkshake"
        },

        {
            id: 39,
            category: "Beverages",
            name: "Fresh Lime Juice",
            image: freshLimeJuice,
            price: 80,
            desc: "Refreshing lime juice"
        }

    ];

    const filteredMenu =
        selectedCategory === "All"
            ? menu
            : menu.filter(
                (item) => item.category === selectedCategory
            );
            return (

    <section className="menu-section">

        <h2>Our Delicious Menu</h2>

        <p>
            Fresh ingredients, rich flavors and unforgettable taste.
        </p>

        <div className="menu-categories">

            <button onClick={() => setSelectedCategory("All")}>
                All
            </button>

            <button onClick={() => setSelectedCategory("Breakfast")}>
                Breakfast
            </button>

            <button onClick={() => setSelectedCategory("Lunch")}>
                Lunch
            </button>

            <button onClick={() => setSelectedCategory("Dinner")}>
                Dinner
            </button>

            <button onClick={() => setSelectedCategory("Fast Food")}>
                Fast Food
            </button>

            <button onClick={() => setSelectedCategory("Italian")}>
                Italian
            </button>

            <button onClick={() => setSelectedCategory("Salads")}>
                Salads
            </button>

            <button onClick={() => setSelectedCategory("Soups")}>
                Soups
            </button>

            <button onClick={() => setSelectedCategory("Desserts")}>
                Desserts
            </button>

            <button onClick={() => setSelectedCategory("Beverages")}>
                Beverages
            </button>

        </div>

        <div className="menu-grid">

            {

                filteredMenu.map((item) => (

                    <div
                        className="menu-card"
                        key={item.id}
                    >

                        <img
                            src={item.image}
                            alt={item.name}
                        />

                        <small className="category">

                            {item.category}

                        </small>

                        <h3>

                            {item.name}

                        </h3>

                        <p>

                            {item.desc}

                        </p>

                        <span>

                            ₹{item.price}

                        </span>

                        <button
    onClick={() => handleAddToCart(item)}
>
    Add to Cart
</button>

                    </div>

                ))

            }

        </div>

    </section>

);

}

export default MenuSection;