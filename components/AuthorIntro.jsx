import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

const AuthorIntro = () => {
  return (
    <Row>
      <Col md='8'>
        {/* AUTHOR INTRO STARTS */}
        <div className='mb-4 p-2 admin-intro'>
          <Image
            roundedCircle
            width={64}
            height={64}
            className='mr-3'
            src='https://avatars.githubusercontent.com/u/17996959?s=400&v=4'
            alt='A profile pic'
          />
          <Card.Body>
            <h5 className='font-weight-bold mb-0'>Hello</h5>
            <p className='welcome-text'>
              My name is Bryan Goertz and I am an experienced software engineer
              and freelance developer. This is my blog.
            </p>
          </Card.Body>
        </div>
        {/*  AUTHOR INTO ENDS */}
      </Col>
    </Row>
  );
};

export default AuthorIntro;
