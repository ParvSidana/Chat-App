import React from 'react'

const Gender = (props) => {
    return (
        <div className='flex p-1 mt-1 gap-2'>
            <div className='form-control'>

                <label className={`label gap-2 cursor-pointer  
                ${props.selectedgender === "male" ? "selected" : ""}`} >
                    <span className='label-text text-base'>Male</span>

                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        // value={props.selectedGender}
                        checked={props.selectedgender === "male"}
                        onChange={() => props.onCheckboxChange("male")} />

                </label>
            </div >
            <div className='form-control'>

                <label className={`label gap-2 cursor-pointer  
                ${props.selectedgender === "female" ? "selected" : ""}`}>
                    <span className='label-text text-base'>Female</span>
                    <input type="checkbox" className="checkbox border-slate-900"
                        // value={props.selectedGender}

                        checked={props.selectedgender === "female"}
                        onChange={() => props.onCheckboxChange("female")} />

                </label>
            </div>


        </div >
    )
}

export default Gender