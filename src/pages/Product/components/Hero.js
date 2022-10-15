import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa'
import axios from "axios";

const Hero = () => {
    const [data, setDatas] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        async function result() {
            const res = await axios.get('https://dummyjson.com/products/' + id)
            if (res.data) {
                setDatas(res.data)
            } else {
                navigate('/pagenotfound/' + id)
            }
        }
        result()
    }, [id])

    return (
        <div className="  bg-white border-[1px] border-slate-400  flex flex-row flex-wrap">
            <div className="md:basis-[50%] basis-[100%] md:h-[600px] h-[400px] bg-white after:pb-[100%] flex items-center bg-no-repeat bg-cover bg-center overflow-hidden">
                <img src={data.thumbnail} alt="" className="w-full" />
            </div>
            <div className="md:basis-[40%] basis-[100%] flex items-center">
                <div className="m-14 flex flex-col gap-16 justify-center">
                    <div>
                        <h1 className="font-bold text-slate-900 text-5xl">{data.title}</h1>
                        <div className="text-slate-600 flex items-center gap-4 mt-3">
                            <div>
                                Ratings <span className="font-bold text-yellow-500 text-xl">{data.rating}</span>/5
                            </div>
                            <div className="mt-1">| <span>{data.stock}</span> stocks left</div>
                        </div>
                    </div>
                    <h1 className="font-bold text-indigo-600 text-5xl">${data.price}</h1>
                    <div className="flex items-center gap-2">
                        <div>Quantity:</div>
                        <div className="flex gap-1">
                            <button className="h-10 w-10 rounded text-slate-700 border-[1px] border-slate-700">-</button>
                            <button className="h-10 w-12 rounded text-white bg-indigo-600" disabled>1</button>
                            <button className="h-10 w-10 rounded text-slate-700 border-[1px] border-slate-700">+</button>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-10 flex-col md:flex-row">
                        <button className="bg-indigo-600 text-white font-bold p-3 px-7 rounded text-sm">BUY NOW </button>
                        <button className="bg-gray-500 text-white font-bold p-3 px-7 rounded text-sm">ADD TO CART</button>
                        <button className="bg-yellow-500 text-white font-bold p-3 rounded hidden">
                            <FaStar />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;