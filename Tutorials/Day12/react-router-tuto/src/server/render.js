import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'shared/App';

// babel-node, babel-register, 등은 런타임에서 코드를 변환하거나 서버를 실행하기 전에 트랜스파일링 하므로 버벅일 수 있다.
// 그러므로 webpack을 통해서 리액트 관련 코드만 미리 빌드해서 사용한다.

// 서버사이드 렌더링을 위한 엔트리파일
// renderToString: JSX를 HTML 문자열로 변환해줌.
// render함수는 서버에서 전달받은 요청의 경로인 location을 전달 받아서 renderToString을 실행시켜줌.

// 이제 이것을 webpack으로 번들링해주면 됨.
const render = (location) => ReactDOMServer.renderToString(
    <StaticRouter location={location}>
        <App/>
    </StaticRouter>
)

export default render;