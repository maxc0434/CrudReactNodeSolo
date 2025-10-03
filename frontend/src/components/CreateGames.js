import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function CreateGames() {

    const [name, setName] = useState('')
    const [caption, setCaption] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const navigate = useNavigate();

     function handleSubmit(event){
        event.preventDefault();  // Empêche le rechargement automatique de la page
        axios.post('http://localhost:8081/create', {name, caption, price, photo})
        .then(res => {
            console.log("Created Games", res);  // Affiche la réponse dans la console
            navigate('/')  // Redirige vers la page d'accueil après succès
        })
        .catch(err =>console.log(err))  // Affiche une erreur en console si échec
    }



  return (
<div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit} >  {/* Appelle handleSubmit au submit */}
                    <h2 className='fw-bolder mb-5 text-center'> Ajouter un Jeu </h2>
                    
                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2 '> Nom </label>
                        <input 
                            placeholder='Tapez le nom du jeu ' 
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2'> Description </label>
                        <input 
                            placeholder=' Tapez la description du jeu' 
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setCaption(e.target.value)}  
                        />   
                    </div>
                    
                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2'> Prix </label>
                        <input 
                            placeholder='Tapez le prix du jeu' 
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setPrice(e.target.value)}  
                        />   
                    </div>

                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2'> Illustration </label>
                        <input 
                            placeholder='coller URL de la photo' 
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setPhoto(e.target.value)}  
                        />   
                    </div>

                    {/* Bouton pour soumettre le formulaire */}
                    <div className="text-center">
                    <button className='btn btn-outline-success mt-3 rounded-pill'>Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default CreateGames
