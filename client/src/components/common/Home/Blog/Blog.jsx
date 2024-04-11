import React, { useState, useEffect } from 'react';
import { client } from './../../../clientaxios/Client';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    client.get('/blog')
      .then(response => {
        // Get the first three blogs from the response data
        const latestBlogs = response.data.slice(0, 3);
        setBlogs(latestBlogs);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  };

  return (
    <div>
      <div className="container-fluid blog py-5" style={{backgroundColor:'#FFF9AF'}}>
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="">
              <h4 className="px-3 mb-0 bold text-uppercase" style={{color:'#6F42C1',padding:'15px'}}>Shafi Ayurveda Blog</h4>
            </div>
            <h1 className="display-3 mb-4">Discover the Healing Wonders of Shafi Ayurved</h1>
            <p className="mb-0">Explore the ancient wisdom of Ayurveda with Shafi, where natural remedies and holistic practices converge to restore balance and promote wellness. Learn about personalized treatments, herbal formulations, and lifestyle tips to enhance your vitality and well-being.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {blogs.map(blog => (
              <div key={blog._id} className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="blog-item rounded">
                  <div className="blog-img">
                    <img src={blog.image} className="img-fluid w-100" alt="Image" />
                  </div>
                  <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary" /> {blog.date.split('T')[0]}</p>
                      <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> {blog.comments.length} Comments</a>
                    </div>
                    <a href="#" className="h4">{blog.title}</a>
                    <p className="my-4">{blog.description}</p>
                    <a href="/treatment" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
