import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Brocéliande Immobilier',
      description: 'SiteWeb réaliser pour une Agence Immobilière, clé en main et moderne.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/0xAbdel/Broc-liande-Immobilier/tree/main',
      demo: 'http://localhost:8888/Projet%20BI/',
    },
    {
      title: 'AI Chatbot',
      description: 'An intelligent chatbot powered by natural language processing and machine learning.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio',
      description: 'Ce site web, qui présente mes compétences et mes projets.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Mes Projects d'études</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}> = ({ title, description, image, github, demo }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <GithubIcon size={20} />
          <span className="ml-1">GitHub</span>
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:text-green-800"
        >
          <ExternalLinkIcon size={20} />
          <span className="ml-1">Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export default Projects;