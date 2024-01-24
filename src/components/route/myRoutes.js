import { Routes, Route } from "react-router-dom";
import Home from "../pages/header";
import SignUp from "../createAccount/signUp";
import HomePage from "../pages/homePage";
import ForMen from "../pages/forMen";
import ContactUsPage from "../pages/contactUs";
const MyRoutes = () => {
    return ( <>
<Routes>
<Route path="/" element={<SignUp/>} />
<Route path="/Home" Component={HomePage} />
<Route path="/signUp" Component={SignUp}/>
<Route path="/men" Component={ForMen}/>
<Route path="/contact" Component={ContactUsPage}/>
</Routes>
    {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
    </> );
}
 
export default MyRoutes;