import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import Search from 'components/Search/search';
import CreatePost from 'components/Posts/createPost';
import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
