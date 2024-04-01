import "./about.css";

export default function AboutPage() {
  return (
    <div className="container">
      <div className="grid grid-rows-2 gap-4">
        <div className="about flex-grow-0">/about</div>
        <div className="about-container flex-grow">
          <img src="/cat2.png" alt="affan" className="img" />
          <p>
            I’m a full stack developer based in London, United Kingdom. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
            <br /> <br /> Transforming my creativity and knowledge into a
            websites has been my passion for over a year. I have been helping
            various clients to establish their presence online. I always strive
            to learn about the newest technologies and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}
