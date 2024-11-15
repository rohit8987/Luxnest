import { useContext, useEffect, useState } from "react";
import myContext from "../../context/MyContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import { fireDB } from "../../Firebase/FirebaseConfig";

import Loader from "../../components/loader/Loader";

const categoryList = [
    { name: 'Fashion' },
    { name: 'Shirt' },
    { name: 'Jacket' },
    { name: 'Mobile' },
    { name: 'Laptop' },
    { name: 'Shoes' },
    { name: 'Home' },
    { name: 'Books' }
];

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, } = context;
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        quantity: 1,
        date: new Date().toLocaleString(
            "en-US",
            { month: "short", day: "2-digit", year: "numeric" }
        )
    });

    const getSingleProductFunction = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "product", id))
          
            const product = productTemp.data();
                console.log(product, 'data')
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                quantity : product?.quantity,
                time: product?.time,
                date: product?.date
            })
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

// without firebase 

    const updateProduct = async () => {
      setLoading(true);
      try{
        const productRef = doc(fireDB, "product", id);
        await updateDoc(productRef, product);
        navigate('/admin-dashboard');
    } catch (error){
        console.log(error)
        setLoading(false)
        // toast.error("Add product Failed")
    }

    //   console.log("Navigating without Firebase update");
    //   navigate('/admin-dashboard');
    //   setLoading(false);
  };





    useEffect(() => {
        getSingleProductFunction();
    }, []);

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-pink-500'>
                            Update Product
                        </h2>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                            placeholder='Product Title'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            placeholder='Product Price'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                            placeholder='Product Image Url'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => setProduct({ ...product, category: e.target.value })}
                            className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => (
                                <option key={index} value={value.name}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            name="description"
                            placeholder="Product Description"
                            rows="5"
                            className="w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300"
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={updateProduct}
                            type='button'
                            className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md'>
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductPage;
