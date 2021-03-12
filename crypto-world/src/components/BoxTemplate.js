import React from 'react'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import './BoxTemplate.css'

function BoxTemplate(){
    return(
        <div id="container" class="container">
            <div id="row" class="row align-items-center">
            <div id="col1" class="col-sm">
                <Box1 />
            </div>
            <div id="col2" class="col-sm">
                <Box2 />
            </div>
            <div id="col3" class="col-sm">
                <Box3 />
            </div>
            <div id="col4" class="col-sm">
                <Box4 />
            </div>
            </div>
        </div>
    )
}
export default BoxTemplate
