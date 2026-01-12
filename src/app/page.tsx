import Link from "next/link";
import { Header } from "@/app/components/Landing/Header";
import { HeroSection } from "@/app/components/Landing/HeroSection";
import Screen from "@/app/components/Landing/Screen";
// Make sure to import your CSS file here if you haven't already
// import "./landing-3d.css"; 

export default function Landing() {
  return (
    <>
      <Header />
      <HeroSection />
      
      {/* 1. The Scene: Creates the depth/camera */}
      <div className="linear-scene">
        
        {/* 2. The 3D Wrapper: Applies the tilt */}
        <div className="screen-3d">
          <Screen />
        </div>
        
      </div>
    </>
  );
}
