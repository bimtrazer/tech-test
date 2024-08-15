import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function mostrar_alerta(mensaje, icono, foco='') {
    en_foco(foco);
    
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: mensaje,
        icon:icono
    })
    
    //función interna para este archivo, no la voy a exportar
    function en_foco(foco) {
        if(foco !== ''){
            document.getElementById(foco).focus();
        }
    }
}