import React from 'react'
import SearchTable from '../component/Search/SearchTable';
import '../App.css';
import GridInven from '../component/Inventory/GridInven';
export default function Home() {
    return (
        <div className='home'>
            <SearchTable/>
            <GridInven/>
        </div>
    )
}
