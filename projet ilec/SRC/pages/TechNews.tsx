import React from 'react';
import { Clock, User } from 'lucide-react';

const TechNews: React.FC = () => {
  const newsArticles = [
    {
      title: 'AI Breakthrough: New Model Surpasses Human Performance in Complex Problem-Solving',
      author: 'Jane Smith',
      date: '2023-03-15',
      summary: 'Researchers at TechU have developed a new AI model that outperforms humans in solving complex mathematical and logical problems, marking a significant milestone in artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Quantum Computing Takes a Leap Forward with New 1000-Qubit Processor',
      author: 'John Doe',
      date: '2023-03-10',
      summary: 'QuantumTech Inc. has unveiled a groundbreaking 1000-qubit quantum processor, potentially revolutionizing fields such as cryptography, drug discovery, and financial modeling.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Tech Giants Collaborate on Open-Source Climate Change Mitigation Project',
      author: 'Alice Johnson',
      date: '2023-03-05',
      summary: 'Leading tech companies have joined forces to launch an open-source initiative aimed at developing innovative solutions to combat climate change, leveraging AI and big data analytics.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Tech News</h1>
      <div className="space-y-6">
        {newsArticles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

const NewsCard: React.FC<{
  title: string;
  author: string;
  date: string;
  summary: string;
  image: string;
}> = ({ title, author, date, summary, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex items-center text-gray-600 mb-2">
        <User size={16} />
        <span className="ml-1 mr-4">{author}</span>
        <Clock size={16} />
        <span className="ml-1">{date}</span>
      </div>
      <p className="text-gray-600">{summary}</p>
    </div>
  </div>
);

export default TechNews;