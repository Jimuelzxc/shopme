import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import axios from "axios";

const TopProducts = () => {
    const [topProducts, setTopProducts] = useState([])
    useEffect(() => {
        async function result() {
            const res = await axios.get('https://dummyjson.com/products?limit=4&select=title,price,thumbnail,description,id');
            setTopProducts(res.data.products)
        }
        result()
    }, [])
    return (
        <>
            <Container className="mb-5">
                <h1 className="font-bold text-slate-600 uppercase mb-3"><span className="text-indigo-600 text-xl">🔥 TOP</span> PRODUCTS</h1>
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        topProducts.map((value, index) => {
                            return (
                                <TopProductCard key={index} id={value.id} image={value.thumbnail} title={value.title} price={value.price} description={value.description} />
                            )
                        })
                    }
                </div>
            </Container>
        </>
    );
}
function TopProductCard({ id, image, title, price, description }) {
    return (
        <>
            <div className="basis-[99%] md:basis-[49%] lg:basis-[24.5%]  mb-3 border border-[1px] border-slate-300 rounded bg-white shadow-lg hover:sepia-0">
                <Link to={`/product/${id}`}>
                    <div className="h-[300px] overflow-hidden flex justify-center">
                        <img src={image} alt="" className="h-full w-full" />
                    </div>
                    <div className="p-4 text-slate-600">
                        <div className="flex justify-between text-slate-900">
                            <h1>{title}</h1>
                            <h1>${price}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default TopProducts;