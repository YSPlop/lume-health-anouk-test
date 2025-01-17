"use client";

const MeetTheTeam = () => {

  const meetTheTeam = "Meet the Team";
  const headingText2 = "Our Talented and Experienced Team";
  const paragraph = "At fundmate, we work hard to secure the best possible outcomes for our customers. Our experienced team cooperates to guranteee that you have a top-notch experience.";

    return (
      // Meet the Team main container
      <div className="max-w-4xl flex flex-col lg:flex-row items-center mx-auto my-8 p-8">
        
        {/* Left side with the 2 practitioners */}
        <div className="flex flex-row gap-6">

          {/* Team Member #1 */}
          {/* <div className="relative rounded-full overflow-hidden bg-green-100 w-48 h-48 flex items-center justify-center"> */}
          <div className="relative overflow-hidden bg-green-100 w-48 h-100 flex items-center justify-center shadow-2xl border-2 border-green-500 transform-transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:border-2 hover:shadow-green-500">
            <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png"/>
            <div className="absolute bottom-0 left-0 w-full bg-green-100 text-black-600 text-center py-6 px-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
              {/* Card Content */}
              <h3>Dr. Han Chen</h3>
            </div>
          </div>


          {/* Team Member #2 */}
          <div className="relative rounded-full overflow-hidden bg-yellow-100 w-48 h-100 flex items-center justify-center shadow-2xl border-2 border-yellow-500 transform-transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:border-2 hover:shadow-yellow-500">
            <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/01/31/22/32/cartoon-2027771_1280.png"/>
            <div className="absolute bottom-0 w-full bg-white bg-white font-bold text-center text-grey-600 justify-center">
              {/* Card Content */}
              <h3>Dr. Nat Chen</h3>
            </div>
          </div> 
        </div>

        {/* Right side with the text */}
        <div className="text-center lg:text-left">
          <h6 className="font-sans text-purple-300 font-bold mt-4">
            {meetTheTeam}
          </h6>
          <h1 className="text-4xl font-serif font-bold text-neutral-700">
            { headingText2 }
          </h1>
          <p className="font-sans text-gray-600 mt-4">
            { paragraph }
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition">
            Meet the Team
          </button>
        </div>
      </div>

    );
    //YouTube link for styling the doctor image profiles with hover etc --> https://www.youtube.com/watch?v=4cSANAiS2Kc
};
export default MeetTheTeam;