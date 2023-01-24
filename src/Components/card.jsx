import { Link } from "react-router-dom";
const Card =(props)=>{
    const debutLien = props.debutLien;
    const index=props.index;
    const List = props.List;
    const storage = props.storage;
    const addFav = props.addFav;
    return(
        <div className='card' key={index}>
            <div id={index} className="m-0 w-96 bg-gray-800 text-white shadow-md flex flex-row m-3">
                            <div className="flex-none w-24">
                                <img src={debutLien + List.film[index].poster_path} alt={"img" + (index)} className=" object-cover object-center h-40 w-80"/>
                            </div>
                            <div className="flex flex-col justify-center text-center w-full">
                                <div className="p-2 h-16">{List.film[index].title}</div>
                                <div className="flex flex-row justify-center p-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 border border-blue-700 border-none" name={List.film[index].title} id={List.film[index].id} onClick={addFav}> add </button>
                                    <Link to="/detail"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 border border-blue-700 border-none" id={List.film[index].id} onClick={storage}> details </button></Link>
                                </div>
                            </div>
            </div>
        </div>

    )
}
export default Card