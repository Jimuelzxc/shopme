import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import YMAL from "./components/YouMayAlsoLike";
import Footer from "../../components/Footer";

const Product = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-32 mx-0">
                <Hero />
                <YMAL />
            </Container >
            <Footer />
        </>
    );
}

export default Product;