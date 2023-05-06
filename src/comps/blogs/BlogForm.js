import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AddBlog = ({ addBlog }) => {
  const [showModal, setShowModal] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blogTitle, blogContent);
    setShowModal(false);
    setBlogTitle('');
    setBlogContent('');
  };

  return (
    <>
    <div className='text-center m-3'>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add new Blog
            </Button>
    </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Blog Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={12}
                // columns={40}
                placeholder="Enter blog content"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBlog;
