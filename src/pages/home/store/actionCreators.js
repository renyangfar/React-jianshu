import axios from 'axios'
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeHomeData = (res) => ({
    type: constants.CHANGE_HOME_DATA,
    data: fromJS(res.data.data)
})

const addHomeData = (res) => ({
    type: constants.ADD_HOME_DATA,
    data: fromJS(res.data.data)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            dispatch(changeHomeData(res));            
        }).catch(
            (e) => {
                console.log(e)
            }
        )
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' +page).then((res)=>{
            dispatch(addHomeData(res));            
        }).catch(
            (e) => {
                console.log('error')
            }
        )
    }

}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    data: show
})