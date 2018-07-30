import React,{Component} from 'react'

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
            <div>我是home</div>
        );
    }
}
export default HomeCon;