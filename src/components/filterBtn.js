import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types'
class SelectFilter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.filterOption[0].value,
            name:this.props.filterOption[0].name,
        };
        console.log(this.props.filterOption)
    }
    handleChange = (value,name) => {
        this.setState({
            value:value,
            name:name.props.children
        });

    }
    render(){
        const Option = Select.Option;
        const optionList=this.props.filterOption.map((item,index)=><Option value={item.value} key={item.value}>{item.name}</Option>)
        return(
            <div>
                <Select defaultValue={this.state.value} style={{ width: 120 }} onChange={this.handleChange}>
                    {optionList}
                </Select>

            </div>
        )


    }

}
SelectFilter.propTypes={
    filterOption:PropTypes.array.isRequired
}
export {
    SelectFilter
}