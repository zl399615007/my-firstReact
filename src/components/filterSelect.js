import React from 'react';
import PropTypes from 'prop-types'
import '../assets/style/common.less'
import '../assets/style/mixin.less'
import '../assets/style/filterStyle.less'
var classNames = require('classnames');
class FilterSelect extends React.Component {
    constructor(props) {
        super(props);
        this.classState = {
            nolimit:true,
            select:{
                code:'',
                name:''
            }
        };
    }


    btnFilterType(code,name){
        let obj={
            code:code,
            name:name
        }
        code==''?this.classState.nolimit=true:this.classState.nolimit=false;
        this.classState.select.code=code;
        this.props.changeOption(obj);

    }

    render() {
        const list=this.props.filterOption.map((item,index)=> {return <li key={item.code+''+index}><span  className={['filter-tag',item.code===this.classState.select.code && 'active'].join(' ')} onClick={()=>{
            this.btnFilterType(item.code,item.name)
        }}>{item.name}</span></li>})
        return (
            <div className='filter-item'>
                <ul>
                    <li><span  className={['filter-tag',this.classState.nolimit && 'active'].join(' ')} onClick={()=>this.btnFilterType('','不限')}>不限</span></li>
                    {list}
                </ul>

            </div>
        )


    }
}
FilterSelect.propTypes={
    filterOption:PropTypes.array.isRequired,
    changeOption:PropTypes.func.isRequired,
}
export default FilterSelect