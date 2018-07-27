import { Layout, Menu, Icon } from 'antd';
import React,{Component} from 'react'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Routes from '../routes/routes'
const { Header, Sider, Content } = Layout;
class home extends Component{
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout style={{width:'100%',height:'100%'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="user" />
                                <span>home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/help">
                                <Icon type="video-camera" />
                                <span>help</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/about">
                                <Icon type="upload" />
                                <span>about</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Provider store={store}>
                            <Routes/>
                        </Provider>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default home;