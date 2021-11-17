import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './GetTable.module.css'

export const GetTable = () => {
    return <div className={s.startPage}>
            <h3>Test Task from Sergei Shustov</h3>
            <NavLink to={'/home'}>
                <button className={s.button}>Get Table</button>
            </NavLink>
    </div>
}