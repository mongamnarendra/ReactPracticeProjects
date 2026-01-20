import './App.css'
const Card = ({ title, imageUrl, price }) =>{
    return(
        <>
            <div>
                <h1 style={{textAlign:"center"}}>Cards</h1>
                <div>
                  <p>{title}</p>  
                  <img src={imageUrl} alt={title} />
                  <p>${price}</p>
                </div>
            </div>
        </>
    )
} 

export default Card;