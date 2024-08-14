import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { mostrar_alerta } from '../functions';

const Blocks = () => {
    //se programan todos los hooks
    const url = 'http://localhost:4000/api/blocks';
    const [blocks, setBlocks] = useState([]); //trae todos los bloques de la bd
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(''); // Corrección en el nombre de la variable
    const [progress, setProgress] = useState('');

    //hook de efecto para que al renderizar la página, se muestren todos los bloques
    useEffect(() => {
        getBlocks();
    }, []);

    const getBlocks = async () => {
        try {
            const respuesta = await axios.get(url);
            setBlocks(respuesta.data);
        } catch (error) {
            console.error("Error al obtener los bloques:", error);
        }
    }

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalBlocks'>
                                <i className='fa-solid fa-circle-plus'></i> Crear block
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='modalBlocks'>
                {/* Contenido del modal */}
            </div>
        </div>
    )
}

export default Blocks;
