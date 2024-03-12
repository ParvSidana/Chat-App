import React from 'react'

const Gender = () => {
    return (
        <div className='flex p-1 mt-1 gap-2'>
            <div className='form-control'>

                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text text-base'>Male</span>
                    {/* <input type="radio" className='radio border-slate-900' /> */}
                    <input type="radio" name="radio-1" className="radio border-slate-900" />

                </label>
            </div>
            <div className='form-control'>

                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text text-base'>Female</span>
                    <input type="radio" name="radio-1" className="radio border-slate-900" />

                </label>
            </div>


        </div>
    )
}

export default Gender