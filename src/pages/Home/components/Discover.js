import { useState, useEffect } from 'react'
import axios from "axios";

import Container from "../../../components/Container";
import Card from "../../../components/Card";

const Discover = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function result() {
            const res = await axios.get('https://dummyjson.com/products?limit=36&skip=32&select=title,price,thumbnail')
            setProducts(res.data.products)
        }
        result()
    }, [])
    return (
        <>
            <Container>
                <h1 className="font-bold text-slate-600 uppercase mb-3">DISCOVER</h1>
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        products.map((product, index) => {
                            return (
                                <Card key={index} data={product} className="basis-[100%] md:basis-[32.3%] lg:basis-[29%] xl:basis-[15.6%]  mb-3" />
                            )
                        })
                    }
                </div>
                <h1 className="text-center text-indigo-700 cursor-pointer py-3">See more</h1>
            </Container>
            <br />
        </>
    );
}
export default Discover;