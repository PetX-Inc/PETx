import React, { Component } from 'react';
import './Blogs.css';
import Photo from "../../images/pics/blogs/6.jpg";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  display_top_blogs = () => {
    const { blogs } = this.props;
    if (!blogs) {
      return null;
    }

    let items = blogs.map((item) => {
      return (
        <div className='c col-lg-4 col-md-6 col-sm-12 mb-4' key={Math.random()}>
          <div className='card shadow-lg'>
            <img className='card-img-top' src={Photo} alt={item.alt} />
            <div className='card-body'>
              <h1>{item.blogTitle}</h1>
              <p>{item.blogBody}</p>
              <button className='btn btn-outline-success btn-sm text-capitalize'>
                read more<i className="ms-2 fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });

    return items;
  };

  render() {
    return (
      <section className='blogs py-5 mb-5' id='blogs'>
        <div className='container'>
          <div className='title'>
            <h2 className='text-capitalize text-center mb-5 position-relative p-3'>blogs</h2>
            <div className='row'>
              {this.display_top_blogs()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
