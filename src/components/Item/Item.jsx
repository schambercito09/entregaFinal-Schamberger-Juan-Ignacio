import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, name, url}) => {
  return (
    <div className="border m-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img src={url} alt="" />
                <p className="card-text"></p>
                <Link to={`/item/${id}`} >
                <button className="btn btn-outline-success">Detalle</button>
                </Link>
                

            </div>
        </div>
    </div>
  )
}
