import { Metadata } from "next";

import HeroScreen from "@screen/hero";
import TransitionEffect from "@components/TransitionEffect";

export const metadata: Metadata = {
  title: "Affan Khalid",
  description: "About Me",
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <HeroScreen />
    </>
  );
}
