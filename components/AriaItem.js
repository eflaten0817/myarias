import React, {useState, useEffect} from 'react'
const AriaItem = ({ariaInfo}) => {
    return (
        <div className= "block">
            <div className="p-4">
                <div className="border-solid border-4 border-gray-600">
                    {ariaInfo.title}
                    <br></br>
                    {ariaInfo.opera}
                    <br></br>
                    {ariaInfo.composer}
                    <br></br>
                    {ariaInfo.voice}
                </div>
            </div>
        </div>
    )
}
export default AriaItem