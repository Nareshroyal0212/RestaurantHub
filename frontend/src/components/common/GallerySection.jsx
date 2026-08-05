import "../../styles/gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

function GallerySection() {

    const images = [

        gallery1,

        gallery2,

        gallery3,

        gallery4,

        gallery5,

        gallery6

    ];

    return (

        <section className="gallery-section">

            <h2>Restaurant Gallery</h2>

            <p>

                Experience our delicious food and beautiful ambience.

            </p>

            <div className="gallery-grid">

                {

                    images.map((image, index) => (

                        <div

                            className="gallery-card"

                            key={index}

                        >

                            <img

                                src={image}

                                alt="Restaurant"

                            />

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default GallerySection;