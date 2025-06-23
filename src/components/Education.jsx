import React from 'react';

export default function Education() {
  const timeline = [ 
    { year: "2021", 
      title: "Secondary School",
       institution: "Harmony International School", 
       description: "Completed secondary education with distinction.", 
       grade: "Percentage: 80%", 
       status: "Completed" }, 
       {
         year: "2021-2023", 
         title: "Higher Secondary", 
         institution: "Harmony Public School & Jr.College",
          description: "Science stream with Mathematics, Physics, and Chemistry.", 
          grade: "72%", 
          status: "Completed" },
           { 
            year: "2023-Present",
             title: "MBA TECH In Computer Engineering",
              institution: "Narsee Monjee Institute of Management Studies (NMIMS)-Navi Mumbai", 
              description: "Currently pursuing a 5-year integrated program focusing on advanced computer science and management principles.", 
              grade: "CGPA: 3.5/4.0", 
              status: "Current" }
  ];

  const certifications = [
    {
      name: "UI/UX Intern",
      issuer: "Internpe",
      date: "2024",
      icon: "🎯"
    },
    {
      name: "General Co-Secretary of Internal Affairs",
      issuer: "Student Council",
      date: "2024-2025",
      icon: "👩🏼‍🎓"
    },
    {
      name: "Secretary",
      issuer: "Student Council",
      date: "2025-2026",
      icon: "👩🏼‍🎓"
    },
     {
      name: "Designing Team Member",
      issuer: "Network",
      date: "2024-Present",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero bg-gradient-to-r from-info/10 to-success/10 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-info">Education</h1>
            <p className="py-6 text-base-content/70">
              My academic journey and continuous learning
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 py-12">
        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Academic Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex-grow ml-8">
                    <div className="card bg-base-200 shadow-xl">
                      <div className="card-body">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="card-title text-primary">{item.title}</h3>
                            <p className="text-secondary font-semibold">{item.institution}</p>
                          </div>
                          <div className="text-right">
                            <div className={`badge ${item.status === 'current' ? 'badge-primary' : 'badge-success'}`}>
                              {item.status === 'current' ? 'Ongoing' : 'Completed'}
                            </div>
                            <p className="text-sm text-base-content/60 mt-1">{item.year}</p>
                          </div>
                        </div>
                        <p className="text-base-content/80 mb-3">{item.description}</p>
                        <div className="badge badge-outline badge-accent">{item.grade}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="absolute left-2 top-8 w-0.5 h-16 bg-primary/30 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="card-title text-primary justify-center">{cert.name}</h3>
                  <p className="text-secondary font-semibold">{cert.issuer}</p>
                  <div className="badge badge-outline badge-accent mt-2">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {/* Fun Stats Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-info">Learning Stats</h2>
          <div className="stats shadow-lg bg-base-200">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div className="stat-title">Current Year</div>
              <div className="stat-value text-primary">3rd</div>
              <div className="stat-desc">Third Year Student</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div className="stat-title">Projects</div>
              <div className="stat-value text-secondary">3+</div>
              <div className="stat-desc">Completed</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="stat-title">Current CGPA</div>
              <div className="stat-value text-accent">3.5</div>
              <div className="stat-desc">Out of 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}