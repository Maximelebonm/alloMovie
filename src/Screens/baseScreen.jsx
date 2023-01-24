import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Card from "../Components/card";


const BaseScreen =()=> {
    return(
        <>
            <div className="main bg-slate-700">
            <Header/>
            <Outlet/>
            </div>
        </>
    )

}
export default BaseScreen;
