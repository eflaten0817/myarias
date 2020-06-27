import React, {useState, useEffect} from 'react'
const AriaItem = ({ariaInfo}) => {
    return (
        <div className= "block">
            <div className="p-4">
                <div className="border-solid border-4 border-gray-600">
                    {ariaInfo.Title}
                    <br></br>
                    {ariaInfo.Opera}
                    <br></br>
                    {ariaInfo.Composer}
                    <br></br>
                    {ariaInfo.Voice}
                </div>
            </div>
        </div>
    )
}
export default AriaItem