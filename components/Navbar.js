import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const BlogNavbar = () => {
  return (
    <Navbar
      className='fj-navbar fj-nav-base d-flex justify-content-between'
      bg='transparent'
      expanded='lg'
    >
      <Navbar.Brand className='fj-navbar-brand'>
        <Link href='/'>
          <a>Breathe In This Life</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav className='ml-auto'>
          <Nav.Link
            as={() => (
              <Link href='/'>
                <a className='fj-navbar-item fj-navbar-link justify-content-end'>
                  Home
                </a>
              </Link>
            )}
          >
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
