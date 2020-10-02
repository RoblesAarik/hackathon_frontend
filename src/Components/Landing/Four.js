import React from 'react';

const Four = () => {
    return(
        <div id="search" className="text-center overflow-hidden my-2 py-10 md:py-40 flex flex-col justify-center content-center items-center m-auto">
            <h3 className="text-4xl font-bold text-gray-300 mb-10">Find what you're looking for</h3>
           
                <input type="text" className="lg:w-1/2 w-5/6 px-8 py-4 mb-4 rounded-lg shadow-md" placeholder="Search for local businesses or specific goods!" value="" />
                <button className="w-40 py-4 px-2 bg-gray-800 hover:bg-gray-900 rounded-lg uppercase text-white font-bold">Search</button>
           
        </div>
    );
}

export default Four;