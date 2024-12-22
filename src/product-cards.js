

function Productcard({title,price,image,rating}){
    return (
        <div className="card">
            <img src={image}/>
            <p>{title}</p>
            <p>${price}</p>
        </div>
    )
}

export default Productcard;