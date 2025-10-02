const express = require("express");  // Importe le framework Express
const app = express();  // Initialise une application Express
const cors = require("cors");  // Importe le module CORS
const mysql = require("mysql2")  // Importe mysql2 pour interagir avec MySQL

// Options de configuration CORS
const corsOptions = {
    origin: [
        'http://localhost:3000',   // Autorise l'accès depuis localhost:3000 => FRONTEND
        'http://localhost:8081',   // Autorise l'accès depuis localhost:8081 => BACKEND
    ],
    optionsSuccessStatus: 200,  // Code de statut de succès pour OPTIONS
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',  // Méthodes HTTP autorisées
    headers: 'Content-Type, Autorization',  // En-têtes autorisés (⚠️ "Autorization" -> devrait être "Authorization")
    credentials: true,  // Autorise l'envoi de cookies/session cross-origin
};

// Middlewares
app.use(express.json());  // Permet à Express de lire les requêtes JSON
app.use(cors(corsOptions))  // Active CORS avec les options définies

// Connexion à la base de données MySQL
const database = mysql.createConnection({
  host: 'localhost',   // Hôte de la base
  user: 'root',        // Identifiant MySQL
  password: '',        // Mot de passe (⚠️ éviter de laisser vide et en clair)
  database: 'jeuxvideos' // Nom de la base
})




// Premier EndPoint (= route, requetage, execution de la requete, gestion des erreurs ) pour récupérer tous les jeux de la liste en bdd.
app.get ("/", (req, res) => {
    const sql = "SELECT * FROM jeux";
    database.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});









// Lancement du serveur sur le port 8081
app.listen(8081, () => {
  console.log("Server is running on port 8081"); // Affiche un message de confirmation
});