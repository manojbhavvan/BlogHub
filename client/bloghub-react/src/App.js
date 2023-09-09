import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import CategoriesTags from './components/CategoriesTags';
import SearchBar from './components/SearchBar';
import CommentSystem from './components/CommentSystem';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/categories-tags" element={<CategoriesTags />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/comments" element={<CommentSystem />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
