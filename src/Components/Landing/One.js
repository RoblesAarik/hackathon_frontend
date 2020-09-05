import React from 'react';
import { Link } from 'react-router-dom';
import DarkButton from '../Layout/DarkButton';
import bike from '../../Assets/img-04.jpg';

const One = () => {
    return(
        <div className="box-border m-auto bg-green-100 flex flex-col lg:flex-row">

            <div className="bg-custom-green shadow-lg text-left 
                            p-10 lg:w-1/3
                            flex flex-col">
                <div className="m-auto">
                    <section>
                        <h2 className="font-bold uppercase text-gray-100 text-3xl ">
                            Staying strong together
                        </h2>
                    </section>
                
                    <div className="mt-4 mb-6 border-solid border-b-4 border-gray-900 w-1/3"></div>
                
                    <section className="mb-4 w-5/6">
                        <p className="text-lg text-gray-100">
                            Small businesses are counting on all of us-- let's show
                            how much they mean to our communities!
                        </p>
                    </section>
                    <section>
                        <Link to="/businesses">
                            <DarkButton text="Explore Businesses" />
                        </Link>
                    </section>
                </div>
                
            </div>
            {/* Image */}
            <div className="flex lg:w-2/3 lg:h-auto h-xs">
                <img className="object-cover object-left" src={ bike } alt="A man riding a bike through a busy street" />
            </div>
        </div>
    );
}

export default One;