// import { useSWRPages } from 'swr';
// import { useGetBlogs } from '.';
// import { Col } from 'react-bootstrap';

// import CardItem from '../components/CardItem';
// import CardListItem from '../components/CardListItem';

// export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
//   return useSWRPages(
//     'index-page',
//     ({ offset, withSWR }) => {
//       const { data: blogs } = withSWR(useGetBlogs(initialData));

//       if (!blogs) {
//         return 'Loading...';
//       }

//       return blogs.map((blog) =>
//         filter.view.list ? (
//           <Col key={`${blog.slug}-list`} md='9'>
//             <CardListItem
//               author={blog.author}
//               title={blog.title}
//               subtitle={blog.subtitle}
//               date={blog.date}
//               link={{
//                 href: '/blogs/[slug]',
//                 as: `/blogs/${blog.slug}`,
//               }}
//             />
//           </Col>
//         ) : (
//           <Col key={blog.slug} md='4'>
//             <CardItem
//               author={blog.author}
//               title={blog.title}
//               subtitle={blog.subtitle}
//               date={blog.date}
//               image={blog.coverImage}
//               link={{
//                 href: '/blogs/[slug]',
//                 as: `/blogs/${blog.slug}`,
//               }}
//             />
//           </Col>
//         )
//       );
//     },
//     // here you will compute offset that will get passed into previous callback function with 'withSWR'
//     // SWR: data you will get from 'withSWR' function
//     // index: number of current page
//     (SWR, index) => {
//       return 0;
//     },
//     [filter]
//   );
// };

import useSWRInfinite from 'swr/infinite';
import { getBlogs } from '.';

export const useGetBlogsPages = ({ filter }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/blogs?offset=${index * 6}&date=${
      filter.date.asc ? 'asc' : 'desc'
    }`;
  }, getBlogs);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
