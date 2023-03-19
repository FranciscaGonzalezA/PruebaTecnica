import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components";

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/entidad", {}, [navigate]))
  const handleOnClick2 = useCallback(() => navigate("/selector", {}, [navigate]))
  return (
    <div class="container">
      <h1>Seleccione página</h1>
      <ButtonComponent infoBoton={"Ingresar usuario"} handleOnClick={handleOnClick} />
      <br/>
      <ButtonComponent infoBoton={"Editar usuario"} handleOnClick={handleOnClick2} />
    </div>
  )
}

export default HomePage;