const fs = require('fs');
const path = require('path');
const render = require('./render').default; // es6형식으로 만들어진 모듈이므로, 뒤에 .default를 써줘야함

// html 내용을 해당 상수에 저장한다.
const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8' });

module.exports = (ctx) => {
    // 요청이 들어올 때 현재 경로를 render 함수에 전달시켜서 문자열을 생성함.
    const location = ctx.path;
    const rendered = render(location);

    // 해당 문자열을 템플릿에 있는 '<div id="root"></div> 사이에 넣어줍니다.
    const page = template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);

    ctx.body = page;
}