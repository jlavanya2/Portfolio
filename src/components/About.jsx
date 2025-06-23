import React from 'react';

export default function About() {
  const skills = [
    { name: "Html", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS", level: 90 },
    { name: "UI/UX Design", level: 80 },
    { name: "React", level: 90 },
    { name: "APIs", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 90 },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero bg-gradient-to-r from-secondary/10 to-accent/10 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-secondary">About Me</h1>
            <p className="py-6 text-base-content/70">
Enthusiastic developer igniting compelling digital adventures!            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-primary text-2xl mb-4">👩‍💻 Hello, I'm a Developer!</h2>
                <p className="text-lg text-base-content/80 leading-relaxed mb-6">
                  I am a skilled web developer with expertise in essential technologies for modern web applications, including HTML, CSS, and JavaScript. I create dynamic user interfaces and enhance user experiences using frameworks like React and jQuery.
My solid understanding of APIs ensures seamless communication between frontend and backend systems, while my proficiency in Python and SQL enables effective backend development and database management. I also work with Wagtail, delivering tailored solutions.
I have successfully completed various projects that showcase my ability to turn client requirements into functional and visually appealing websites. My passion for coding drives me to continuously improve my skills and stay updated with industry trends.
                </p>
                
                <div className="divider"></div>
                
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-primary badge-lg">Creative</div>
                  <div className="badge badge-secondary badge-lg">Problem Solver</div>
                  <div className="badge badge-accent badge-lg">Team Player</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-secondary text-xl mb-6">Skills & Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-base-content/60">{skill.level}%</span>
                      </div>
                      <progress 
                        className="progress progress-primary w-full" 
                        value={skill.level} 
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="stats shadow-lg bg-base-200">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="stat-title">Projects</div>
              <div className="stat-value text-primary">3+</div>
              <div className="stat-desc">Completed</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="stat-title">Experience</div>
              <div className="stat-value text-secondary">1</div>
              <div className="stat-desc">Years</div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}