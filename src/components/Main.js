import React from 'react'

const Main = (props) => {
  return (
    <div>
      <h1 className='page-title'>Todo App</h1>
      <div className="row">
        <div className="columns medium-6 large-5 small-11 small-centered">               
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
