import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

const Search = () => {
    const [searchData, setSearchData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const searchValue = searchParams.get('v')
    useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q=' + searchValue)
            .then((res) => {
                if (res.status == 200) {
                    setSearchData(res.data.products)
                }
            })
    }, [searchParams])
    return (
        <>
            <Navbar />
            <div className="mx-10 mt-32">
                <h1 className="font-bold text-slate-600 uppercase mb-3">Search: {searchValue}</h1>
                <div className="flex flex-row flex-wrap gap-[0.6%]">
                    {
                        searchData.length ? searchData.map((data, index) => {
                            return (
                                <Card key={index} data={data} className="basis-[100%] md:basis-[32.3%] lg:basis-[29%] xl:basis-[15.6%]  mb-3" />
                            )
                        }) : <div className="text-red-500 font-bold">PRODUCT OR CATEGORY NOT EXIST</div>
                    }
                </div>
                <h1 className="text-center text-indigo-700 cursor-pointer py-3">See more</h1>
            </div>
            <br />
        </>
    );
}

export default Search;