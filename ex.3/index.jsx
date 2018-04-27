import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="menezes">
        <Member name="gilliano" />
        <Member name="rafaella" />
        <Member name="julia" />
    </Family>
,document.getElementById('app'))
