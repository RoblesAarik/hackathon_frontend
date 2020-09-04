import React from 'react';
import Listing from './Listing';
import DarkButton from '../Layout/DarkButton';
import GreenButton from '../Layout/GreenButton';
import flowerDelivery from '../../Assets/img-09.jpg';
import cafe from '../../Assets/img-10.jpg';

const Businesses = () => {
    // Make an object of all the businesses here or go on MongoDB and create it.
    return(
        <div className="mx-auto mb-20">
           <section id="businesses-first-section"
                    className="lg:h-xs shadow-xl bg-green-100 mb-20 flex flex-col lg:flex-row">

                <div className="container-sm">
                    <img className="lg:h-xs object-right object-cover" src={cafe} alt="man pouring creamer into a cup of coffee" />
                </div>

                <div id="businesses-second-col"
                     className="bg-gray-800 text-gray-100 w-full h-full flex flex-col justify-center content-center m-auto px-8 pt-8">                        
                    <h2 className="text-2xl font-bold">Support Black-owned Shops!</h2>
                    <p className="text-lg md:w-5/6 my-4">Order from your friendly neighborhood Black-owned shop-- with FREE delivery through 2020!</p>
                    <GreenButton text="Shop now!" />
                </div>

                <div id="businesses-third-col"
                     className="text-gray-800 bg-red-300 text-white flex flex-col justify-center content-center h-auto pt-8 px-8">
                    <div id="third-col-text">
                        <h2 className="text-2xl font-bold">New Shops!</h2>
                        <p className="text-lg">Give these newly listed shops a warm welcome!</p>
                            <DarkButton text="Discover!" />
                    </div>
                </div>
                <div className="container-sm">
                        <img className="lg:h-xs object-right object-cover" src={flowerDelivery} alt="two women delivering flowers" />
                    </div>
           </section>

           <section className="flex flex-col bg-white py-20 shadow-xl">     
                <div>
                    <h3 className="font-bold text-4xl lg:ml-16 ml-8">Offers Near You</h3>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly mx-auto w-5/6">
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1598888831741-cb535295b013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A pile of old comic books"
                        businessName="Comic &amp; Figure Addicts"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={777}
                        />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        altTxt="A pile of tasty croissants"
                        businessName="Crumble &amp; Flake Patisserie"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={526}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A woman making jewelry"
                        businessName="Raven's Nest Treasure"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={972}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1577199001468-44c049e7603f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A team of construction workers"
                        businessName="The Workwear Place"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={321}
                    />
                </div>
            </section>
        </div>
    );
}
export default Businesses;