import Navbar from "../../components/Navbar";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import TopProducts from "./components/TopProducts";
import Discover from "./components/Discover";
import Footer from "../../components/Footer";
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <TopProducts />
            <Discover />
            <Footer />
        </>
    );
}

export default Home;