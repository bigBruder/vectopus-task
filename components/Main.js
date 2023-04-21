'use client';
import "tailwindcss/tailwind.css";
import { GoogleFonts } from "next-google-fonts";
import { DreamIlustration } from "./DreamIlustration";
import { SearchIcons } from "./SearchIcons";
import { CustomDesign } from "./CustomDesign";
import { IconsBlock } from "./IconsBlock";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { getImg } from "@/pages/api/hello";
import { useState } from "react";

export const Main = () => {

  return (
    <div>
    <Header />
    <DreamIlustration />
    <SearchIcons />
    <CustomDesign />
    <IconsBlock />
    <Footer />
    </div>
  )
}