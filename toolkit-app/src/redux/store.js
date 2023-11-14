
import { configureStore } from '@reduxjs/toolkit'

import counterRedux from './counterRedux'
import login from './login'

//earlier combinereducer now we directly call configure Store
export default configureStore(
    {
        reducer:{
           acounter:counterRedux,
           alogin:login
        }
    }
)