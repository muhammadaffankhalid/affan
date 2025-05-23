import { Metadata } from "next";

import CareerScreen from "@screen/career";
import TransitionEffect from "@components/TransitionEffect";

export const metadata: Metadata = {
  title: "Affan Khalid - Career",
  description: "Career",
};

const Career = () => {
  return (
    <>
      <TransitionEffect />
      <CareerScreen />
    </>
  );
};

export default Career;
