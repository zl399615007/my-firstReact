import React,{Component} from 'react'
import PropTypes from 'prop-types'
import increaseAction from '../redux/action'
import { connect } from 'react-redux'
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>  {value}  </span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}




// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


class help extends Component{
    render(){
        return(
            <div>
                我是help
                <App/>
            </div>
        )
    }
}
export default help;