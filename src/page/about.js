import React,{Component} from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import {SelectFilter} from '../components/filterBtn'
class about extends Component{
    render(){
        const filterOption1=[{  value:0, name:'全部' },{ value:1, name:'有效'},{ value:2, name:'无效' }]
        const filterOption2=[{ value:1, name:'春'},{ value:2, name:'秋' }]









        return(
            <div>
                <SelectFilter filterOption={filterOption1}></SelectFilter>
                <SelectFilter filterOption={filterOption2}></SelectFilter>
            </div>
        )
    }
}
export default about;