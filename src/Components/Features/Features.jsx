
import React from 'react'
import styles from './Features.module.css'

export default (props) => {
    const {Features_Box} = styles
    const inbox = props.inbox.map((x,k) =>  <p key = {k}> {x} </p> )

  return(
    <div className={Features_Box}>

        <div>
            <h2>Features</h2>
            <p>{props.desc}</p>
        </div>

        <div>
            <h2>In The Box</h2>
            <div>
              {inbox}
            </div>
        </div>

    </div>
  )
}

