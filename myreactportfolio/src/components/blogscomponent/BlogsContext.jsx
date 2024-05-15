import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                let url="http://localhost:3330"
                const response = await axios.get(`${url}/Blogs/getBlogs`,{
                    headers: {
                        Authorization:`Bearer${localStorage.getItem('accessToken')}`
                    }
                });
                setBlogs(response.data.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <BlogsContext.Provider value={{ blogs, setBlogs }}>
            {children}
        </BlogsContext.Provider>
    );
};

export default BlogsContext;