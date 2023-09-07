import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Formulario({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [novedades, setNovedades] = useState(true);
  const [promociones, setPromociones] = useState(false);
  const [errores, setErrores] = useState({
    name: {
      error: false,
      mensaje: "Debe contener al menos 3 caracteres",
    },
  });

  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      return {
        name: {
          error: false,
          mensaje: "",
        },
      };
    } else {
      return {
        name: {
          error: true,
          mensaje: "Debe contener al menos 3 caracteres",
        },
      };
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            name,
            lastName,
            email,
            novedades,
            promociones,
          });
        }}
      >
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          error={errores.name.error}
          helperText={errores.name.error ? errores.name.mensaje : ""}
          onBlur={(e) => {
            setErrores(validarNombre(e.target.value));
          }}
        />

        <TextField
          id="lastName"
          label="Apellido"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={promociones}
                onChange={(e) => setPromociones(e.target.checked)}
              />
            }
            label="Promociones"
          />
          <FormControlLabel
            control={
              <Switch
                checked={novedades}
                onChange={(e) => setNovedades(e.target.checked)}
              />
            }
            label="Novedades"
          />
        </FormGroup>

        <Button variant="contained" type="submit">
          Registrarse
        </Button>
      </form>
    </>
  );
}
