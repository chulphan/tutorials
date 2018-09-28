// 이렇게 해놓으면 pages 다른 파일에서 import를 할때 전체경로를 써줄 필요가 없고 pages에서 이 모듈들을 찾게 해놓으면 된다.

export { default as Home } from './Home';
export { default as About } from './About';
export { default as Posts } from './Posts';
export { default as Post } from './Post';