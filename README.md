This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# useReducer
const [state, dispatch] = useReducer(reducer, initialArg, init);  useState的替代方案，接收reducer并返回当前的state以及其配套的dispatch方法

# useEffect
useEffect(didUpdate);

该Hook接收一个包含命令式、且可能有副作用代码的函数。在函数组件主体内(这里指在React渲染阶段)改变DOM、添加订阅、设置定时器、记录日志以及执行其它包含副作用的操作都是不允许的，因为这可能会产生莫名其妙的bug并破坏UI的一致性。使用useEffect完成副作用操作。赋值给useEffect的函数会在组件渲染到屏幕之后延迟执行。可以把effect看作从React的纯函数式世界通往命令式世界的逃生通道。默认情况下，effect将在每轮渲染结束后执行，可以选择让它在只有某些值改变的时候才执行。

# useLayoutEffect
其函数签名与useEffect相同，但它会在所哟DOM变更之后同步调用effect。可以使用它来读取DOM布局并同步触发重新渲染。在浏览器执行绘制前，useLayoutEffect内部的更新计划将被同步刷新。

# react-redux
1、Provider为后代组件提供store
2、connect为组件提供数据和变更方法

<Provider store> 使组件层级中的connect()方法都能够获得Redux store。正常情况下，根组件应该嵌套在<Provider>中才能使用connect()方法。

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
#   r e a c t - r e d u x - p r a c t i c e 
 
 