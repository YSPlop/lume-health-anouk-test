import Hero from "@/components/Hero";
import Image from "next/image";
import Styles from "@/styles/Hero.module.css";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <div className="bg-white">
        {/* Hero - #1 Component */}
        <Hero />
        {/* MeetTheTeam - #2 Component */}
        <MeetTheTeam />
    </div>
    
  );
}     
