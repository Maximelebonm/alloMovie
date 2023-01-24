import "../css/home.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getList } from "../service/connexion";
import Card from '../Components/card';

let favTab = [];
const HomeScreen = () => {
    const [List, setGetList] = useState({ film: [] });

    const debutLien = "https://www.themoviedb.org/t/p/w1280"

    useEffect(() => {
        console.log("testUseffect");
        const fetchData = async () => {
            let filmList = await getList();
            let filmListResults = filmList.data.results

            console.log("filmListResult", filmListResults)

            setGetList({
                film: filmList.data.results,   
            })
        }
        fetchData();
    }, []);

    console.log("film: ", List.film[1])
    const storage =()=>{
        // sessionStorage.clear()
        const detailStorage = document.activeElement.id
        sessionStorage.setItem("detailStorage", detailStorage)
        
    }
    
    const addFav =() =>{
        let favStorage = document.activeElement.name
        let favStorageId = document.activeElement.id
        let exist = 0
        
        for(let i=0; i<favTab.length; i++){
            if(favStorage==favTab[i]){
                console.log("compare : ",favStorage, favTab[i])
                exist = 1
            }
        }
        if(exist!=1){
            favTab.push([favStorageId])
            localStorage.setItem("FavStorage", favTab)
            console.log("ifExist" , exist)
        }   
        console.log("EndAddFav : ",favStorage)
    }

    return (
        <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 p-3">
            {List.film?.map((obj, index) => {
                return (
                    <div key={index}>
                    <Card index={index} List={List} debutLien={debutLien} addFav={addFav} storage={storage}/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default HomeScreen