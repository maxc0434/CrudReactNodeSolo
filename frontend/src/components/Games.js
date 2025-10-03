import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Games() {
  const [jeux, setJeux] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setJeux(res.data))
      .catch((err) => console.log(err));
  });


      const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/jeux/' + id)  
            window.location.reload()  
        } catch(err) {
            console.log(err); 
        }
    }

  return (
    // <div className="d-flex vh-100 justify-content-center align-items-center listDiv">
    //     <div className="w-50 bg-white rounded border border-dark">

    //         <h1 className="mt-2"> Liste des Jeux</h1>
    //         <table className="table table-striped mt-5 mb-5 table-bordered">
    //             <thead>
    //                 <tr>
    //                     <th>Nom</th>
    //                     <th>Description</th>
    //                     <th>Prix</th>
    //                     <th>Illustration</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     // Parcourt le tableau student et affiche une ligne par étudiant
    //                     jeux.map((data, i) => (
    //                         <tr key={i}>  {/* La clé doit idéalement être unique, ici l'indice i */}
    //                             <td>{data.name}</td>
    //                             <td>{data.caption}</td>
    //                             <td>{data.price}</td>
    //                             <td> <img src={data.photo} alt=""/> </td>
    //                             <td> <button> Modifier </button></td>

    //                         </tr>
    //                     ))
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // </div>

    <div className="d-flex vh-100 justify-content-center align-items-center listDiv">
      <div className="w-75 bg-white rounded border border-dark">
        <h1 className="mt-2 text-center">Liste des Jeux</h1>
        <div className="row">
          {jeux.map((data, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 m-3">
                <img
                  className="card-img-top w-50"
                  src={data.photo}
                  alt=""
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.caption}</p>
                  <p className="card-text">
                    <strong>{data.price} €</strong>
                  </p>
                  <Link to={`/update/${data.id}`} className="btn btn-primary">Modifier</Link>
                  <button className="btn btn-danger" onClick={ e => handleDelete(data.id)}> Supprimer</button>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="d-flex bg-white justify-content-center align-items-center">
            <Link to="/create" className="btn btn-success">Ajouter</Link>

          </div>
      </div>
    </div>
  );
}

export default Games;
