import React,{Component} from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import FilterBtn from '../components/filterBtn'
import FilterSelect from '../components/filterSelect'
class about extends Component{
    constructor(props){
        super(props);
        this.state={
            Option1:{
                value:0,
                name:'全部'
            },
            Option2:{
                value:1,
                name:'春'
            },
            Option3:{
                code:'',
                name:'不限'
            },
        };

   }
   changeOption(state,option){
        this.setState({
            [option]:state
        })

   }
    render(){
        const filterOption1=[{  value:0, name:'全部' },{ value:1, name:'有效'},{ value:2, name:'无效' }]
        const filterOption2=[{ value:1, name:'春'},{ value:2, name:'秋' }]
        const filterOption3=[{ code:'primary_school', name:'小学'},{ code:'middle_school', name:'初中' },{ code:'high_school', name:'高中' }]


        return(
            <div>

                <div>{this.state.Option1.name}</div>
                <div>{this.state.Option2.name}</div>
                <div>{this.state.Option3.name}</div>
                <FilterBtn filterOption={filterOption1} changeOption={(state,option)=>this.changeOption(state,'Option1')}></FilterBtn>
                <FilterBtn filterOption={filterOption2} changeOption={(state,option)=>this.changeOption(state,'Option2')}></FilterBtn>
                <FilterSelect filterOption={filterOption3} changeOption={(state,option)=>this.changeOption(state,'Option3')}></FilterSelect>

            </div>
        )
    }
}
export default about;