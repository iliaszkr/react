import { useState } from 'react';
import Cards from './components/Cards'
import coca from './img/cocacola.png'
import up from './img/7up.png'
import fanta from './img/fanta.png'


function App(props) {
  const [panier, setPanier] = useState([])
  const [articles, setArticles] = useState([
    {
      nom: "Coca Cola",
      stock: 5,
      prix: 1.50,
      photo: coca
    },
    {
      nom: "Fanta",
      stock: 5,
      prix: 1.20,
      photo: fanta
    },
    {
      nom: "7 UP",
      stock: 5,
      prix: 1.80,
      photo: up
    }
  ])

  const [argent, setArgent] = useState(20)
  const addToPanier = (i) => {
    let newArticle = [...articles]
    console.log(panier);
    if (argent >= newArticle[i].prix && newArticle[i].stock > 0) {
      setArgent(argent - newArticle[i].prix)
      panier.push(newArticle[i])
      if (newArticle[i].stock > 0) {
        newArticle[i].stock -= 1
      }
    }
    setArticles(newArticle)
   
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1>Mon argent:{argent.toFixed(2)}</h1>

      <div className="row d-flex justify-content-center align-items-center gap-2">
        {articles.map((element, i) => {
          return (
            <div key={i} className="col-lg-3">
              <Cards
                argent = {argent}
                articles={element}
                id={element.id}
                addToPanier={() => addToPanier(i)}
              />
              
            </div>)
        })}
      </div>
      {panier.map((x,i)=> {
        return(
          <div className="d-flex gap-3" key={i}>
            <p>Mon sac a {x.nom}</p> 
            <button onClick={()=>{
              let copy = [...panier]
              let copyArticles = [...articles]
              copy.splice(i ,1)
              setArgent(argent+x.prix)
              copyArticles[copyArticles.indexOf(x)].stock++
              setArticles(copyArticles)
              setPanier(copy)
            }}>retirer</button>
            </div>

        )
      })}
    </div>
  );
};

export default App;
