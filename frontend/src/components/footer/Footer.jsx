import "../../styles/footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h2>RestaurantHub</h2>

                    <p>

                        Delicious Food,
                        Great Ambience,
                        Happy Memories.

                    </p>

                </div>

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Gallery</p>

                </div>

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>📍 Madanapalle</p>

                    <p>📞 +91 6300584273</p>

                    <p>📧 restauranthub@gmail.com</p>

                </div>

            </div>

            <hr/>

            <p className="copyright">

                © 2026 RestaurantHub. All Rights Reserved.

            </p>

        </footer>

    );

}

export default Footer;