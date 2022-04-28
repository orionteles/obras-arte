import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiObras from '../../services/apiObras'
import {FaRegHandPointLeft} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

const ObrasDetalhes = () => {

    const params = useParams()

    const [obra, setObra] = useState({})

    useEffect(() => {
        apiObras.get('artworks/' + params.id).then(resultado => {
            setObra(resultado.data.data)
        })
    }, [])

    console.log(obra);

    return (
        <div>
            <Row>
                {obra.image_id &&
                    <Col md={4}>
                        <Card border="danger">
                            <Card.Header className="bg-danger text-white">Foto</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + obra.image_id + "/full/843,/0/default.jpg"} />
                                <a target="_blank" className='btn btn-primary mt-2' href={"https://www.artic.edu/iiif/2/" + obra.image_id + "/full/843,/0/default.jpg"}>
                                    <BiLinkExternal /> Nova Aba </a>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                <Col md={8}>
                    <Card border="danger">
                        <Card.Header className="bg-danger text-white">
                            {obra.title}
                        </Card.Header>
                        <Card.Body>
                            <p><strong>Artista: </strong>{obra.artist_title}</p>
                            <p><strong>Origem: </strong>{obra.place_of_origin}</p>
                            <p><strong>Dimensões: </strong>{obra.dimensions}</p>
                            <p><strong>Categoria: </strong>{obra.style_title}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Link className='btn btn-success mt-2' to={-1}><FaRegHandPointLeft /> Voltar</Link>

        </div>
    )
}

export default ObrasDetalhes