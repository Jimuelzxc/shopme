import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../../../components/Card'
import Container from "../../../components/Container";

const YMAL = () => {
    const [category, setCategory] = useState("")
    const [categoryData, setCategoryData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function getCategory() {
            const category = await axios.get(`https://dummyjson.com/products/${id}?select=category`)
            if (category.status == 200) {
                setCategory(category.data.category)
            }
        }
        getCategory()
        window.scrollTo(0, 0)
    }, [id])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${category}`).then((res) => {
            if (res.status == 200) {
                setCategoryData(res.data.products)
            }
        })
            .catch((error) => { })
    }, [category])
    return (
        <Container>
            <h1 className="font-bold text-slate-800 py-3">YOU MAY ALSO LIKE</h1>
            <div className="flex flex-wrap justify-between mb-3">
                {
                    categoryData.map((data, index) => {
                        return (
                            <Card key={index} data={data} className="basis-[100%] md:basis-[32.3%] lg:basis-[29%] xl:basis-[19%]  mb-3" />
                        )
                    })
                }
            </div>
        </Container>
    );
}
export default YMAL;