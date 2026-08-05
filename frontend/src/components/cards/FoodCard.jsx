import "../../styles/foodcard.css";

function FoodCard({

    image,

    title,

    description,

    price

}) {

    return (

        <div className="food-card">

            <img

                src={image}

                alt={title}

            />

            <div className="food-content">

                <h2>{title}</h2>

                <p>{description}</p>

                <h3>{price}</h3>

                <button>

                    Order Now

                </button>

            </div>

        </div>

    );

}

export default FoodCard;