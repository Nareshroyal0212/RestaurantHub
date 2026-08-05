import { useNavigate } from "react-router-dom";
import "../../styles/hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const protectedNavigation = (path) => {

        if (!token) {

            const proceed = window.confirm(
                "Please Login or Register to continue."
            );

            if (proceed) {

                navigate("/login");

            }

            return;

        }

        navigate(path);

    };

    return (

        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`
            }}
        >

            <div className="overlay">

                <div className="hero-content">

                    <h3>

                        Welcome To RestaurantHub

                    </h3>

                    <h1>

                        Delicious Food
                        <br />
                        Memorable Moments

                    </h1>

                    <p>

                        Experience premium dining with delicious dishes,
                        world-class chefs and unforgettable service.

                    </p>

                    <div className="hero-buttons">

                        <button
                            className="menu-btn"
                            onClick={() => protectedNavigation("/menu")}
                        >

                            Explore Menu

                        </button>

                        <button
                            className="reserve-btn"
                            onClick={() => protectedNavigation("/reservation")}
                        >

                            Reserve Table

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;