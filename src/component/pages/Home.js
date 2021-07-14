import React from 'react'
import SearchTable from '../Search/SearchTable'
import '../../App.css';
import GridInven from '../Inventory/GridInven';
export default function Home() {
    return (
        <div className='home'>
            <SearchTable/>
            <GridInven/>
        </div>
    )
}
