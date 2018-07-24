import React,{Component} from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
class about extends Component{
    render(){
        return(
            <div>我是about
                <Button type="primary"><Link to='/next'>下一级</Link></Button>
            </div>
        )
    }
}
export default about;