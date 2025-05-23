import { Metadata } from "next";

import ContactScreen from "@screen/contact";
import TransitionEffect from "@components/TransitionEffect";

export const metadata: Metadata = {
  title: `Affan Khalid - Contact`,
  description: "Contact Me",
};

const Contact = () => {
  return (
    <>
      <TransitionEffect />
      <ContactScreen />
    </>
  );
};

export default Contact;
