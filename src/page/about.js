import React,{Component} from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import FilterBtn from '../components/filterBtn'
import FilterSelect from '../components/filterSelect'
class about extends Component{

    render(){
        const filterOption1=[{  value:0, name:'全部' },{ value:1, name:'有效'},{ value:2, name:'无效' }]
        const filterOption2=[{ value:1, name:'春'},{ value:2, name:'秋' }]
        const filterOption3=[{ code:'primary_school', name:'小学'},{ code:'middle_school', name:'初中' },{ code:'high_school', name:'高中' }]


        return(
            <div>
                <FilterBtn filterOption={filterOption1}></FilterBtn>
                <FilterBtn filterOption={filterOption2}></FilterBtn>
                <FilterSelect filterOption={filterOption3}></FilterSelect>

            </div>
        )
    }
}
export default about;