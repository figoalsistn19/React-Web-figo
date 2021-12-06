import './BuatTugas.css'

const BuatTugas = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTugas = {
            id: Math.floor(Math.random () * 100) + 1,
            title : "Makan terus"
        }

        props.onBuatTugas(newTugas)
        console.log(newTugas)

    }
    return (
        <form class="row g-3 " onSubmit={handleSubmit}>
            
            <div class="col-auto">
                
                <input type="text" class="form-control"  placeholder="lel"/>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">submit</button>
            </div>
        </form>
    )
}

export default BuatTugas
