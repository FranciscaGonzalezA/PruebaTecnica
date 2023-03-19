import React from "react";

const ButtonComponent = ({infoBoton, handleOnClick}) => {
  return (
      <div class="boton">
        <button 
        class="btn btn-success" 
        type="submit" 
        onClick={()=>{
          handleOnClick();
        }}>
          {infoBoton}
        </button>
      </div>
  )
}

export default ButtonComponent;