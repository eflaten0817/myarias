import React from "react";

const AriaItem = ({ ariaInfo }) => {
    return (
        <div className="block">
            <div className="p-4">
                <div className="border-solid border-4 border-gray-600">
                    Title: {ariaInfo.Title}
                    <br></br>
                    Opera: {ariaInfo.Opera}
                    <br></br>
                    Composer: {ariaInfo.Composer}
                    <br></br>
                    Voice: {ariaInfo.Voice}
                </div>
            </div>
        </div>
    );
};

export default AriaItem;
