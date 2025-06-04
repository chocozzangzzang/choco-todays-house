import React, { useState } from 'react'

const MiddleBar = () => {

    const menus = ['ALL', 'CLOSET', 'BED', 'DESK', 'RECOMMEND'];
    const [ searchQuery, setSearchQuery ] = useState("");
    const searchFurniture = () => {
        console.log(searchQuery);
        setSearchQuery("");
    }
    return (
        <div>
            <div className='img-box'>
                <img src="https://ohstory.io/wp-content/uploads/2022/11/1_-Ohouse_mark_horizontal_black-1024x351.png"/>
            </div>
            <div className='middle-bar'>
                <ul className='ul-design'>
                    {menus.map((menu) => <li>{menu}</li>)}
                </ul>
                <div className='search-div'>   
                    <svg onClick={searchFurniture} 
                        dataSlot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" />
                    </svg>
                    <input className='input-design' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default MiddleBar