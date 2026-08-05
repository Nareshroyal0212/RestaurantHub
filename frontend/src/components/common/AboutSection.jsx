import "../../styles/aboutSection.css";
import restaurant from "../../assets/images/restaurant.jpg";

function AboutSection() {

    return (

        <section className="about-section">

            <div className="about-image">

                <img
                    src={restaurant}
                    alt="RestaurantHub"
                />

            </div>

            <div className="about-content">

                <h2>About RestaurantHub</h2>

                <p>

                    Welcome to <strong>RestaurantHub</strong>, where every meal
                    is prepared with passion, fresh ingredients, and authentic
                    flavors. Our mission is to provide an exceptional dining
                    experience that combines delicious food, outstanding service,
                    and a warm atmosphere.

                </p>

                <p>

                    Whether you are enjoying a family dinner, celebrating a
                    birthday, planning a business lunch, or having a romantic
                    evening, RestaurantHub is the perfect destination for every
                    occasion. Our experienced chefs carefully prepare every dish
                    to ensure the highest quality and unforgettable taste.

                </p>

                <p>

                    We proudly serve a wide variety of cuisines including Indian,
                    Chinese, Italian, Continental, and our signature chef
                    specials. Customer satisfaction, hygiene, quality, and
                    hospitality remain our highest priorities.

                </p>

                <div className="about-features">

                    <div className="feature">

                        <h3>👨‍🍳 Expert Chefs</h3>

                        <p>
                            Experienced chefs preparing every meal with care.
                        </p>

                    </div>

                    <div className="feature">

                        <h3>🥗 Fresh Ingredients</h3>

                        <p>
                            Premium quality ingredients sourced every day.
                        </p>

                    </div>

                    <div className="feature">

                        <h3>⭐ Premium Service</h3>

                        <p>
                            Friendly staff dedicated to making every visit special.
                        </p>

                    </div>

                </div>

                <button>

                    Explore Our Menu

                </button>

            </div>

        </section>

    );

}

export default AboutSection;