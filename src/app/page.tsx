import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import ClientsWeSee from "@/components/ClientsWeSee";
import Image from "next/image";
import Styles from "@/styles/Hero.module.css";

export default function Home() {
  return (
    <div className="bg-white">
        {/* Hero - #1 Component */}
        <Hero />
        {/* MeetTheTeam - #2 Component */}
        <MeetTheTeam />
        {/* OurServices - #3 Component */}
        <OurServices />
        {/* ClientsWeSee - #4 Component */} 
        <ClientsWeSee />
    </div>
    
  );
}     
