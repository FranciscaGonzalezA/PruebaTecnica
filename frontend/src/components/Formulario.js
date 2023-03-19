import React from "react";
import "./Formulario.css";

/* Hace falta el uso de hooks, para conectar a la base y guardar datos */

<link rel="stylesheet" href="Formulario.css" />
const UserFormComponent = () => {
  return (
    <body>
      <form>
        <label for="run">R.U.N.:  </label>
        <input type="text" id="run" name="run" pattern="^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9Kk]{1}$" placeholder="11.111.111-1" />

        <fieldset class="nombre">
          <label for="nombre">Nombre: </label>
          <input type="text" id="nombre" name="nombres" placeholder="Nombres" />
          <input type="text" id="nombre" name="apellidopaterno" placeholder="Apellido Paterno" />
          <input type="text" id="nombre" name="apellidomaterno" placeholder="Apellido Materno" />
        </fieldset>

        <label for="mail">Email:</label>
        <input type="email" id="mail" name="mail" placeholder="correo@correo.cl" /><br />

        <label>Sexo:</label>
        <input type="radio" id="femenino" name="sexo" />
        <label for="femenino">Femenino</label>
        <input type="radio" id="masculino" name="sexo" />
        <label for="femenino">Masculino</label><br />

        <label for="fechanacimiento">Fecha nacimiento:</label>
        <input type="date" id="fechanacimiento" name="fechanacimiento" /><br />

        <label for="region">Región:</label>
        <select id="region" name="region">
          <option>Seleccione</option>
          <option>Metropolitana</option>
        </select><br />

        <label for="ciudad">Ciudad:</label>
        <select id="ciudad" name="ciudad">
          <option>Seleccione</option>
          <option>Santiago</option>
        </select><br />

        <label for="comuna">Comuna:</label>
        <select id="comuna" name="comuna">
          <option>Seleccione</option>
          <option>Peñalolen</option>
        </select><br />

        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" placeholder="Dirección" /><br />

        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" placeholder="+56999999999" pattern="^\+56(\s?)(0?9)(\s?)[9876543]\d{7}$" /><br />

        <label for="observaciones">Observaciones:</label>
        <textarea id="observaciones" name="observaciones" placeholder="Observaciones"></textarea><br />


        <fieldset class="boton">
          <button type="reset" id="volver">Volver</button>
          <button type="submit" id="guardar">Guardar</button>
        </fieldset>

        <br />
      </form>
    </body>
  )
}

export default UserFormComponent;