import "../../styles/menuCard.css";

function MenuCard({ item }) {

    return (

        <div className="menu-card">

            <img
                src={`http://localhost:9090${item.imageUrl}`}
                alt={item.foodName}
            />

            <div className="menu-card-content">

                <h2>{item.foodName}</h2>

                <p>{item.description}</p>

                <span>{item.category}</span>

                <h3>₹ {item.price}</h3>

                <button>

                    Order Now

                </button>

            </div>

        </div>

    );

}

export default MenuCard;