import "./skill.css";
export default function skills() {
  const skills = [
    {
      name: "Languages",
      list: ["python", "javascript", "java", "c++", "c#", "html", "css"],
    },
    {
      name: "Frameworks",
      list: ["react", "django", "flask", "express"],
    },
    {
      name: "Databases",
      list: ["postgresql", "mysql", "mongodb", "NoSQL"],
    },
    {
      name: "Tools",
      list: ["git", "docker", "kubernetes", "jenkins"],
    },
  ];

  return (
    <div className="container">
      <div className="Incontainer">
        <div className="cols-span-1 skill">/skills</div>
        <div className="cols-span-1 skill-container ">
          <div className="grid grid-cols-3 grid-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-block">
                <div className="skill-block-name">{skill.name}</div>
                <ul className="skill-list">
                  {skill.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
