import Link from "next/link";
import { Header } from "@/app/components/Landing/Header";
import { HeroSection } from "@/app/components/Landing/HeroSection";
import Screen from "@/app/components/Landing/Screen";

export default function Landing() {
  return (
    <>
      <Header />
      <HeroSection />
      <Screen />
    </>
  );
}
