import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mostrar_alerta } from '../functions';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const Blocks = () => {
    // Se programan todos los hooks
    const url = 'http://localhost:4000/api/blocks';
    const [blocks, setBlocks] = useState([]); // Trae todos los bloques de la BD
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [progress, setProgress] = useState('');
    const [opcion, setOpcion] = useState('');
    const [title, setTitle] = useState('');

    // Hook de efecto para que al renderizar la página, se muestren todos los bloques
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

    // Funcionalidades para settear los nuevos bloques desde el modal
    const openModal = (opcion, id = '', description = '', startDate = '', endDate = '', progress = '') => {
        setId(id);
        setDescription(description);
        setStartDate(startDate);
        setEndDate(endDate);
        setProgress(progress);
        setOpcion(opcion);

        if (opcion === 1) {
            setTitle('Agregar bloque');
        } else if (opcion === 2) {
            setTitle('Editar bloque');
        }

        window.setTimeout(() => {
            document.getElementById('description').focus();
        }, 500);
    }

    //validamos que los campos no estén vacíos
    const validar = () => {
        let parametros;
        let metodo;
    
        if (description.trim() === '') {
            mostrar_alerta('Escribí una descripción para el bloque', 'warning');
        } else if (startDate.trim() === '') {
            mostrar_alerta('Ingresá hora de creación para el bloque', 'warning');
        } else if (endDate.trim() === '') {
            mostrar_alerta('Escribí una hora de finalización para el bloque', 'warning');
        } else if (String(progress).trim() === '') {
            mostrar_alerta('Escribí un progreso para el bloque', 'warning');
        } else {
            parametros = {
                id: id.trim(),
                description: description.trim(),
                startDate: startDate.trim(),
                endDate: endDate.trim(),
                progress: String(progress).trim()
            };
    
            metodo = opcion === 1 ? 'POST' : 'PUT';
    
            enviarSolicitud(metodo, parametros);    
        }
    }

    const enviarSolicitud = async(metodo, parametros) =>{
        await axios({method:metodo, url:url, data:parametros}).then(function(respuesta){
            let tipo = respuesta.data[0];
            let mensaje = respuesta.data[1];
            mostrar_alerta(mensaje, tipo);

            if(tipo === 'success'){
                document.getElementById('btncerrar').click();
                getBlocks();
            }
        })
        .catch(function(error){
            mostrar_alerta('Error en el envío de la solicitud', 'error');
            console.log(error);            
        }
    )}


    const eliminarBloque = (id, description) =>{
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:'¿Estás seguro de eliminar el bloque ' + description + '?',
            icon:'question', text:'Esta acción es irreversible',
            showCancelButton:true, confirmButtonText:'Sí, eliminar', cancelButtonText:'Cancelar'
        }).then((resultado)=>{
            if(resultado.isConfirmed){
                setId(id);
                enviarSolicitud('DELETE', {id:id});
            }
            else{
                mostrar_alerta('El bloque NO se eliminó', 'info');
            }
        })

    }
    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button onClick={() => openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalBlocks'>
                                <i className='fa-solid fa-circle-plus'></i> Crear block
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-borderer'>
                                <thead>
                                    <tr> <th>#</th>  <th>ID MONGO DB</th>  <th>DESCRIPCIÓN</th>  <th>HORA CREACIÓN</th> <th>HORA FINALIZACIÓN</th>  <th>PROGRESS</th>  <th>OPCIONES</th> </tr>
                                </thead>

                                <tbody className='table-group-divider'>
                                    {blocks.map((block, i) => (
                                        <tr key={block.id}>
                                            <td> {(i + 1)} </td>
                                            <td> {block.id} </td>
                                            <td> {block.description} </td>
                                            <td> {block.startDate} </td>
                                            <td> {block.endDate} </td>
                                            <td> {block.progress} </td>
                                            <td>
                                                <button onClick={() => openModal(2, block.id, block.description, block.startDate, block.endDate, block.progress)} className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalBlocks'>
                                                    <i className='fa-solid fa-edit'></i>
                                                </button>

                                                <button onClick={() => eliminarBloque(block.id, block.description)} className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div id='modalBlocks' className='modal fade' aria-hidden='true'>
                {/* Contenido del modal */}
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h5'> {title} </label> 
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                        </div>

                        <div className='modal-body'>
                            <input type='hidden' id='id'></input>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'> <i className='fa-solid fa-id-card-clip'></i> </span>
                                <input type='text' id='id' className='form-control' placeholder='id del bloque' value={id}
                                    onChange={(e) => setId(e.target.value)}></input>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'> <i className='fa-solid fa-comment'></i> </span>
                                <input type='text' id='description' className='form-control' placeholder='descripcion' value={description}
                                    onChange={(e) => setDescription(e.target.value)}></input>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'> <i className='fa-regular fa-clock'></i> </span>
                                <input type='text' id='startDate' className='form-control' placeholder='hora de creación' value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}></input>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'> <i className='fa-solid fa-clock'></i> </span>
                                <input type='text' id='endDate' className='form-control' placeholder='hora de finalización' value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}></input>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'> <i className='fa-solid fa-road-barrier'></i> </span>
                                <input type='text' id='progress' className='form-control' placeholder='progreso' value={progress}
                                    onChange={(e) => setProgress(e.target.value)}></input>
                            </div>

                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={()=>validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Guardar
                                </button>
                            </div>
                        </div>

                        <div className='modal-footer'>
                            <button type='button' id='btncerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blocks;
