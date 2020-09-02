import React from 'react';

const Four = () => {
    return(
        <div id="search" className="text-center overflow-hidden h-screen my-2 flex flex-col justify-center content-center items-center m-auto">
            <h3 className="text-4xl font-bold text-gray-100 mb-10">Find what you're looking for</h3>
           
                <input type="text" className="w-1/2 px-8 py-4 mb-4 rounded-lg shadow-md" placeholder="Search for local businesses or specific goods!" value="" />
                <button className="w-1/6 py-4 px-2 bg-custom-green hover:bg-green-500 rounded-lg uppercase text-white font-bold">Search</button>
           
        </div>
    );
}

export default Four;