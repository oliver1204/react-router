## 1. React 路由

- 不同路径渲染不同的组件
- 有两种实现方式

- HashRouter：利用 hash 实现路由切换
- BrowserRouter：利用 h5 API 实现路由切换

### 1.1 HashRouter

利用 hash 实现路由切换

```js
<a href="#/a"> a </a>;

window.addEventListener('hashchange', () => {
  console.log(window.location.hash);
});
```

### 1.2 BrowserRouter

利用 h5 API 实现路由切换

#### 1.2.1 history

- history: 浏览器窗口有一个 history 对象，提供了一系列方法, 用来保存浏览历史, 并允许在浏览历史之间移动。
- pushState：HTML5 为 history 对象添加了两个新方法，history.pushState()和 history.replaceState()，用来在浏览历史中添加和修改记录。

> history.pushState 方法接受三个参数，依次为：

> state：一个与指定网址相关的状态对象，popstate 事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填 null。

> title：新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填 null。

> url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。

- popstate 事件

> 每当同一个文档的浏览历史（即 history 对象）出现变化时，就会触发 popstate 事件。

> 需要注意的是，仅仅调用 pushState 方法或 replaceState 方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用 back、forward、go 方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

> 使用的时候，可以为 popstate 事件指定回调函数。这个回调函数的参数是一个 event 事件对象，它的 state 属性指向 pushState 和 replaceState 方法为当前 URL 所提供的状态对象（即这两个方法的第一个参数）。

```js
window.onpopstate = function (event) {
  console.log('location: ' + document.location);

  console.log('state: ' + JSON.stringify(event.state));
};
```

## 2. router api

[api](https://reactrouter.com/web/api/withRouter)
