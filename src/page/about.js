import React,{Component} from 'react'
import {Table, Icon, Divider } from 'antd';
import FilterBtn from '../components/filterBtn'
import FilterSelect from '../components/filterSelect'
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <span>Action 一 {record.name}</span>
      <Divider type="vertical" />
      <span >Delete</span>
      <Divider type="vertical" />
      <span className="ant-dropdown-link">
        More actions <Icon type="down" />
      </span>
    </span>
    ),
}];

const listdata = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];
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
        const filterOption4=[{ code:'primary_school1', name:'小学'},{ code:'middle_school1', name:'初中' },{ code:'high_school1', name:'高中' }]


        return(
            <div>

                <div>{this.state.Option1.name}</div>
                <div>{this.state.Option2.name}</div>
                <div>{this.state.Option3.name}</div>
                <FilterBtn filterOption={filterOption1} changeOption={(state,option)=>this.changeOption(state,'Option1')}></FilterBtn>
                <FilterBtn filterOption={filterOption2} changeOption={(state,option)=>this.changeOption(state,'Option2')}></FilterBtn>
                <FilterSelect filterOption={filterOption3} changeOption={(state,option)=>this.changeOption(state,'Option3')}></FilterSelect>
                <FilterSelect filterOption={filterOption4} changeOption={(state,option)=>this.changeOption(state,'Option3')}></FilterSelect>
                <Table dataSource={listdata} columns={columns} />
            </div>
        )
    }
}
export default about;