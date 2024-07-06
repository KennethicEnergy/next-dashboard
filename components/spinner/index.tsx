import React from 'react'

const Spinner = ({ className } : any) => {
  return (
    <div className={"animate-spin rounded-full bg-white border-gray-700 border-t-white border-2 " + className}/>
  );
}

export default Spinner;