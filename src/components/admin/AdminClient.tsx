'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import CustomCKEditor from '@/components/CustomCKEditor';
import { PostType } from '@/types/post';

const BACKEND_URL = 'http://localhost:5000';

const AdminClient = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [postData, setPostData] = useState<Omit<PostType, '_id' | 'createdAt' | 'updatedAt'>>({
    title: '',
    content: '',
    category: 'educator',
    bool: false,
    eventDate: '',
    imageUrl: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get<PostType[]>(`${BACKEND_URL}/api/posts`);
      setPosts(res.data);
    } catch (error) {
      console.error('Fetch posts error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    if (name === 'bool' && type === 'checkbox') {
      if (checked) {
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post._id === editingId ? { ...post, bool: true } : { ...post, bool: false }
          )
        );
        setPostData(prev => ({ ...prev, bool: true }));
      } else {
        setPostData(prev => ({ ...prev, bool: false }));
      }
    } else if (name === 'eventDate') {
      setPostData(prev => ({ ...prev, eventDate: value }));
    } else if (type === 'checkbox') {
      setPostData(prev => ({ ...prev, [name]: checked }));
    } else {
      setPostData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setPostData(prev => ({ ...prev, imageUrl: '' }));
    }
  };

  const handleEdit = (post: PostType) => {
    setEditingId(post._id || null);
    setPostData({
      title: post.title,
      content: post.content,
      category: post.category,
      bool: post.bool,
      eventDate: post.eventDate ? new Date(post.eventDate).toISOString().substring(0, 10) : '',
      imageUrl: post.imageUrl || '',
    });
    setImageFile(null);
    setImagePreview(post.imageUrl || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setPostData({
      title: '',
      content: '',
      category: 'educator',
      bool: false,
      eventDate: '',
      imageUrl: '',
    });
    setImageFile(null);
    setImagePreview(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (imageFile) {
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('content', postData.content);
        formData.append('category', postData.category);
        formData.append('bool', String(postData.bool));
        formData.append('eventDate', postData.eventDate);
        formData.append('image', imageFile);

        if (editingId) {
          await axios.put(`${BACKEND_URL}/api/posts/${editingId}`, formData);
        } else {
          await axios.post(`${BACKEND_URL}/api/posts`, formData);
        }
      } else {
        const payload = { ...postData };
        if (editingId) {
          await axios.put(`${BACKEND_URL}/api/posts/${editingId}`, payload);
        } else {
          await axios.post(`${BACKEND_URL}/api/posts`, payload);
        }
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      console.error('Save post error:', error);
      alert('Lỗi khi lưu bài viết. Kiểm tra console để biết thêm chi tiết.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn chắc chắn muốn xóa bài viết này?')) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Delete post error:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Quản lý bài viết</h1>

      <form onSubmit={handleSubmit} className="mb-10 border border-gray-700 p-6 rounded shadow-md bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">{editingId ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới'}</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="title">Tiêu đề</label>
          <input type="text" id="title" name="title" value={postData.title} onChange={handleChange} required className="w-full border border-gray-700 px-3 py-2 rounded bg-white text-black" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="content">Nội dung</label>
          <CustomCKEditor data={postData.content} onChange={(data) => setPostData(prev => ({ ...prev, content: data }))} />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="category">Danh mục</label>
          <select id="category" name="category" value={postData.category} onChange={handleChange} className="w-full border border-gray-700 px-3 py-2 rounded bg-white text-black">
            <option value="educator">Educator</option>
            <option value="youth">Youth</option>
            <option value="digcomp">DigComp</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" name="bool" checked={postData.bool} onChange={handleChange} className="mr-2" />
            Đánh dấu (Bool)
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="eventDate">Ngày sự kiện (nếu có)</label>
          <input type="date" id="eventDate" name="eventDate" value={postData.eventDate} onChange={handleChange} className="w-full border border-gray-700 px-3 py-2 rounded bg-white text-black" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="image">Ảnh đại diện</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} className="w-full" />
          {imagePreview && (
            <img src={imagePreview.startsWith('blob:') ? imagePreview : `${BACKEND_URL}${imagePreview}`} alt="Preview" className="mt-2 max-w-xs h-auto rounded border border-gray-700" />
          )}
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            {editingId ? 'Cập nhật' : 'Thêm mới'}
          </button>
          <button type="button" onClick={resetForm} className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
            Hủy
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Danh sách bài viết</h2>
      <table className="w-full border border-gray-700 rounded overflow-hidden bg-white text-black">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-700 px-4 py-2 text-left">Tiêu đề</th>
            <th className="border border-gray-700 px-4 py-2 text-left">Danh mục</th>
            <th className="border border-gray-700 px-4 py-2 text-left">Ngày sự kiện</th>
            <th className="border border-gray-700 px-4 py-2 text-center">Bool</th>
            <th className="border border-gray-700 px-4 py-2 text-left">Ảnh</th>
            <th className="border border-gray-700 px-4 py-2 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-4">Chưa có bài viết nào.</td>
            </tr>
          )}
          {posts.map((post) => (
            <tr key={post._id} className="hover:bg-gray-100">
              <td className="border border-gray-700 px-4 py-2">{post.title}</td>
              <td className="border border-gray-700 px-4 py-2 capitalize">{post.category}</td>
              <td className="border border-gray-700 px-4 py-2">{post.eventDate ? new Date(post.eventDate).toLocaleDateString() : '-'}</td>
              <td className="border border-gray-700 px-4 py-2 text-center">{post.bool ? '✔️' : ''}</td>
              <td className="border border-gray-700 px-4 py-2">
                {post.imageUrl && <img src={`${BACKEND_URL}${post.imageUrl}`} alt="thumb" className="w-20 h-auto rounded" />}
              </td>
              <td className="border border-gray-700 px-4 py-2 text-center">
                <button onClick={() => handleEdit(post)} className="text-blue-600 hover:underline mr-4">Sửa</button>
                <button onClick={() => handleDelete(post._id!)} className="text-red-600 hover:underline">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminClient;