import { getAllBlogs } from '../../bryan-breathe-blog-sanity/lib/api';

export default async function getBlog(req, res) {
  const data = await getAllBlogs();
  res.status(200).json(data);
}
