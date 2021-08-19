import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/primenow/assets21/AMZ/Hero/Desktop/f3vx-3265_Monoprix_TG-GW_hero_desktop_2x._CB659347224_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                    id="5468742" 
                    title="Harry Potter MG22060 (Hogwarts Crest) Mug, Noir et Blanc, Tasse en céramique originale, parfaite pour un cadeau, tasse à café à l'intérieur blanc, impression de haute qualité" 
                    price={5.99} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/71qMDJcOf1L._AC_SL1307_.jpg" 
                    />

                    <Product 
                    id="8745498" 
                    title="Igorrr, Savage Sinusoid, Album Vinyle (2017)" 
                    price={15.74} 
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81dETDSIlcL._SL1500_.jpg" 
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="8942635" 
                        title="Bandai - Maquette Gunpla - Gundam - MG 1/100 Gundam BARBATOS - Robot à Construire - MK58222/5058222" 
                        price={54.99} 
                        rating={5} 
                        image="https://m.media-amazon.com/images/I/51HnH4FapCL._AC_SL1000_.jpg" 
                        />
                        
                    <Product 
                        id="7486155" 
                        title="Oculus Quest 2 — Casque de réalité virtuelle tout-en-un dernière génération — 64 Go" 
                        price={339.99} 
                        rating={4} 
                        image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg" 
                        />   

                    <Product 
                        id="4594597" 
                        title="Arôme Oni 30ml - A&L ultimate Green Edition - Sans tabac ni nicotine - Vente interdite au moins de 18 ans" 
                        price={9.95} 
                        rating={5} 
                        image="https://m.media-amazon.com/images/I/51-EJ93HnqL._AC_.jpg" 
                        />
                </div>

                <div className="home__row">
                    <Product 
                        id="5487754" 
                        title="SAMSUNG ODYSSEY G9 49'' Ecran PC Gaming Incurvé 1000R, Dalle VA 49'', Résolution DWQHD (5120 x 1440), 240 Hz, 1ms, GSYNC Compatible, AMD FreeSync Premium Pro, HDR1000, Noir" 
                        price={1792.99} 
                        rating={4} 
                        image="https://m.media-amazon.com/images/I/711HTxM8v2L._AC_SL1500_.jpg" 
                        />
                </div>
                
            </div>
        </div>
    )
}

export default Home
