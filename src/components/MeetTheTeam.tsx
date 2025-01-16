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
          <div className="relative rounded-full overflow-hidden bg-yellow-100 w-48 h-48 flex items-center justify-center">
            <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/01/05/08/53/man-1954300_1280.png"/>
          </div>
          {/* Team Member #2 */}
          <div className="relative rounded-full overflow-hidden bg-yellow-100 w-48 h-48 flex items-center justify-center">
            <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/01/05/08/53/man-1954300_1280.png"/>
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

};
export default MeetTheTeam;