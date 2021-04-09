import React from 'react'

const Progress = (props) => {
const {total, goal} = {...props}

  return (
    <>
      <h2 className='mb-4'>
        Raised ${total} of <span className='text-muted'>${goal}</span>
      </h2>
      <div className='progress'>
        <div
          className='progress-bar bg-success'
          role='progressbar'
          style={{ width: '25%' }}
          aria-valuenow='25'
          aria-valuemin='0'
          aria-valuemax='100'
        >
          {((total/goal)*100).toFixed(2)}%
        </div>
      </div>
    </>
  )
}

export default Progress
