export default function Search({handleChange}){
    return(
        <input onChange={handleChange} type="text" placeholder="Поиск..."
        style={{border:"1px solid #ccc",
             padding:'0.6rem', marginBottom:'2rem'}}
        />
    )
}