"use client";

const Hero = () => {

    const headingText = "Transforming mortgage origination through data-driven innovation";
    const firstParagraph = "Our mortgage origination company is committed to providing a seamless and stress-free experience for our clients. To achieve this goal, we utilize cutting-edge artificial intelligence tools at every step of the mortgage process.";
    // const firstParagraph = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
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
      // <div className="rounded-2xl bg-violet-300 justify-center mx-8 my-8 py-8">
      <div className="max-w-4xl mx-auto my-8 bg-violet-300 shadow-lg rounded-lg p-8">
        {/* first row (text +image) */}
        <div className="flex flex-row items-center text-black px-12">
          {/* text (left side) */}
          <div className="flex flex-col items-left">
            <h1 className="text-4xl font-serif font-bold text-black">
              { headingText }
            </h1>
            <p className="font-sans text-gray-600 mt-4">
              { firstParagraph }
            </p>
            <p className="font-sans text-gray-600 mt-4">
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
            <h1 className="text-4xl font-serif font-bold text-purple-800">
              24K
            </h1>
            <p className="text-bold font-sans text-gray-600 mt-2">
              Number of succesfull loan organisation through data-driven approach
            </p>
          </button>
          <button className="rounded-2xl text-black bg-white">
            <h1 className="text-4xl font-serif font-bold text-purple-800">
              80%
            </h1>
            <p className="text-bold font-sans text-gray-600 mt-2">
              Cost savings due to the implementation of AI in loanorganisation process
            </p>
          </button>
          <button className="rounded-2xl text-black bg-white">
            <h1 className="text-4xl font-serif font-bold text-purple-800">
              9/10
            </h1>
            <p className="text-bold font-sans text-gray-600 mt-2">
              Customer satisfaction score. Our users report that they feel heard, understood, and supported
            </p>
          </button>
        </div>

      </div>
    );

};
export default Hero;