import { Box, Button, Dialog, DialogActions, Grid, TextField } from '@mui/material';
import type { NextPage } from 'next';
import ListaAula from '../src/components/ListaAula/ListaAula';
import { useAulas } from '../src/hooks/pages/useAulas';
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
  const {listaAulas} = useAulas(); 

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <ListaAula aulas={listaAulas}></ListaAula>
      </Box>
    </>
  )
}

export default Aulas
