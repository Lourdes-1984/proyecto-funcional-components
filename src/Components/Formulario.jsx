import React from "react";
import Button from "@mui/material/Button";

export default function Formulario() {
  return (
    <>
      <h1>Formulario de Registro</h1>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Apellido</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Promociones</label>
        <input type="checkbox" />
        <label htmlFor="">Novedades</label>
        <input type="checkbox" />

        <Button variant="contained">Registrarse</Button>
      </form>
    </>
  );
}
