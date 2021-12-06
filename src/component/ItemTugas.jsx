import './ItemTugas.css'


const ItemTugas = (props) => {
    console.log(props.dataTugas)
    return (
        <div>
            <ul>{
                props.dataTugas.map((tugas) => {
                    //{id:1, title:'Sarapan'}
                    return <li key={tugas.id}> {tugas.title}</li>
                })
                }
            </ul>
        </div>
    )
}

export default ItemTugas