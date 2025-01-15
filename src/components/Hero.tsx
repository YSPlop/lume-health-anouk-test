"use client";

const Hero = () => {

    const headingText = "Transforming mortgage origination through data-driven innovation";
    const firstParagraph = "Our mortgage origination company is committed to providing a seamless and stress-free experience for our clients. To achieve this goal, we utilize cutting-edge artificial intelligence tools at every step of the mortgage process.";
    const secondParagraph = "These tools help us to streamline the process and significantly roduce cycle time, allowing you to secure your mortgage quickly and efficiently. By leveraging advanced technology, we can offer a hassle-free experience that saves you time and effort.";

    return (
      // {YUKASH'S EXAMPLE CODE BELOW. KEPT FOR REFERENCE}
      // <div className="rounded-2xl bg-purple-400 justify-center">
      //   <div className="max-w-[90%">
      //     {/*  */}
      //     <div id="first-component" className="flex flex-row items-center">

      //       {/* Left piece */}
      //       <div>
      //         <h1 className=""> 
      //           { headingText }
      //         </h1>
      //         <p> 
      //           { headingDescription }
      //         </p>
      //       </div>

      //       {/* right piece: image */}
            
      //       <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHo3CkaH0oRY3MvrEN0xgn-x_Lsn3Lm3lVQ&s"/>

      //     </div>

      //     {/* 3 buttons */}
      //     <div>

      //     </div>
      //   </div>
      // </div>


      //Main Hero Container
      <div className="rounded-2xl bg-violet-300 justify-center mx-8 py-8">
        {/* first row (text +image) */}
        <div className="flex flex-row items-center text-black px-12">
          {/* text (left side) */}
          <div className="flex flex-col items-left">
            <h1 className="text-4xl font-serif">
              { headingText }
            </h1>
            <p className="font-sans">
              { firstParagraph }
            </p>
            <p className="font-sans">
              { secondParagraph }
            </p>
          </div>
          {/* image (right side) */}
          <div className="flex flex-col items-center relative">
            <img className="rounded-2xl relative" src="https://cdn.pixabay.com/photo/2017/01/05/08/53/man-1954300_1280.png"/>
          </div>
        </div>
        {/* second row (3 buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-12 my-6">
          <button className="rounded-2xl text-black bg-white">
            <h1 className="text-4xl font-serif">
              24K
            </h1>
            <p className="text-bold font-sans">
              Number of succesfull loan organisation through data-driven approach
            </p>
          </button>
          <button className="rounded-2xl text-black bg-white">
            <h1 className="text-4xl font-serif">
              80%
            </h1>
            <p className="text-bold font-sans">
              Cost savings due to the implementation of AI in loanorganisation process
            </p>
          </button>
          <button className="rounded-2xl text-black bg-white">
            <h1 className="text-4xl font-serif">
              9/10
            </h1>
            <p className="text-bold font-sans">
              Customer satisfaction score. Our users report that they feel heard, understood, and supported
            </p>
          </button>
        </div>

      </div>
    );

};
export default Hero;