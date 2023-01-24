import { Link } from "react-router-dom"

const Header = () => {
    return (
        <ul className="flex bg-orange-500 p-2 h-16 items-center font-bold">
             <li className="mr-6">
                <Link className="p-2 text-white hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800" to="/">Allomovie</Link>
             </li>
             <li className="mr-6">
                <Link className="text-white hover:text-blue-800" to="/favoris">favoris</Link>
             </li>

        </ul>
  
    )
}
export default Header