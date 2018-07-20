import React from 'react';
import Bundle from '../components/bundle';

export default [{
    path: '/',
    exact: true,
    component(props) {
        // 这里的 component 函数也是一个高阶组件
        return <Bundle {...props} load={() => import('../page/home')} />;
    }
}, {
    path: '/about',
    component(props) {
        return <Bundle {...props} load={() => import('../page/about')} />;
    }
}, {
    path: '/help',
    component(props) {
        return <Bundle {...props} load={() => import('../page/help')} />;
    }
}];