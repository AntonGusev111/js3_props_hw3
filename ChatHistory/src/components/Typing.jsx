import React from 'react'

export default function Typing(props) {
    const {typ} = props; 
  return (
    <div class='message'>
      <li key={typ.id} class="clearfix">
        <div class="message-data align-right">
            <span class="message-data-time">{typ.time}</span> &nbsp; &nbsp;
            <span class="message-data-name">{typ.from.name}</span>
            <i class="fa fa-circle me"></i>
        </div>
        <div class="message other-message float-right">
            {typ.text}
        </div>
    </li>
    </div>
  )
}
