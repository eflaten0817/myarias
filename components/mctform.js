import React from 'react'

const MCTForm = ({data, item, onChange}) => {

    const filters = ["","","",""];
    const handleChangeVoice = (event) => {
       let voice =  event.target.value;
       filters[0] = voice;
    }
    const handleChangeFach = (event) => {
        let fach =  event.target.value;
        filters[1] = fach;
    }
    const handleChangeStyle = (event) => {
        let style =  event.target.value;
        filters[2] = style;
    }
    const handleChangeComposer = (event) => {
        let composer =  event.target.value;
        filters[3] = composer;
    }
    const getFilters = async () => {
        console.log("HELLO?");
    }
    return(
        <div className="w-full m-4">
        <h2 className="text-3xl p-4">{item}</h2>
        <div className="p-4">
          <form>
            <label className="block">
                <input type="string" name={item + " Filter"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  onChange={(e) => onChange(e)}></input>
            </label>
          </form>
        </div>
        
        </div>
    )
}

export default MCTForm