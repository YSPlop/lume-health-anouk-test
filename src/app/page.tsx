import Hero from "@/components/Hero";
import Image from "next/image";
import Styles from "@/styles/Hero.module.css";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="bg-red-300">
        {/* Hero Component */}
        <Hero />
      </div>
      <div className="bg-blue-300">
        {/* WhyUs Component */}
        <WhyUs />
        {/* <div className="flex flex-col items-center">
          <h1 className="text-4xl font-serif">Why Us</h1>
          <p className="font-sans">We are the best</p>
          <p className="font-sans">We are the best</p>
          <p className="font-sans">We are the best</p>
        </div> */}
      </div>
    </div>
    
  );
}     
