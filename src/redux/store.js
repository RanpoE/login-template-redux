import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'

export default configureStore(
    {reducer: reducers},
    {},
    window.__REDUX_DEVTOOLS_EXTENSIONS__&& window.__REDUX_DEVTOOLS_EXTENSIONS__()
)