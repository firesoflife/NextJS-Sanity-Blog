import React from 'react';
import { Container } from 'react-bootstrap';
import BlogNavbar from './Navbar';

function PageLayout({ children, className }) {
  return (
    <>
      <Container>
        <BlogNavbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <a href='#'>Courses</a>
          {' | '}
          <a href='#'>GitHub</a>
          {' | '}
          <a href='#'>LinkedIn</a>
        </footer>
      </Container>
    </>
  );
}

export default PageLayout;
