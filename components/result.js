import React, {useState, useEffect} from 'react'
const Result = ({results}) => {
    return(
        <div className={bg + " w-1/4 p-4 text-white"}>
        <h2 className="text-3xl font-bold">{results.total}
          <div className="flex text-sm p-4">
            
            <div className="w-1/3 font-bold">{results.target}</div>
            
          </div>
        </h2>
        <h3 className="text-xl">{results.label}</h3>
      </div>
    )
}

export default Result