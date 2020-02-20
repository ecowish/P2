import React from 'react';
import { Route, Link } from 'react-router-dom';

import router from '../config/route'

const Links = (Elem) => {
    return router.map((item) => {
        if(!item.hide && item.path && item.caption) {
            if(Elem) return <Elem><Link to={item.path}>{item.caption}</Link></Elem>
            return <Link to={item.path}>{item.caption}</Link>
        }
    })
}

const Routes = () => {
    return router.map((item) => {
        if(item.path && item.component) return <Route path={item.path} exact={item.exact}>
            <item.component params={item.params}/>
        </Route>
    })
}

export { Link, Links, Routes };