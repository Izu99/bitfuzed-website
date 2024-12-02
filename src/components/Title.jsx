import React from 'react'

const Title = ({text, classContainer}) => {
  return (
    <div className='flex'>
      <h2 className='mx-auto font-semibold mt-20 mb-8 font-sub-header'>{text}</h2>
    </div>
  );
}

export default Title