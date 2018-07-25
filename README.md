这次的分享，主要涉及3块内容，一是Context API，二是h5 的 History API 三是利益上面的知识手写一段react-router。

# Context API

## Redux Context API 的问题
我们都知道在 React 中父子组件可以通过 props 自顶向下的传递数据。但是当组件深度嵌套时，从顶层组件向最内层组件传递数据就不那么方便了。手动在每一层组件上逐级传递 prop 不仅书写起来很繁琐同时还会为夹在中间的组件引入不必要的 prop。为了避免这种繁琐的方式，很多同学就想到了redux。

用过redux + redux的同学，应该会觉得新的Context API很眼熟。都是如下结构。

<Provider store={store}>
    <App />
</Provider>

### 问题1:shouldComponentUpdate 搭配很容易出错

```js
<A>
  <B>
    <C />
  </B>
</A>

```
对于上面的问题，其中组件 A 会通过 getChildContext 设置 Context，组件 C 通过 this.context 读取 Context。
当组件 A 要更新 Context 的时候发生什么呢？
  1. 组件 A 通过 setState 设置新的 Context 值同时触发子组件的 rerender。
  2. 组件 B rerender。
  3. 组件 C rerender，并在自己的 render 方法中拿到更新后的Context。
整个流程看起来好像没什么问题。如果我们在组件 B 上定义了 shouldComponentUpdate 会发生什么呢？
  1. 组件 A 通过 setState 设置新的 Context 值同时触发子组件的 rerender。
  2. 组件 B 执行 shouldComponetUpdate，由于组件 B 自身并不依赖 Context，所以  shouldComponetUpdate  检测到 state 与 prop 均未变化因此返回 false。无需重新 render。
  3. 由于 B 组件没有 rerender。这导致组件 C 也不会rerender，因此也就无法获取到最新的 Context 值。

所以 React 的官方文档里并不建议我们使用现有的 Context API

## 新 Context API

React.createContext 方法用于创建一个 Context 对象。该对象包含Provider 和 Consumer 两个属性，分别为两个React组件


* Provider 组件。用在组件树中更外层的位置。它接受一个名为 value 的 prop，其值可以是任何 JavaScript 中的数据类型。

* Consumer 组件。可以在 Provider 组件内部的任何一层使用。它接收一个名为 `children` 值为`一个函数的 prop`。这个函数的参数是 Provider 组件接收的那个 `value` prop 的值，返回值是一个 React 元素。

具体使用，我们可以我们提供的demo1。

例子解析：
1. Provider 和 Consumer 必须来自同一次 React.createContext 调用。
2. React.createContext 方法接收一个默认值作为参数。
3. Provider 组件的 value prop 值发生变更时，其内部组件树中对应的 Consumer 组件会接收到新值并重新执行 children 函数。此过程不受 shouldComponentUpdete 方法的影响。
4. Provider 组件利用 Object.is 检测 value prop 的值是否有更新。
5. Consumer 组件接收一个函数作为 children prop 并利用该函数的返回值生成组件树的模式被称为 Render Props 模式。

# H5 History API 

## History.pushState

history.pushState(obj, title, ’/url’)

pushState提供给我们的是一种在不改变网页内容的前提下，操作浏览器历史记录的能力。

## History.replaceState 方法

和History.pushState 类似。

## History.popstate 方法

1. history.pushState和history.replaceState都不会触发这个事件 
2. 仅在浏览器前进后退操作、history.go/back/forward调用的时候触发 

history.pushState和history.replaceState还有一个共同的特点就是都不会触发hashchange。可以通过下面的例子来测试。

https://jsbin.com/foqiyalaba/1/edit?html,js

## 其他方法
 * History.back 方法
 
 * History.forwar 方法
 
 * History.go 方法

# SPA 原理

单页应用的原理用两种，一种是通过hash的变化，改变页面，另一种是通过url的变化改变页面。

> Hash
* Window.location.hash = ‘XXX’ 改变hash
* Window.addEventListener('hashchange',fun) 监听hash的改变

> URL
* History.pushState(obj,title,'/url') 改变URL
* Window.addEventListener('popstate',fun) 当浏览器向前向后时，触发该事件。
 
# React-router 核心组件 

## Router
	•	Router是一个外层，最后render的是它的子组件，不渲染具体业务组件。
	•	分为HashRouter(通过改变hash)、BrowserRouter(通过改变url)
	•	Router负责选取哪种方式作为单页应用的方案hash或browser或其他的。
	•	？Router的props中有一个history的对象，history是对window.history的封装，history的负责管理与浏览器历史记录的交互和哪种方式的单页应用。history会作为childContext里的一个属性传下去。
## Route
	•	负责渲染具体的业务组件，负责匹配url和对应的组件
	•	有三种渲染的组件的方式：component(对应的组件)、render(是一个函数，函数里渲染组件)、children(无论哪种路由都会渲染)

## Switch
	•	匹配到一个Route子组件就返回不再继续匹配其他组件。
## Link
	•	跳转路由时的组件，调用history.push把改变url。

## Redirect
	•	 重定向就是匹配不到后直接跳转到redirect中的to路径


具体代码可以看demo2。
