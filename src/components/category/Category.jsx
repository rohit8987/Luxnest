import { useNavigate } from "react-router";

const category = [
   
    {
        image: 'https://i.pinimg.com/236x/ce/eb/59/ceeb594cfe7f7fcb97087dc4df1973d7.jpg',
        name: 'Earring Collection'
    },
    {
        image: 'https://i.pinimg.com/474x/be/5c/98/be5c985e3f1820d2a85a181d35ee4a3a.jpg',
        name: 'Rings'
    },
    {
        image: 'https://i.pinimg.com/236x/59/eb/f2/59ebf2390d148dcf6cc73f4ca026a9a1.jpg',
        name: 'Bangles '
    },
    {
        image: 'https://i.pinimg.com/236x/d7/7a/1b/d77a1b1721b26b86fa360be020f60ad4.jpg',
        name: 'Anklets'
    },
    {
        image: 'https://i.pinimg.com/236x/f1/ab/f2/f1abf2594381776846a6cc1cfd63a350.jpg',
        name: 'Hair Accessories'
    },
    {
        image: 'https://i.pinimg.com/236x/4a/55/80/4a55807b7bddb007210005ba94d6b705.jpg',
        name: 'Nose Pins'
    },
    {
        image: 'https://i.pinimg.com/236x/2a/e3/67/2ae36785e5311254fd8be109305a0b25.jpg',
        name: 'Customized Jewelry'
    },
    {
        image: 'https://i.pinimg.com/236x/6b/e5/45/6be54540f47480523b7c4cd5ad315dad.jpg',
        name: 'Bracelets Unisex'
    },
    {
        image: 'https://i.pinimg.com/236x/10/a3/58/10a3584a6abfdd62fff123b619c5b9b5.jpg',
        name: 'Necklaces and Sets '
    },

]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
        <div className="flex flex-col mt-5 ml-5 mr-5 ">
            <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                <div className="flex ">
                    {category.map((item, index) => {
                        return (
                            <div key={index} className="px-3 lg:px-10 ">
                                <div
                                    onClick={() => navigate(`/category/${item.name}`)}
                                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  transition-all  cursor-pointer mb-1"
                                >
                                    <div className="flex justify-center mb-12">
                                        <img
                                            src={item.image}
                                            alt="img"
                                            className="rounded-full w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <h1 className="text-sm lg:text-lg text-center font-medium title-font">
                                    {item.name}
                                </h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        <style
            dangerouslySetInnerHTML={{
                __html:
                    ".hide-scroll-bar {  -ms-overflow-style: none; scrollbar-width: none;} .hide-scroll-bar::-webkit-scrollbar { display: none; }",
            }}
        />
    </div>
    );
}

export default Category;