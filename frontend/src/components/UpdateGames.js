import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"



function UpdateGames() {

    const [name, setName] = useState('')
    const [caption, setCaption] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();



        useEffect(() => {
     const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8081/jeux/${id}`);
            const data = res.data;

            setName(data.name);
            setCaption(data.caption);
            setPrice(data.price);
            setPhoto(data.photo);
    
        } catch (error) {
            navigate("/");
        }};

    fetchData();
}, [id, navigate]);



     function handleSubmit(event){
        event.preventDefault();  // Empêche le rechargement automatique de la page
        const updateGames = {name, caption, price, photo}
        axios
        .put(`http://localhost:8081/jeux/${id}`, updateGames)
        .then(res => {
            console.log("Update Games", res);  // Affiche la réponse dans la console
            navigate('/')  // Redirige vers la page d'accueil après succès
        })
        .catch(err =>console.log(err))  // Affiche une erreur en console si échec
    }


  return (
<div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit} >  {/* Appelle handleSubmit au submit */}
                    <h2 className='fw-bolder mb-5 text-center'> Modifier un Jeu </h2>
                    
                    <div className='mb-2 text-center '>
                        <label htmlFor="" className='me-2 fw-bold'> Nom </label>
                        <input 
                            // placeholder='' 
                            value={name}
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2 mt-3 fw-bold'> Description </label>
                        <input 
                            // placeholder=''
                            value={caption}
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setCaption(e.target.value)}  
                        />   
                    </div>
                    
                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2 mt-3 fw-bold'> Prix </label>
                        <input 
                            // placeholder=''
                            value={price}
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setPrice(e.target.value)}  
                        />   
                    </div>

                    <div className='mb-2 text-center'>
                        <label htmlFor="" className='me-2 mt-3 fw-bold'> Illustration </label>
                        <input 
                            // placeholder=''
                            value={photo}
                            className='form-control w-50 mx-auto' 
                            type="text" 
                            onChange={(e) => setPhoto(e.target.value)}  
                        />   
                    </div>

                    {/* Bouton pour soumettre le formulaire */}
                    <div className="text-center">
                    <button className='btn btn-outline-success mt-3 '>Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default UpdateGames
