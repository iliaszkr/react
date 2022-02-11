import App from '../App.js'
function Cards(props) {
    let couleur
    if (props.articles.stock==1) {
        couleur = "yellow"
    } else if (props.articles.stock==0){
        couleur= "red"
    } else {
        couleur= "white"
    }

    
    return (
        <div style={{backgroundColor: couleur}} className="card pb-3 justify-content-center align-items-center  d-flex flex-column">
            <img className="img-fluid photocard" src={props.articles.photo} alt="" />
            <h4>{props.articles.nom}</h4>
            <p> prix: {props.articles.prix}€</p>
            <p> stock: {props.articles.stock}</p>
            
            {
                (props.articles.stock !== 0 && props.argent > props.articles.prix) && <button className="bouton  py-2 mx-0" id={props.id} onClick={props.addToPanier}>Acheter</button>
            }
        </div>
    );
};

export default Cards;