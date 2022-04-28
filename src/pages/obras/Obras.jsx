import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiObras from '../../services/apiObras'
import {FiSearch} from 'react-icons/fi'
import {DiAndroid} from 'react-icons/di'

const Obras = () => {

    const [obras, setObras] = useState([])
    useEffect(() => {
        apiObras.get('artworks?limit=100').then(resultado => {
            setObras(resultado.data.data)
        })
    }, [])

    console.log(obras);

    return (
        <div>
            <h1 className='mb-3'><DiAndroid  style={{fontSize:'30px', color: '#98cb00'}} /> Obras de Arte de Chicago</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhar</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {obras.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link to={'/obras/' + item.id}>
                                    <FiSearch />
                                </Link>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.artist_title}</td>
                            <td>{item.department_title}</td>
                            <td>
                                <img height={100} src={"https://www.artic.edu/iiif/2/" + item.image_id + "/full/843,/0/default.jpg"} />    
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>


    )
}

export default Obras