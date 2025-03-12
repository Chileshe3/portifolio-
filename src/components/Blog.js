import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaTags, FaClock } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: "Modern Web Development Practices",
      excerpt: "Exploring the latest trends and best practices in modern web development...",
      date: "2023-11-01",
      category: "Development",
      readTime: "5 min",
      image: "https://via.placeholder.com/400x300?text=Web+Development",
      tags: ["React", "Web Dev", "Frontend"]
    },
    {
      id: 2,
      title: "UI/UX Design Principles",
      excerpt: "Understanding the fundamentals of user interface and experience design...",
      date: "2023-10-28",
      category: "Design",
      readTime: "7 min",
      image: "https://via.placeholder.com/400x300?text=UI/UX+Design",
      tags: ["UI/UX", "Design", "User Experience"]
    },
    {
      id: 3,
      title: "Career Growth in Tech",
      excerpt: "Tips and strategies for advancing your career in the tech industry...",
      date: "2023-10-25",
      category: "Career",
      readTime: "6 min",
      image: "https://via.placeholder.com/400x300?text=Career+Growth",
      tags: ["Career", "Professional Growth", "Tech Industry"]
    }
  ];

  const categories = ["all", "Development", "Design", "Career", "Tutorial"];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-container">
      <motion.div 
        className="blog-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Blog & Articles</h2>
        <div className="category-filters">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="blog-grid"
        layout
      >
        {filteredPosts.map((post, index) => (
          <motion.article 
            key={post.id}
            className="blog-card"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span><FaCalendar /> {post.date}</span>
                <span><FaClock /> {post.readTime}</span>
                <span><FaTags /> {post.tags.join(', ')}</span>
              </div>
              <motion.button 
                className="read-more"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
