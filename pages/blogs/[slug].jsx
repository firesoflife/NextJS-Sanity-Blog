import PageLayout from '../../components/PageLayout';
import {
  getAllBlogs,
  getBlogBySlug,
  getPaginatedBlogs,
  urlFor,
} from '../../bryan-breathe-blog-sanity/lib/api';
import { Row, Col } from 'react-bootstrap';
import BlogHeader from '../../components/BlogHeader';
import BlogContent from '../../components/BlogContent';
import moment from 'moment';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import PreviewAlert from '../../components/PreviewAlert';

const BlogDetail = ({ blog, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode='404' />;
  }

  if (router.isFallback) {
    return (
      <PageLayout className='blog-detail-page'>
        Woah, hold on. Things are Loading...
      </PageLayout>
    );
  }

  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader
            title={blog.title}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            subtitle={blog.subtitle}
            author={blog.author}
            date={moment(blog.date).format('LL')}
          />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview },
  };
}

export async function getStaticPaths() {
  const blogs = await getPaginatedBlogs();
  const paths = blogs?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default BlogDetail;
