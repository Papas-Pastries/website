import React from "react";
import HeroSection from "../components/HeroSection";
import ContactInfo from "../components/ContactInfo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactInfo showMap={false} />
    </>
  );
}