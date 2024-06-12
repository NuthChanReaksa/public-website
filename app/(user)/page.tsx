
import React from "react";
import HomeBanner from "@/components/banner/HomeBanner";
import HeroSection from "@/components/HeroSection";
import HomeBanner2 from "@/components/banner/HomeBanner2";
import ProgramComponent from "@/components/ProgramComponent";
import EventComponent from "@/components/EventComponent";
import BannerTest from "@/components/banner/BannerTest";


export default function Home() {
  return (
      <main className={"bg-whiteSmoke"}>

          <HomeBanner/>
          <HeroSection/>
          <HomeBanner2/>
          <ProgramComponent/>
          <EventComponent/>
      </main>
  );
}
