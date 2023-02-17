import React from 'react'
import propTypes from 'prop-types';
import Response from './Response';
import Typing from './Typing.jsx'
import Message from './Message';

export default function MessageHistory(props) {
    const {list} = props

    let resp = list.map((element) => {
        switch(element.type){
            case 'response':
                    return <Response resp={element} />
            case 'message':
                return <Message mes={element} />
            case 'typing':
                return <Typing typ={element} />
        }
    });


  return (
    <div>
      {resp}
    </div>
  )
}

MessageHistory.protoTypes = {
    list:propTypes.array.isRequired,
}

MessageHistory.defaultProps = {
    list:[],
};