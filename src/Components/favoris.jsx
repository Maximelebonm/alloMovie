import { useEffect, useState } from "react"
import { getdetailfav } from "../service/connexion"

const FavorisComp = ({ idMovie }) => {
    const [favoris, setFavoris] = useState({})
    const debutLien = "https://www.themoviedb.org/t/p/w1280"
    useEffect(() => {
        getdetailfav(idMovie).then(response => {

            setFavoris(response.data)
        });

    }, []);
    console.log("favoris", favoris)
    return (
        <div>
        <div className="flex flex-col justify-center p-12 m-auto w-full">
            <div className="flex flex-col justify-center m-auto ">
                <div className="flex justify-center m-auto">
                    <img src={debutLien + favoris?.poster_path} className="h-40" />
                </div>
                <div className="text-slate-50 text-center text-lg font-bold">{favoris?.title}</div>
            </div>
        </div>
        </div>
    )
}
export default FavorisComp