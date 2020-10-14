import renderApp from './app.san';
import {collectInitial} from 'node-style-loader/collect';

const styleTag = collectInitial();
const data = {
    name: 'SAN'
};
const html = renderApp(data);

// TODO
// 1. 启动 HTTP 服务器
// 2. 拼接完整的 HTML
// 3. 接受 HTTP Request 并返回 Response
console.log(`<html>
    <head>${styleTag}</head>
    <body>${html}</body>
</html>`);
