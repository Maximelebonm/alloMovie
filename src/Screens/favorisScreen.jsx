import { useState, useEffect } from "react";
import FavorisComp from "../Components/favoris";
import { getdetail, getdetailfav } from "../service/connexion";

const FavorisScreen = () => {
    let favget = localStorage.getItem('FavStorage');
    let favTab = []
    if (favget) {
        favTab = favget.split(',');
    }
    console.log(favTab)

    const debutLien = "https://www.themoviedb.org/t/p/w1280"

    return (
        <div>
            <div className="text-slate-50 text-center text-2xl font-bold">
                Favoris
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-3">
                {favTab.map(idMovie => (
                    <FavorisComp key={idMovie} idMovie={idMovie} />
                ))
                }
            </div>
        </div>

    )

}
export default FavorisScreen