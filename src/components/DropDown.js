import React, { useState } from 'react'

function DropDown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['React', 'JavaScript', 'Nodejs', 'HTML', 'CSS']
    return (
        <div className='dropdown'>
            <h1 className='heading'>Language for FrontEnd !!!</h1>
            <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>
                {selected}
                <span className='fas fa-caret-down'></span>
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {options.map(option => (
                        <div
                            onClick={e => {
                                setSelected(option)
                                setIsActive(false)
                            }}
                            className='dropdown-item'>{option}
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default DropDown
