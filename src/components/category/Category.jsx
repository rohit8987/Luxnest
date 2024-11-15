import { useNavigate } from "react-router";

const category = [
    {
        image: '',
        name: 'Antique'
    },
    {
        image: '',
        name: 'Earring Collection'
    },
    {
        image: '',
        name: 'Mangalsutra'
    },
    {
        image: '',
        name: 'Nakshatra CZ'
    },
    {
        image: '',
        name: 'Kundan'
    },
    {
        image: '',
        name: 'Bridal'
    },
    {
        image: '',
        name: 'Enamel'
    },
    {
        image: '',
        name: 'Tribal Collection'
    }
]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    <div className="flex ">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 "  >
                                        <div className="flex justify-center mb-12">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none; scrollbar-width: none;} .hide-scroll-bar::-webkit-scrollbar { display: none;" }} />


        </div>
    );
}

export default Category;