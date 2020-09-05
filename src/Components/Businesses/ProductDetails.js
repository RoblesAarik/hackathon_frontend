import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({ toggleModal, activeModal }) => {
    return(
        <>
        {activeModal &&
        <div className="absolute z-10 w-screen h-full overflow-hidden  flex flex-col bg-opacity-50 bg-gray-900">
            <div className="m-auto lg:w-1/3 w-5/6 bg-white rounded py-10 px-6 shadow">
                <div> 
                    <img className="object-cover shadow-md rounded-t" src="https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1184&q=80" alt="Na na na na na na na na BATDUCK" />
                </div>
                <div>
                <h3 className="text-4xl font-bold mt-4">
                    Batduck
                </h3>
                <p className="text-2xl">$20</p>
                </div>
                <div className="mt-6">
                    <p className="text-lg">Look at this cute af Batduck. Official DC merch. Super rare. Trust me.</p>
                </div>
                <div className="mt-6">
                    <Link to="/cart">
                        <button className="w-full py-3 px-4 bg-custom-green hover:bg-green-700 rounded uppercase text-white font-bold">Add to Bag</button>
                    </Link>
                    <p onClick={ toggleModal } className="cursor-pointer text-center mt-4 uppercase hover:font-bold">Close</p>
                </div>
            </div>

        </div>
        }
        </>
    )
}

export default ProductDetails;