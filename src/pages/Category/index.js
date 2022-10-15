import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Card from "../../components/Card";
const Category = () => {
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState('block')
    const { product } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Shopme - Category"
        async function result() {
            const res = await axios.get('https://dummyjson.com/products/category/' + product)
            if (res.data.products.length) {
                setDatas(res.data.products)
            } else {
                navigate('/pagenotfound/' + product)
            }
            setLoader('hidden')

        }
        result()
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className={`h-screen w-full fixed bg-gray-100 ${loader} flex justify-center`}>
                <img src="https://c.tenor.com/9Pz9iuGtD0QAAAAi/loading.gif" alt="" className="h-10 w-10" />
            </div>
            <Navbar />
            <Container className="mt-32 min-h-screen my-10">
                <div className="text-gray-800 mb-3">
                    <span className="font-bold">Category: </span>
                    <span className="capitalize">{product}</span>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                    {
                        datas.map((data, index) => {
                            return (
                                <Card key={index} data={data} />
                            )
                        })
                    }
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Category;