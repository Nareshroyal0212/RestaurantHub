import "../../styles/chef.css";

import chef1 from "../../assets/images/chef.jpg";
import chef2 from "../../assets/images/chef2.jpg";
import chef3 from "../../assets/images/chef3.jpg";

function ChefSection() {

    return (

        <section className="chef-section">

            <h2>Meet Our Expert Chefs</h2>

            <div className="chef-grid">

                <div className="chef-card">

                    <img src={chef1} alt="Chef Arjun" />

                    <h3>Chef Arjun</h3>

                    <p>Italian Cuisine Specialist</p>

                </div>

                <div className="chef-card">

                    <img src={chef2} alt="Chef Rahul" />

                    <h3>Chef Rahul</h3>

                    <p>Indian Master Chef</p>

                </div>

                <div className="chef-card">

                    <img src={chef3} alt="Chef Vikram" />

                    <h3>Chef Vikram</h3>

                    <p>Chinese Cuisine Expert</p>

                </div>

            </div>

        </section>

    );

}

export default ChefSection;