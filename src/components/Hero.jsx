import React from "react"
const Hero = () => {

    return (
        <div className="w-full h-[90vh]">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="/" 
            className="w-full h-full object-cover"
            />
       
       <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[60%] w-full md:-[50%] max-w-[600px] h-full flex-col text-white p-4">
            <h2 className="font-bold text-2xl">
                Find your special trip
            </h2>
            <p className="py-2 text-[90%]">
            The results are in! Explore this year's expert-approved list of must-see destinations, places, and unforgettable experiences guaranteed to inspire.
            </p>
        </div>
       </div>
        </div>
    )
}
export default Hero