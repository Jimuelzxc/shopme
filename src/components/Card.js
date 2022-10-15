import { FaStar, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Card = ({ data, className = "basis-[100%] md:basis-[49%] lg:basis-[19%] mb-[2%]" }) => {
    return (
        <>
            <div id="card" className={`bg-white  rounded border-[1px] border-slate-300 ${className}`}>
                <Link to={`/product/${data.id}`}>
                    <img src={data.thumbnail} alt="" className="h-[300px] w-full" />
                    <div className="m-3">
                        <div className="">
                            <h1 className="font-semibold text-lg text-gray-900">{data.title}</h1>
                            <div className="flex justify-between items-center">
                                <div className="font-bold text-slate-600">$99</div>
                                <div className="flex gap-1 py-3">
                                    <button className="bg-indigo-700 text-white p-3 px-5 rounded">
                                        <FaShoppingCart />
                                    </button>
                                    <button className="border-2 border-slate-300 text-white p-3 rounded text-slate-500">
                                        <FaStar />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Card;