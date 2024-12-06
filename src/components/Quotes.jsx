import React, {useEffect, useState} from 'react';
import getQuotes from '../api/getQuote.js';
import SelectAuthor from './SelectAuthor.jsx';

function Quotes(){
    const [quote, setQuote] = useState("Selecciona un autor para ver la frase");
    return (
        <>
            <header>
            <h1>Frases</h1>
            </header>
            <main>
                <p>Selecciona al autor, lee la frase</p>
                <hr></hr>
                <section>
                    <SelectAuthor saveQuote= {setQuote}/>
                    <p>{quote}</p>
                </section>
            </main>
        </>
    );
}

export default Quotes;
