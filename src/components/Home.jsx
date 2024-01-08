import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Blog from './Blog'
import Pagination from './Pagination';

export default function Home() {
  const blogs = useSelector(state => state.blogs.blogs);
  console.log(blogs);
  
  return (
    
    <div className='container d-flex justify-content-center px-4 pb-4'>
      <div className="container-main w-75">
        <div className="title">
          <h2 className="display-5 text-center py-4">Published Blogs</h2>
        </div>
        <div className="container-blog-list p-4">
        <div className='row'>
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4 d-flex justify-content-end">
            {blogs.length>0 && <Link className='btn btn-success' to="/new">New Blog</Link>}
          </div>
        </div>
        <div className="main">
          
          {blogs.length<=0 && <div className='text-center'>
            <span className='display-5 py-4'>No Blogs Found! Write a Blog Now...</span>
            <div className='d-flex justify-content-center pt-5 pb-3'><Link className='btn btn-success btn-lg' to="/new">New Blog</Link></div>
            </div>}
          {blogs.map(blog => <Blog key={blog.blogId} blog={blog}></Blog>)}
          
        </div>
        </div>
      </div>
    </div>
  )
}
