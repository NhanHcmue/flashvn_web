'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '@/components/admin/PostList';
import PostForm from '@/components/admin/PostForm';
import { PostType } from '@/types/post';

const AdminPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPost, setCurrentPost] = useState<PostType>({
    title: '',
    content: '',
    image: '',
    category: 'educator',
    bool: false,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const savePost = async () => {
    try {
      if (currentPost._id) {
        await axios.put(
          `http://localhost:5000/api/posts/${currentPost._id}`,
          currentPost
        );
      } else {
        await axios.post('http://localhost:5000/api/posts', currentPost);
      }
      setCurrentPost({
        title: '',
        content: '',
        image: '',
        category: 'educator',
        bool: false,
      });
      fetchPosts();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Manage Posts</h1>

      <PostForm
        post={currentPost}
        onChange={setCurrentPost}
        onSubmit={savePost}
      />

      <PostList
        posts={posts}
        onEdit={setCurrentPost}
        onDelete={deletePost}
      />
    </div>
  );
};

export default AdminPage;
