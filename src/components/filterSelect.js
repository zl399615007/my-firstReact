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
            code: '',
            name: '不限',
        };
        console.log(this.props.filterOption)
    }
    btnNolimit1Section(filterType){//学段、学科、历史用途不限按钮点击
        let _this=this;

    }
    btnFilterType(filterType){

    }
    render() {
        let spanState=classNames({
            'filter-tag':true,
            'active':true
        })
        const list=this.props.filterOption.map((item,index)=> {return <li key={item.code+''+index}><span  className="filter-tag" onClick={this.btnFilterType(item,index,'studySection')}>{item.name}</span></li>})
        return (
            <div className='filter-item'>
                <ul>
                    <li><span  className={spanState} onClick={this.btnNolimit1Section('historicalUse')}>不限</span></li>
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