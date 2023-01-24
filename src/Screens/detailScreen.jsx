import { getdetail } from "../service/connexion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DetailScreen =()=>{
    const [detail, setDetail] = useState({ detail: [] })

    const debutLien = "https://www.themoviedb.org/t/p/w1280"
    
    useEffect(() => {     
        const fetchDetail = async () => {
            let detail = await getdetail();
            console.log("detail fetch",detail)
            setDetail({
                detail: detail.data,   
            })
        }
        fetchDetail()

    }, []);
    
    console.log("detail",detail.detail.poster_path)
    return(
        <div className="min-h-fit flex justify-center flex-col p-12 m-auto w-1/2">
            <img src={debutLien + detail.detail.poster_path} alt={"img" + (detail.detail.id)} class=" object-cover object-center w-80"/>
            <Link to="/favoris"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" > favoris </button></Link>
        </div>
    )
}
export default DetailScreen