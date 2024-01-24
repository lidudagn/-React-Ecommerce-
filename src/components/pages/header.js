import { Link } from "react-router-dom";

const Header = () => {
    return (  <>
    <div className=" w-full text-xl font-medium flex gap-5 justify-end pr-9 pt-4 text-gray-500 bg-slate-50  pb-3 ">
        <Link className=" hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600" to='/home'>Home</Link>
        <Link className="hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600" to='/men'> Men</Link>
        <Link className="hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600" to='/men'> Women</Link>
        <Link className="hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600" to=''> kids</Link>
        <Link className="hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600" to='/contact'>contact us</Link>
      
    </div>
  
    
    </>);
}
 
export default Header;