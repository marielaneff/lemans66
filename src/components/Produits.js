import React from 'react';
import config from '../../config';



export default function Produits() {
  return (
  
     


     
        
          <div className="row">

      
            {config.produits.map(produits => {
              const { titre, prix, description, lien } = produits;
              return (
                <div class="col-sm-3" key={prix}>
              
                    <span className="label">{titre}</span>
                 
                </div>
              );
            })}
          </div>
       
  
  );
}

