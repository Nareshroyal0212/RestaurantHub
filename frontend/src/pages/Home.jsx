import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/Hero";
import AboutSection from "../components/common/AboutSection";
import SpecialOffer from "../components/common/SpecialOffer";

function Home() {

    return (

        <MainLayout>

            <Hero />

            <AboutSection />

            <SpecialOffer />

        </MainLayout>

    );

}

export default Home;