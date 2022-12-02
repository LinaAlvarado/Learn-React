import PropTypes from 'prop-types';

// Pone props por default 
export const Button =({text,name ='user'})=>{
 return(
    <button>
      {text} -{name}
    </button>
 ) 
}

// Libreria instalable para dar orientación a los desarrolladores del tipo de props del componente
Button.prototypes = {
    text:PropTypes.string.isRequired
}

// 2 forma para poner props por defecto
// Button.defaultProps = {
//     name='nombre por defecto'
// }