import React from 'react'
import BuatTugas from './BuatTugas.jsx'
import ItemTugas from './ItemTugas.jsx'
import { useState } from 'react'

const ListTugas = () => {
    const tugas = [
        {id: 1, title: 'Sarapan'},
        {id: 2, title: 'Makan siang'},
        {id: 3, title: 'Makan Malam'},
        ];
        
    const eventBuatTugas = (todos) => {
        tugas.push(todos)
        console.log(tugas)
    }
    


    return (
        <div>
            <h1 className="text-success"> List Tugas Fg</h1>
            <BuatTugas onBuatTugas={eventBuatTugas}/>
            <ItemTugas dataTugas={tugas} />
        </div>
    )
}
export default ListTugas