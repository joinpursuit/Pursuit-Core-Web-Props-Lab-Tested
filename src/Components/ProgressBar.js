import React from 'react'

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const container = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    
  }

  const filler = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center'
  }

  const label = {
   
    color: 'white',
    fontWeight: 'bold'
  }
    return (
      <div className="progress" style={container} >
      <div style={filler} >
        <span style={label}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;

