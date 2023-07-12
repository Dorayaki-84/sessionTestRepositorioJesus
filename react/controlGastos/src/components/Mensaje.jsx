import React from 'react'

const Mensaje = ({children, tipo}) => {
    return (
        <div className={`alerta ${tipo}`}> {children}
        
        </div>
    )
}

export default Mensaje

//esto hay que importarlo en el componente que se va a usar, en este caso en NuevoPresupuesto.jsx
