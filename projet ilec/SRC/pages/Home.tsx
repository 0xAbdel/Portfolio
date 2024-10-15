import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur mon Portfolio</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Profile"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">El wakil Abdelrahman</h2>
          <p className="text-gray-600 mb-4">
          Étudiant en troisième année d'informatique, passionné par le développement web et l'intelligence artificielle.
          </p>
          <div className="flex space-x-4 mb-4">
            <SocialLink href="https://github.com/0xAbdel" icon={<GithubIcon />} text="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/abdelrahman-e-8b1741243/" icon={<LinkedinIcon />} text="LinkedIn" />
            <SocialLink href="mailto:abdel.elw353@gmail.com" icon={<MailIcon />} text="Email" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="PHP" />
            <Skill name="Javascript" />
            <Skill name="React" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; text: string }> = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-600 hover:text-blue-800"
  >
    {icon}
    <span className="ml-1">{text}</span>
  </a>
);

const Skill: React.FC<{ name: string }> = ({ name }) => (
  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
    {name}
  </span>
);

export default Home;