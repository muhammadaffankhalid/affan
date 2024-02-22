"use client";
import Image from "next/image";
import "./page.css";
import Quote from "./quote";
export default function Home() {
  const handleonclick = () => {
    window.location.href = `mailto: muhammadaffankhalid4@gmail.com.`
  };
  return (
    <div className="root">
      <div className="container">
        <div className="cup">
          <div className="hero">
            <div className="intro">
              {" "}
              Affan is not a Web Designer and also not a back-end Enigneer
            </div>
            <div className="desc">
              He crafts sloppy designs and writes bad code with no comments.
            </div>
            <div className="button">
              <button onClick={handleonclick}>Contact Me</button>
            </div>
          </div>
          <div className="img">
            <Image
              src="/cat.png"
              alt="Affan"
              width={400}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <Quote />
    </div>
  );
}
