import React from 'react'

export default function Response(props) {
    const {resp} = props
  return (
    <div>
      <li key={resp.id} class="clearfix">
        <div class="message-data align-right">
            <span class="message-data-time">{resp.time}</span> &nbsp; &nbsp;
            <span class="message-data-name">{resp.from.name}</span>
            <i class="fa fa-circle me"></i>
        </div>
        <div class="message other-message float-right">
            {resp.text}
        </div>
    </li>
    </div>
  )
}
