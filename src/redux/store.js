import { createStore } from 'redux'
import counter from './Reducer'
// Store
const store = createStore(counter)
export default store