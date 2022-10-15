import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../../../components/Container";
import axios from "axios";

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState('block')
    useEffect(() => {
        async function result() {
            const res = await axios.get('https://dummyjson.com/products/categories')
            setCategories(res.data)
            setLoader('hidden')
        }
        result()
    }, [])
    return (
        <>
            <div className={`w-full absolute bg-gray-100 ${loader} flex justify-center`}>
                <img src="https://c.tenor.com/9Pz9iuGtD0QAAAAi/loading.gif" alt="" className="h-10 w-10" />
            </div>
            <Container>
                <div>
                    <h1 className="font-bold text-slate-600 uppercase mb-3">Categories</h1>
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            categories.map((value, index) => {
                                return (
                                    <Category key={index} value={value} />
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}
function Category({ value }) {
    return (
        <>
            <div className="lg:basis-[9.5%] basis-[49%] md:basis-[22%] border-[2px] border-slate-200 py-4 rounded mb-3 bg-white hover:scale-105 hover:border-indigo-500">
                <Link to={`/category/${value}`}>
                    <div className="m-1 h-[100px] flex items-center justify-center mt-1">
                        <img src={require(`../assets/categories/${value}.png`)} alt="" className="h-[100px] w-auto" />
                    </div>
                    <div className="text-center text-slate-500 capitalize">{value}</div>
                </Link>
            </div>
        </>
    )
}
