import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Importer l'instance Axios

const Produits = () => {
    const [produits, setProduits] = useState([]); // État pour stocker les produits

    useEffect(() => {
        // Appel API pour récupérer les produits
       api.get('/produits')
            .then(response => {
                console.log('Données reçues :', response.data); // Vérifiez les données dans la console
                setProduits(response.data); // Mettre à jour l'état avec les données reçues
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des produits :', error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {produits.map(produit => (
                    <li key={produit.id}>{produit.nom}</li>
                ))}
            </ul>
        </div>
    );
};

export default Produits;