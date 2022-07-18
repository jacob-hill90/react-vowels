import React from 'react'

import Input from './input';
import Display from './display';

function ContentCont (props) {
    return(
        <div id='content-cont'>
            <div id='content'><Input/>
                              <Display/>
            </div>
        </div>
    )
}
export default ContentCont