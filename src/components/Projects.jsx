import React from 'react';

const projects = [
  {
    name: "Fashion Chatbot",
    description: "AI-powered chatbot that provides personalized fashion recommendations based on user preferences and current trends.",
    url: "https://github.com/jlavanya2/Glambot",
    tech: ["React", "Node.js","Express","MySQL", "OpenAI API"],
    status: "Completed"
  },
  {
    name: "Netflix Clone",
    description: "This project is a simple, responsive landing page that mimics the aesthetic and layout of the popular streaming service, Netflix. Built using only HTML and CSS, it showcases the power of these technologies to create visually appealing and user-friendly web pages.",
    url: "https://netflix-clone-website-omega.vercel.app/",
    tech: ["HTML", "CSS"],
    status: "Completed"
  },
  {
    name: "Product Store",
    description: "Welcome to the Product Store project! This is a full-stack web application designed to manage products in an online store. It features a clean, responsive frontend built with React, HTML, and CSS, and a robust backend to handle data storage and retrieval.",
    url: "https://product-store-x1r3.onrender.com/",
    tech: ["React", "APIs", "Node.js", "MongoDB"],
    status: "Completed"
  },{
    name: "Real time Chat App",
    description: " A real-time chat application that allows users to communicate instantly with each other. Built using React for the frontend and Node.js with Socket.io for real-time communication.",
    url: "#",
    tech: ["React", "Tailwind CSS", "Socket.io", "Node.js","APIs","MongoDB"],
    status: "In Progress"
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">My Projects</h1>
            <p className="py-6 text-base-content/70">
              Explore my latest work and creative solutions
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="card-title text-primary">{project.name}</h2>
                  <div className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
                    {project.status}
                  </div>
                </div>
                
                <p className="text-base-content/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="badge badge-outline badge-primary">
                      {tech}
                    </div>
                  ))}
                </div>
                
                <div className="card-actions justify-end">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-base-content/60 mb-4">More projects brewing...</p>
          <div className="loading loading-dots loading-lg text-primary"></div>
        </div>
      </div>
    </div>
  );
}
