import React from 'react';
import { Alert } from 'react-bootstrap';

const PreviewAlert = () => {
  return (
    <Alert variant='secondary'>
      This is the preview mode!{' '}
      {/* TODO:  This will lead to API route that will remove preview cookies */}
      <Alert.Link>Leave preview mode</Alert.Link>
    </Alert>
  );
};

export default PreviewAlert;
