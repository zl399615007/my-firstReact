import { Layout, Menu, Icon } from 'antd';
import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Routes from '../routes/routes'
import createHistory from 'history/createBrowserHistory';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const history = createHistory();
class home extends Component{
    constructor(props){
        super(props);

    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const query=history.location.pathname.split('/')[1];
        let openkeys='';
       if(query=='option5'||query=='option6'){
           openkeys='sub1'
       }
        return (
            <Layout style={{width:'100%',height:'100%'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${query ||'home'}`]} defaultOpenKeys={[`${openkeys}`]}>

                        <Menu.Item key="home">
                            <Link to="/home">
                                <Icon type="user" />
                                <span>home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="help">
                            <Link to="/help">
                                <Icon type="video-camera" />
                                <span>help</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">
                                <Icon type="upload" />
                                <span>about</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="option5">
                                <Link to="/option5">
                                    <Icon type="video-camera" />
                                    <span>option5</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="option6">
                                <Link to="/option6">
                                    <Icon type="video-camera" />
                                    <span>option6</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
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