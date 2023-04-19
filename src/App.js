// Realizar una lista de X, en la que se pueda agregar elementos
//Y eliminarlos

// borrar por id modificando el array por un bojeto con id y nombre

import "./styles.css";
import { useState } from "react";
import {
  Button,
  Paper,
  Box,
  TextField,
  IconButton,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function App() {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState({});

  function handleNewItem(e) {
    const newItem = {
      id: new Date().getTime(),
      name: e.target.value
    };
    setItem(newItem);
  }

  function addItem() {
    setLista((lista) => [...lista, item]);

    setItem({ name: "" });
  }

  function eraseItem(person) {
    const nuevaLista = lista.filter((id) => id.id !== person.id);
    setLista(nuevaLista);
  }
  console.log(lista);
  console.log(item);

  return (
    <Paper sx={{ maxWidth: "600px", margin: "0 auto", p: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <h1>Mi lista</h1>
        <h2>Agrega una persona a la lista</h2>

        {lista.map((person) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "whitesmoke",
              width: "100%",
              mb: 2
            }}
            key={person.id}
          >
            <Typography sx={{ fontWeight: "bold" }}>{person.name}</Typography>
            <IconButton aria-label="delete" onClick={() => eraseItem(person)}>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        ))}

        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label="Introduzca Nombre"
          onChange={handleNewItem}
          type="text"
          value={item.name}
        />
        <Button sx={{ mt: 2 }} fullWidth variant="contained" onClick={addItem}>
          Agregar
        </Button>
      </Box>
    </Paper>
  );
}
