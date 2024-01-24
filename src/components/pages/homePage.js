import Home from "./header";
import img1 from '../images/bag1.png'
import img2 from '../images/bag2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HomePage = () => {
    return ( <>
<div className=" sticky w-full top-0 ">

<Home/>
</div>
   <div className="">
   <div className=" justify-center text-emerald-600 w-full  flex  font-serif">

<div className=" bg-slate-100 text-4xl font-bold p-24 pt-40 w-4/6"><p>Don't cry! buy a bag  </p>
<p>and get over it?</p>

<p className="text-gray-500 font-normal text-sm mt-9 pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus molestias earum, sequi architecto veniam debitis sapiente esse excepturi quasi accusantium sint hic error nemo? Quisquam quae at id quod!</p>

<div className=" flex justify-left mt-7 text-base "><button className="text-emerald-600 px-4 border border-emerald-600  roun">Read more</button></div>

</div>
<div className=" w-2/6 bg-emerald-600">

</div>
<div class="absolute z-10 left-1/2    ">
   <img className=" w-96 " src={img1} /> 
    
    </div> 
   
</div>
<div className="  mt-40 flex    ">
<div className=" w-1/2 flex justify-end">
    <img className=" w-96 " src={img2}/>
</div>
<div className="pl-10 w-1/2 pr-14 font-medium text-4xl text-emerald-600 font-serif pt-36 ">
    <p className="" > we create the product </p><p>you tell as you wish</p>  <p>existed</p>
    <p className=" text-gray-500 pt-5 w-64 font-normal text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio pariatur ex in dignissimos ullam nemo suscipit repellat velit provident fugit, nihil animi, itaque non quae dolore aperiam. Impedit, fugit delectus?</p>
</div>
</div>

<div>
    <p className="flex justify-center mt-20 text-emerald-600 font-sans text-4xl font-semibold">our available product</p>
    <p className=" text-gray-500 flex justify-center px-48 pt-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem esse repellat, laudantium doloremque qui natus officia harum porro fugiat molestiae dicta tenetur earum voluptate temporibus quibusdam eligendi est fuga?</p>

    <div className="flex pt-6 px-20 gap-20">
        <div className=" shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 w-4/12 bg-slate-100 rounded-lg  hover:w-3.5/12">
<img className=" object-cover mb-4 w-full h-72 " src={img3}/>
<div className="">
  <p className="flex justify-center text-emerald-600 font-serif">bag for women</p>
  <p className="pt-2 text-gray-500 pb-2 pl-5 text-sm">Lorem ipsum dolor Lorem ipsum dolor  sit amet consectetur adipisicing elit sit amet.</p>
  <div className="flex justify-center">
    <button className="mb-5 border border-emerald-600 hover:bgemerald-700 text-emerald-600 font-semibold py-1 mt-3 px-3 rounded">
      check for women
    </button>
  </div>
</div>  </div>
<div className=" shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 w-4/12 bg-slate-100 rounded-lg  hover:w-3.5/12">
<img className=" object-cover mb-4 w-full h-72 " src={img4}/>
<div className="">
  <p className="flex justify-center text-emerald-600 font-serif">bag for women</p>
  <p className="pt-2 text-gray-500 pb-2 pl-5 text-sm">Lorem ipsum dolor Lorem ipsum dolor  sit amet consectetur adipisicing elit sit amet.</p>
  <div className="flex justify-center">
    <button className="mb-5 border border-emerald-600 hover:bgemerald-700 text-emerald-600 font-semibold py-1 mt-3 px-3 rounded">
      check for men
    </button>
  </div>
</div>  </div>
<div className=" shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 w-4/12 bg-slate-100 rounded-lg  hover:w-3.5/12">
<img className=" object-cover mb-4 w-full h-72 " src={img5}/>
<div className="">
  <p className="flex justify-center text-emerald-600 font-serif">bag for women</p>
  <p className="pt-2 text-gray-500 pb-2 pl-5 text-sm">Lorem ipsum dolor Lorem ipsum dolor  sit amet consectetur adipisicing elit sit amet.</p>
  <div className="flex justify-center">
    <button className="mb-5 border border-emerald-600 hover:bgemerald-700 text-emerald-600 font-semibold py-1 mt-3 px-3 rounded">
      check for kids
    </button>
  </div>
</div>  </div> 
     
      
    </div>
   
</div>



<div className=" mt-40 bg-slate-100 flex px-24 ">
<div className="w-1/2 pt-28 ">
    <p className=" text-emerald-600 font-serif text-3xl font-semibold">The best bag for your best time</p>
    <p className="text-sm text-gray-500 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea rerum alias rem sequi ex exercitationem dolorum provident. Ut harum neque pariatur esse in nobis unde corrupti at, aliquid totam.</p>
</div>
<div className="w-1/2 border-4 border-emerald-600 m-12">
    <img className=" object-cover  h-60  w-full" src={img3 }/>
</div>
</div>


<div className=" mt-44">

    <p className=" pb-2 text-emerald-600 font-serif text-3xl font-semibold flex justify-center">What our customers said </p>
    <p className="  px-28 pb-16 text-gray-500 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, architecto dolorum nostrum hic dolor sit amet consectetur adipisicing elit. Nihil, architecto dolorum nostrum hic  totam porro possimus delectus, magnam distinctio, harum excepturi odio aperiam? Quas cupiditate quod saepe magnam aspernatur in!</p>
    <div className="flex items-center mx-10  justify-center">
      <div className="bg-slate-100 w-1/2 mx-4  rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-emerald-600">Company 1</div>
          <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero aspernatur ex temporibus perferendis eum commodi necessitatibus quibusdam dicta. Quo quibusdam magni laborum sint voluptatum et consequatur rerum repudiandae similique!
          </p>
        </div>
      </div>
      <div className="bg-slate-100 w-1/2 mx-4 rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-emerald-600">Company 2</div>
          <p className="text-gray-700 text-base">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at temporibus, quidem aspernatur ad recusandae consectetur dolore autem neque non magnam quam omnis ab quo numquam porro facilis tempore ullam?
          </p>
        </div>
      </div>
    </div>
</div>
<footer className=" bg-emerald-600 text-white  py-8 mt-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
         
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2">
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p>123 Main Street</p>
              <p>City, State, Country</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2">
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p>123 Main Street</p>
              <p>City, State, Country</p>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <div className="flex justify-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 mx-2">
                <FontAwesomeIcon icon={faFacebookSquare} className="text-lg" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 mx-2">
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 mx-2">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
  
   </div>
   
    </> );
}
 
export default HomePage;