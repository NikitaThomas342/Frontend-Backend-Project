import React from "react";
import Item from './sub-comp/favorite'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'

function Favorite() {

    const [favorite, setFavorite] = useState([])

    const user_id = useSelector(state=>state.user_id)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/getfavorite/?id=${user_id}`).then(res => {
            setFavorite(res.data)
        })
    }, [])

    return (
        <>
        <h2 style={{margin:35+'px'}}>My favorite</h2>
        <div class="container" style={{backgroundColor:"#444941",borderRadius:10+'px',border:1+'px '+'hidden '+ 'black',padding:45+'px'}}>
            <div class="d-flex flex-row flex-wrap justify-content-around">

            {favorite.length>0 ? (
                favorite.map((data)=>(
                    <Item key={data.id} item={data}/>
                ))
            ):(<h3 className="font-weight-normal text-white">No items in favorites</h3>)}
                
            </div>
        </div>
        </>
    );
}

export default Favorite;
