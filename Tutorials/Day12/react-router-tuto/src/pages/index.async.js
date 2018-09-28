import asyncComponent from 'lib/asyncRoute';

export const Home = asyncComponent(() => import('./Home'));
export const About = asyncComponent(() => import('./About'));
export const Post = asyncComponent(() => import('./Post'));
export const Posts = asyncComponent(() => import('./Posts'));