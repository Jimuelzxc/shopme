import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Hero = () => {
    const [heroData, setHeroData] = useState([])
    const { thumbnail, id } = heroData;
    useEffect(() => {
        async function result() {
            const res = await axios.get('https://dummyjson.com/products/1');
            setHeroData(res.data)
        }
        result()
    }, [])
    return (
        <>
            <div className="lg:mx-10 border-b-[1px] py-5 border-slate-300 mt-24">
                <Link to={`/product/${id}`}>
                    <div className={`h-[500px] overflow-hidden flex justify-center bg-[url(https://i.ytimg.com/vi/ldX-ab758l8/maxresdefault.jpg)] bg-no-repeat bg-cover bg-center`}>
                    </div>
                </Link>
            </div>
            <br />
        </>
    );
}

export default Hero;