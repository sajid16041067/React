import { createSlice } from "@reduxjs/toolkit";
import {blogs} from "../content"

export const BlogReducer = createSlice({
  name: "BlogReducer",
  initialState: {blogs},
  reducers: {
    addBlog: (state, action) => {
      let newBlog = action.payload.blog;
      newBlog.blogId = state.blogs.length+2;
      newBlog.blogPublishedOn = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
      let newBlogs = state.blogs;
      state.blogs = [...newBlogs, newBlog];
    },
    updateBlog: (state, action) => {
      let updatedBlog = action.payload.blog;
      let newBlogs = state.blogs.map(blog => {
        if(blog.blogId == updatedBlog.blogId){
         return updatedBlog;
        }else{
          return blog;
        }
      });
      state.blogs = [...newBlogs];
    },
    deleteBlog: (state, action) =>{
      let newBlogs = [...state.blogs];
      console.log(newBlogs);
      state.blogs = [...newBlogs.filter(blog => blog.blogId != action.payload.blogId)];
    },
    likeBlog: (state, action) =>{
      let newBlogs = [...state.blogs.map(blog => {
        if(blog.blogId == action.payload.blogId){
          blog.blogLiked = !blog.blogLiked;
          return blog;
        }else{
          return blog;
        }
      })];
      state.blogs = [...newBlogs];

    }
  },
});

export const { addBlog, updateBlog, deleteBlog, likeBlog } = BlogReducer.actions;
export default BlogReducer.reducer;
