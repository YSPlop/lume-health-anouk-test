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
      <div className="rounded-2xl bg-violet-300 justify-center padding-2rem">
        {/* first row (text +image) */}
        <div className="flex flex-row items-center text-black">
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
          <div>
            <img className="rounded-2xl" src="https://cdn.pixabay.com/photo/2023/01/05/22/41/ai-generated-7700040_1280.png"/>
          </div>
        </div>
        {/* second row (3 buttons) */}
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>

      </div>
    );

};
export default Hero;