import { Box, Button, Dialog, DialogActions, Grid, TextField } from '@mui/material';
import type { NextPage } from 'next';
import ListaAula from '../src/components/ListaAula/ListaAula';
import { useIndex } from '../src/hooks/pages/useIndex';

// const Aulas: NextPage = () => {
//   const { 
//     listaProfessores, 
//     nome, 
//     setNome, 
//     email, 
//     setEmail, 
//     professorSelecionado,
//     setProfessorSelecionado,
//     marcarAula,
//     listaAulas, 
//     setListaAulas
//   } = useIndex();

const Aulas: NextPage = () => {
  const aulas: Aula[] = [
    {
      id: 7,
      nome: "Marinalva Alves",
      email: "nalvinha78@gmail.com",
      professor: 4
    },
    {
      id: 8,
      nome: "Marcelo Henrique",
      email: "henrimarcelo@yahoo.com.br",
      professor: 5
    },
    {
      id: 9,
      nome: "Gustavo Guanabara",
      email: "gustavogua89@yahoo.com.br",
      professor: 5
    }
  ]  
  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <ListaAula aulas={aulas}></ListaAula>
      </Box>
    </>
  )
}

export default Aulas
