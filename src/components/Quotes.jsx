import React, {useState} from 'react';
import getQuotes from '../api/getQuote.js';

function Quotes(){
    const [quotes, setQuotes] = useState([]);
    const [quoteId, setQuoteId] = useState(-1);

    async function saveQuote(){
        let fetchQuotes = await getQuotes();
        if(quotes != fetchQuotes){
            setQuotes(await getQuotes());
        }
    }

    saveQuote()

    function addAuthors(selectEl){
        const authors = []
        for(let obj of quotes){
            const authorOption = document.createElement("option");
            authorOption.value = obj.id;

            const author = obj.author;
            if(authors.includes(author)){
                let times = authors.filter(name=> name == author);
                authorOption.textContent = author + ` ${times.length}`;
            }else{
                authorOption.textContent = author;
            }

            authors.push(author)
            selectEl.appendChild(authorOption);
        }
    }
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
                        <select name="author" id="author" onFocus={e=>addAuthors(e.target)} onClick={e=>{
                            setQuoteId(e.target.selectedIndex)
                            }}>
                            <option value="-1">Selecciona el autor</option>
                        </select>
                    </div>
                    <div id="quote-div">
                    </div>
                </section>
            </main>
        </>
    );
}

export default Quotes;
