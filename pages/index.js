import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CardListItem from '../components/CardListItem';
import CardItem from '../components/CardItem';
import PageLayout from '../components/PageLayout';
import AuthorIntro from '../components/AuthorIntro';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';

import { useGetBlogsPages } from '../actions/pagination';
import { getAllBlogs } from '../bryan-breathe-blog-sanity/lib/api';
import moment from 'moment';

export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <Col key={`${blog.slug}-list`} md='9'>
          <CardListItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={blog.slug} lg='4' md='6'>
          <CardItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            image={blog.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      )
    )
  );
};

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilterMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />

      <Row className='mb-5'>
        <BlogList filter={filter} data={data || [blogs]} />
      </Row>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
    },
  };
}
