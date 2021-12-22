import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNavButtons } from '../actions';

const App = () => {
    const navButtons = useSelector(state => state.navButtonsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hideNavButtons());
    }, []);

    return (
        <div>
            LOGIN PAGE
        </div>
    )
};

export default (App);