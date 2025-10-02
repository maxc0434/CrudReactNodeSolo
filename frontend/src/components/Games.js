import React from 'react'
import { useState } from 'react'

function Games() {
    const [jeux, setJeux] = [useState([])]

  return (
        <div className="d-flex vh-10 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded border border-dark">

                <h1 className="mt-2"> Liste des Jeux</h1>
                <table className="table table-striped mt-5 mb-5 table-bordered">
                    <thead>
                        <tr>
                            <th>Nom</th>  
                            <th>Description</th>   
                            <th>Prix</th>
                            <th>Illustration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Parcourt le tableau student et affiche une ligne par étudiant
                            jeux.map((data, i) => (
                                <tr key={i}>  {/* La clé doit idéalement être unique, ici l'indice i */}
                                    <td>{data.name}</td>   
                                    <td>{data.caption}</td>  
                                    <td>{data.price}</td>
                                    <td>{data.photo}</td> 
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Games
