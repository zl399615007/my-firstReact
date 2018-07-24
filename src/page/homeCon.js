import { Layout, Menu, Icon } from 'antd';
import React,{Component} from 'react'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'
import About from '../page/about'
import Help from '../page/help'
import common from '../assets/style/common.less'
const { Header, Sider, Content } = Layout;
class HomeCon extends Component{
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
                            <Icon type="user" />
                            <span><Link to="/">home</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span><Link to="/help">help</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span><Link to="/about">about</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}
export default HomeCon;