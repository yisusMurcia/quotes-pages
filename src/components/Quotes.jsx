import React, {useState} from 'react';
import SelectAuthor from './SelectAuthor.jsx';

function Quotes(){
    const [quote, setQuote] = useState("Selecciona un autor para ver la frase");
    return (
        <>
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
