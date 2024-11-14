import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/HomePage"
import NoPage from "./pages/home/noPage/NoPage"
import ProductInfo from "./pages/productInfo/ProductInfo"
import ScrollTop from "./components/scrollTop/ScrollTop"
import CartPage from "./pages/Cart/CartPage"
import AllProduct from "./pages/allProduct/AllProduct"
import Signup from "./pages/registration/Signup"
import Login from "./pages/registration/Login"
import UserDashboard from "./pages/user/UserDashboard"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AddProductPage from "./pages/admin/AddProductPage"
import UpdateProductPage from "./pages/admin/UpdateProductPage"
import MyState from "./context/MyState"
import { Toaster } from "react-hot-toast"
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser"
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin"
// import Category from "./components/category/Category"
import CategoryPage from "./pages/category/CategoryPage"


function App() {
 

  return (
    <div>
     
      <MyState>
      <BrowserRouter>
      <ScrollTop/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/*" element= {<NoPage/>}/>
          <Route path="/productinfo/:id" element= {<ProductInfo/>}/>
          <Route  path="/cart" element={<CartPage/>}/>
          <Route path="/allproduct" element = {<AllProduct/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/category/:categoryname" element = {<CategoryPage/>}/>
         
          <Route path="/user-dashboard" element ={
            <ProtectedRouteForUser>
              <UserDashboard/>
            </ProtectedRouteForUser>
          }/>
          <Route path="/admin-dashboard" element ={
            <ProtectedRouteForAdmin>
               <AdminDashboard/>
            </ProtectedRouteForAdmin>
          }/>
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage/>
            </ProtectedRouteForAdmin>
          }/>
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage/>
            </ProtectedRouteForAdmin>
          }/>
        </Routes>
        <Toaster/>
      </BrowserRouter>
      </MyState>
    </div>
  )
}

export default App
