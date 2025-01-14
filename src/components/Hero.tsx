"use client";

const Hero = () => {

    const headingText = "Transforming mortgage origination through data-driven innovation";
    const headingDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    return (
      <div className="rounded-2xl bg-purple-400 justify-center">
        <div className="max-w-[90%">
          {/*  */}
          <div id="first-component" className="flex flex-row items-center">

            {/* Left piece */}
            <div>
              <h1 className=""> 
                { headingText }
              </h1>
              <p> 
                { headingDescription }
              </p>
            </div>

            {/* right piece: image */}
            
            <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHo3CkaH0oRY3MvrEN0xgn-x_Lsn3Lm3lVQ&s"/>

          </div>

          {/* 3 buttons */}
          <div>

          </div>
        </div>
      </div>
    );

};
export default Hero;