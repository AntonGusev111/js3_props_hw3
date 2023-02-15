import React from 'react'

export default function Message(props) {
    const {mes} = props;
   
  return (
    <div>
      <li key={mes.id} class="clearfix">
        <div class="message-data align-right">
            <span class="message-data-time">{mes.time}</span> &nbsp; &nbsp;
            <span class="message-data-name">{mes.from.name}</span>
            <i class="fa fa-circle me"></i>
        </div>
        <div class="message other-message float-right">
            {mes.text}
        </div>
    </li>
    </div>
  )
}
