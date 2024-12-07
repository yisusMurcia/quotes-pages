import React, {useEffect, useState} from 'react';
import getQuotes from '../api/getQuote.js';

const SelectAuthor = ({saveQuote}) => {
    const [quotes, setQuotes] = useState([]);
    const authors = [];
    async function saveQuotes(){
        try{
            setQuotes(await getQuotes());
        }catch(err){
            alert("Algo salio mal, intenta recargar la página");
        }
    }
    
    useEffect(()=>{saveQuotes()}, [])

    function setQuote(id){
        if(id == 0){
            saveQuote("Selecciona un autor para ver la frase")
        }
        for(let quoteObj of quotes){
            if(quoteObj.id == id){
                saveQuote(quoteObj.quote);
                break;
            }
        }
    }

    return (
        <>
            <label htmlFor="auhorSelection">Selecciona al autor</label>
            <select id='authorSelection' onChange={(e)=>setQuote(e.target.value)}>
                <option key={0} value={0}>Seleccione una opción</option>
                {
                    quotes.map((quote)=>{
                        authors.push(quote.author)
                        return <option key={quote.id} value={quote.id}>{authors.filter(author=>author == quote.author).length + " " + quote.author}</option>
                    })
                }
            </select>
        </>
    );
}

export default SelectAuthor;
