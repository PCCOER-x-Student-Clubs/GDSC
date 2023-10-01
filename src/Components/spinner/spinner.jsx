import React from 'react' ;
import "./spinner.css" ;

export const Spinner = () => {
  return (
    <div className="spin">
            <div className="spinner"></div>
            <p className="load">Loading...</p>
    </div>
  )
}
