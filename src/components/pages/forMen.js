import Header from "./header";
import img1 from '../images/bag1.png'
const ForMen = () => {
    return (<>
    <Header/>
<div className="">
<h1 className=" text-emerald-600 font-bold text-3xl flex justify-center">Best Bags For Men</h1>
 <div className=" grid grid-cols-3 gap-4 px-14 mt-14">
 <div className="shadow-xl bg-white ">
  <div className="flex justify-center">
    <img className="w-3/4  object-cover h-80" src={img1} alt="kkk" />
  </div>
  <p className="block pl-9 font-semibold">Bag 1 for men</p>
  
  <div className="flex justify-around  pb-7 ">
  <p className="block  font-thin">price : <span>200$</span></p>
  <button className="px-3 rounded-md py-1 bg-emerald-600 text-white">Add to cart</button>
  </div>
</div>
  
 </div>
</div>
    </>  );
}
 
export default ForMen;