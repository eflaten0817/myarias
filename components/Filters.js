import React, {useState, useEffect} from 'react'

const Filters = ({handleChangeComposer,handleChangeFach, handleChangeStyle, handleChangeVoice}) => {

    return (
        <div className="flex text-center">
            <div className="w-full m-4">
                <h1 className="text-4xl">Aria Search Tool</h1>
            </div>
        </div>
        <div className="flex text-center">
            <div className="w-full m-4">
                <div className="w-full m-4">
                    <div className="p-4">
                        <form>
                            <label className="block">
                            Select Voice Type: &nbsp; 
                                <select onChange={handleChangeVoice}>
                                    <option value="Undefined">-------</option>
                                    <option value="Soprano">Soprano</option>
                                    <option value="tenor">Tenor</option>
                                    <option value="mezzo">Mezzo</option>
                                    <option value="bass">Bass</option>
                                </select>
                            </label>
                         </form>
                    </div>
                    <div className="p-4">
                        <form>
                            <label className="block">
                            Select Fach: &nbsp; 
                                <select onChange={handleChangeFach}>
                                    <option value="Undefined">-------</option>
                                    <option value="Lyric">Lyric</option>
                                    <option value="Coloratura">Coloratura</option>
                                    <option value="Dramatic">Dramatic</option>
                                    <option value="Spinto">Spinto</option>
                                </select>
                            </label>
                            </form>
                    </div>
                    <div className="p-4">
                        <form>
                            <label className="block">
                            Select Style: &nbsp; 
                                <select onChange={handleChangeStyle}>
                                    <option value="Undefined">-------</option>
                                    <option value="Verismo">Verismo</option>
                                    <option value="Bel Canto">Bel Canto</option>
                                    <option value="Singspiel">Singspiel</option>
                                    <option value="American">American</option>
                                </select>
                            </label>
                        </form>
                    </div>
                    <div className="p-4">
                        <form>
                            <label className="block">
                            Select Composer: &nbsp; 
                                <select onChange={handleChangeComposer}>
                                    <option value="Undefined">-------</option>
                                    <option value="mozart">Mozart</option>
                                    <option value="puccini">Puccini</option>
                                    <option value="verdi">Verdi</option>
                                    <option value="bernstein">Bernstein</option>
                                </select>
                            </label>
                            <br></br>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateArias}>
                            Find My Arias
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters