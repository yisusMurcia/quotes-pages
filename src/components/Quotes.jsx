import React, {useState} from 'react';
import getQuotes from '../api/getQuote.js';

function Quotes(){
    const [quotes, getQuote] = useState("")
    async function saveQuote(){
        getQuote(await getQuotes())
        console.log(quotes)
    }
    saveQuote();
    return (
        <>
            <header>
            <h1>Frases</h1>
            </header>
            <main>
                <p>Selecciona al autor, lee la frase</p>
                <hr></hr>
                <section>
                    <div>
                        <label htmlFor="author">Selecciona el autor</label>
                        <select name="author" id="author">
                            <option value="-1">Selecciona el autor</option>
                        </select>
                    </div>
                    <div id="quote-div">
                        <p>La frase aparecerá aquí</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Quotes;
