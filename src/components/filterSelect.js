import React from 'react';
import PropTypes from 'prop-types'
import '../assets/style/common.less'
import '../assets/style/mixin.less'
import '../assets/style/filterStyle.less'
var classNames = require('classnames');
class FilterSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nolimit:true,
            select:{
                code:'',
                name:''
            }
        };
    }
    isactive(){

    }
    btnFilterType(code,name){
        let obj={
            code:code,
            name:name
        }
        this.props.changeOption(obj)
        console.log(code)
    }
    render() {
        let spanState=classNames({
            'filter-tag':true,
            'active':true
        })
        const list=this.props.filterOption.map((item,index)=> {return <li key={item.code+''+index}><span  className="filter-tag" onClick={()=>{
            this.btnFilterType(item.code,item.name)
        }}>{item.name}</span></li>})
        return (
            <div className='filter-item'>
                <ul>
                    <li><span  className={spanState} onClick={()=>this.btnFilterType('','不限')}>不限</span></li>
                    {list}
                </ul>
            </div>
        )


    }
}
FilterSelect.propTypes={
    filterOption:PropTypes.array.isRequired
}
export default FilterSelect