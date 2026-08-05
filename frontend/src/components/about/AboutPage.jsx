import "../../styles/aboutPage.css";

function AboutPage() {

    return (

        <div>

            <section className="about-banner">

                <div className="about-overlay">

                    <h1>About RestaurantHub</h1>

                    <p>
                        Delicious Food • Great Ambience • Memorable Experiences
                    </p>

                </div>

            </section>

            <section className="about-story">

                <div className="about-image">

      <img
    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80"
    alt="Chef"
/>

                </div>

                <div className="about-content">

                    <h2>Our Story</h2>

                    <p>

                        RestaurantHub was created with one mission:
                        to provide delicious food, exceptional service,
                        and unforgettable dining experiences.

                    </p>

                    <p>

                        We carefully prepare every meal using fresh,
                        premium ingredients while maintaining the
                        highest standards of quality and hygiene.

                    </p>

                    <p>

                        Whether you're dining with family, celebrating
                        a special occasion, or simply enjoying your
                        favorite meal, RestaurantHub is the perfect
                        destination.

                    </p>

                </div>

            </section>

            <section className="mission-vision">

                <div className="card">

                    <h2>🎯 Our Mission</h2>

                    <p>

                        To serve fresh, delicious food with excellent
                        customer service while creating memorable dining
                        experiences.

                    </p>

                </div>

                <div className="card">

                    <h2>🚀 Our Vision</h2>

                    <p>

                        To become one of the most loved restaurants by
                        delivering quality, innovation, and customer
                        satisfaction.

                    </p>

                </div>

            </section>

            <section className="why-us">

                <h2>Why Choose RestaurantHub?</h2>

                <div className="why-grid">

                    <div className="why-card">

                        <h3>👨‍🍳 Expert Chefs</h3>

                        <p>

                            Experienced chefs preparing every meal
                            with love and passion.

                        </p>

                    </div>

                    <div className="why-card">

                        <h3>🥗 Fresh Ingredients</h3>

                        <p>

                            Premium quality ingredients sourced
                            every day.

                        </p>

                    </div>

                    <div className="why-card">

                        <h3>⭐ Premium Service</h3>

                        <p>

                            Friendly staff dedicated to making
                            every visit memorable.

                        </p>

                    </div>

                </div>

            </section>

        </div>

    );

}

export default AboutPage;