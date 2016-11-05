import React from 'react'

const Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">     
        <h1>This is Man View</h1>   
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
