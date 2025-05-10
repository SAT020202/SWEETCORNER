<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function index()
    {
        // Exemple de données simulées
        $produits = [
            ['id' => 1, 'nom' => 'Produit 1'],
            ['id' => 2, 'nom' => 'Produit 2'],
            ['id' => 3, 'nom' => 'Produit 3'],
        ];

        return response()->json($produits); // Retourne les produits en JSON
    }
}