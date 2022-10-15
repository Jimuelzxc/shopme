import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
const Navbar = () => {
    let navigate = useNavigate()
    const [query, setQuery] = useState("")
    const [showMenu, setShowMenu] = useState("hidden")
    function handleOnChange(e) {
        setQuery(e.target.value)
    }
    function gotoSearch() {
        navigate('/search?v=' + query)
    }
    function triggerEnter(e) {
        if (e.key === "Enter") {
            setQuery('')

            navigate('/search?v=' + query)
        }
    }
    function displayMenu(){
        setShowMenu('fixed')
    }
    return (
        <div className='fixed top-0 bg-indigo-600 w-full z-10 shadow-xl'>
            <div className={`h-screen w-full bg-indigo-600 ${showMenu}`}></div>
            <Container className="flex justify-between py-5 items-center">
                <div className="font-bold text-3xl text-white">
                    <Link to='/'>Shop<span className='text-yellow-300'>me</span></Link>
                </div>
                <div className='hidden md:flex items-center gap-5'>
                    <h1 className='text-white'>Top Products</h1>
                    <h1 className='text-white'>Ukay-ukay</h1>
                    <h1 className='text-white'>Sales Now</h1>
                    <h1 className='text-white'>Wishlist</h1>
                </div>
                {/*HAMBURGER ICON*/}
                <div className='text-white text-xl flex items-center md:hidden'>
                    <button onClick={displayMenu}>
                        <FaBars />
                    </button>
                </div>
                {/*HAMBURGER ICON*/}
                <div className="flex gap-1 justify-between items-center hidden md:flex">
                    <div className='gap-1 flex'>
                        <input type="text" className="border-[1px] border-slate-300 outline-none bg-gray-100 py-2 px-4 w-[400px] rounded text-slate-700 font-medium" placeholder="Search category or product" onChange={handleOnChange} onKeyPress={triggerEnter} value={query} />
                        <button className="bg-yellow-400 text-yellow-900 p-1 px-6 font-semibold border-l-[1px] border-slate-300 rounded" onClick={gotoSearch}>
                            <FaSearch />
                        </button>
                        <div className='text-2xl flex items-center text-white mx-6'>
                            <FaShoppingCart className='text-' />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default Navbar;