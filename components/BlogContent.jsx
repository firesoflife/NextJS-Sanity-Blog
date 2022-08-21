import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';
import { urlFor } from '../lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <>
          <HighlightCode language={language}>
            <div>{code}</div>
          </HighlightCode>
          <div className='code-filename'>{filename}</div>
        </>
      );
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {
      let style = {};

      if (position === 'left') {
        style.float = position;
        style.marginRight = '30px';
      }

      if (position === 'right') {
        style.float = position;
        style.marginLeft = '30px';
      }

      return (
        <div
          className={`blog-image blog-image-${position}`}
          style={{ ...style }}
        >
          <img src={urlFor(asset).height(300).fit('max').url()} alt='' />
          <div className='image-alt'>{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default BlogContent;
