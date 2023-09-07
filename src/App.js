import "./App.css";
import Formulario from "./Components/Formulario";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  const handleSubmit = (valores) => {
    console.log("APP", valores);
  };
  return (
    <Container componente="section" maxWidth="xs">
      <Typography variant="h4" component="h1" align="center">
        Formulario de Registro
      </Typography>

      <Formulario handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
