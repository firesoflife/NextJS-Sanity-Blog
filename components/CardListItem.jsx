import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const CardListItem = ({ title, subtitle, author, link, date }) => {
  return (
    <Card className='fj-card fj-card-list'>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            src={author?.avatar}
            alt='avatar'
            className='rounded-circle me-3'
            height='50px'
            width='50px'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {author.name}
            </Card.Title>
            <Card.Text className='card-date'>Placeholder Date</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardListItem;
