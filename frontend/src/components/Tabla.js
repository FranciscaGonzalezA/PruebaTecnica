import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components";
import "./Tabla.css";

/* los atributos: usuarios, eliminarUsuario, setUsuario,
    están pensados para mostrar los elementos de la base
    de datos, aunque no lo logré conectar, por lo que el
    código que lo permite ha quedado comentado.
    Además ingreso un par de datos manualmente */

<link rel="stylesheet" href="Tabla.css" />
const UserTableComponent = ({ usuarios, eliminarUsuario, setUsuario }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/entidad", {}, [navigate]))
  return (
    <div class="container">
      <ButtonComponent infoBoton={"Agregar nueva persona"} handleOnClick={handleOnClick} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>R.U.T.</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Luisa Alvarado Collao</th>
            <td>6.477.197-3</td>
            <td>
              <button type="reset" id="volver">Editar</button>
              <button type="submit" id="guardar">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th>Javier Alonso García Castillo</th>
            <td>23.793.914-K</td>
            <td>
              <button type="reset" id="volver">Editar</button>
              <button type="submit" id="guardar">Eliminar</button>
            </td>
          </tr>
          {/* {usuarios.map((usuario) => (
            <tr>
              <th scope="row">{usuario.nombres} {usuario.apellidopaterno} {usuario.apellidomaterno}</th>
              <td>{usuario.runcuerpo} {usuario.rundigito}</td>
              <td>{usuario.mail}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => { eliminarUsuario(usuario.id) }}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuario(usuario)
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default UserTableComponent;