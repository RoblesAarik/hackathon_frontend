import React, {useState} from 'react';
import Product from './Product';
import ProductDetails from './ProductDetails';

const Details = () => {
    const [activeModal, setActiveModal] = useState(false);
    let toggleModal = () => {
        setActiveModal(!activeModal)
        console.log(activeModal);
    };

    return(

        <div className="relative overflow-hidden w-full m-auto h-full
                        flex flex-col justify-center items-center content-center">
            
            <ProductDetails toggleModal= { toggleModal } activeModal={ activeModal } />              
            
            <div id="details-header"
                 className="text-white h-64 w-screen mb-16 py-48 text-center flex flex-col justify-center items-center alself-center">
                    <h2 className="px-4 mb-4 bg-gray-800 font-bold text-4xl uppercase">
                        Comic &amp; Figure Addicts
                    </h2>
                    <p className="text-xl mb-2 p-2 bg-gray-800 font-bold">
                        <span className="rounded mr-2 px-2 bg-custom-green font-bold">
                            Open
                        </span>
                        11AM - 8PM
                    </p>
                    <p className="text-xl px-2 bg-gray-800 font-bold">
                        $0 Delivery Fee  
                    </p>
                    <p className="text-lg mt-2 px-2 bg-gray-800">
                        Arrives in 5-16 min
                    </p>
            </div>
            <div className="w-5/6 min-w-0 mx-auto px-10 pt-10 mb-40">
                <div className="w-full flex flex-col">
                    {/*  */}
                    <div className="w-full">
                        <h3 className="font-bold text-4xl">New Products!</h3>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                        
                        <Product
                            thumbnail="https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1184&q=80"
                            altTxt="A rubber duckie Batman"
                            productName="Batduck"
                            price={ 20 }
                            toggleModal={ toggleModal }
                        />

                    </div>
                </div>
            </div>
        
        </div>

    )
}

export default Details;