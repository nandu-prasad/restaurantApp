import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/attachment_74455091-e1571114936278.png?auto=format&q=60&fit=max&w=930"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Kalz-Brgr
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header