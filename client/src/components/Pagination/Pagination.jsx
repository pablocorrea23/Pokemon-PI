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

    // const onKeyDown = (e) => {
    //     if(e.keyCode === 13){ //sea igual a 13 porque es el codigo de la tecla entero de
    //         setPage(parseInt(e.target.value));
    //         if(parseInt(e.target.value < 1 || parseInt(e.target.value) > Math.ceil(pokemonsPerPage) || isNaN(parseInt(e.target.value)))){
    //             setInput(1);
    //             setPage(1);
    //         }else{
    //             setPage(parseInt(e.target.value));
    //         }
    //     }
    // };

    const onChange = e => {
        setInput(e.target.value);
    }


    return (
        <div className="DivStylePag">
            <button className="StyledButtonsPag" disabled={page === 1 || page < 1} onClick={previousPage}>⇦</button>
             <input className='InputPaginationPag'  onChange={e => onChange(e)} name='page' autoComplete="off" value={input}/> {/*onKeyDown={e => onKeyDown(e)} */}
            <p>de {pokemonsPerPage}</p>
            <button className='StyledButtonsPag' disabled={page === 4 || page > 4} onClick={nextPage}>⇨</button>
        </div>
    )
}