import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout({ children }) {

    return (

        <>

            <Navbar />

            <main>

                {children}

            </main>

            <Footer />

        </>

    );

}

export default MainLayout;