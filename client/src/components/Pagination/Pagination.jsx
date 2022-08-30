import React, { useState } from "react";
import './Pagination.css';


export default function Pagination({ page, setPage, pokemonsPerPage }) {

    const [input, setInput] = useState(1)

    function nextPage() {
        setInput(input + 1)
        setPage(page + 1);
    }

    function previousPage() {
        setInput(input - 1)
        setPage(page - 1);
    }


    return (
        <div className="DivStylePag">
            <button className="StyledButtonsPag" disabled={page === 1 || page < 1} onClick={previousPage}>⇠</button>
            <input className='InputPaginationPag' name='page' autoComplete="off" type="text" defaultValue={input}/>
            <p>de {pokemonsPerPage}</p>
            <button className='StyledButtonsPag' disabled={page === 4 || page > 4} onClick={nextPage}>⇢</button>
        </div>
    )
}