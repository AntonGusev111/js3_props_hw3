import React from 'react'
import propTypes, { element, number } from 'prop-types'
import Star from './Star';

export default function Stars(props) {
    let {count} = props;
    let arr = new Array(count).fill().map((_, idx) => <h5 key={idx}><Star /></h5>)

  return (
    <div>
       <ul class="card-body-stars u-clearfix">
  <li>
    {arr}
  </li>
</ul>
        
    </div>
  )
}

Stars.propTypes = {
    count:propTypes.number.isRequired
}

Stars.defaultProps = {
    count:0
}
