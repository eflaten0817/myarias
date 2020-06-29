import React, {useState, useEffect} from 'react'
const AriaItem = ({ariaInfo}) => {

    if (ariaInfo === undefined){
        return (
            <div className= "block">
            <div className="p-4">
                <div className="border-solid border-4 border-gray-600">
                    Title
                    <br></br>
                    Opera
                    <br></br>
                    Composer
                    <br></br>
                    Voice
                </div>
            </div>
        </div>
        )
    }
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