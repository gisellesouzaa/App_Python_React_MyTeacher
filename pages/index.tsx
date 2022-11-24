import { Box, Button, Dialog, DialogActions, Grid, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex';

const Home: NextPage = () => {
  const { 
    listaProfessores, 
    nome, 
    setNome, 
    email, 
    setEmail, 
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula
  } = useIndex();

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
          ></Lista>
      </Box>

      <Dialog onClose={() => setProfessorSelecionado(null)} open={professorSelecionado !== null} fullWidth PaperProps={{sx: {p:5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            label="Digite o nome"
            type="text"
            fullWidth
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            label="Digite o e-mail"
            type="email"
            fullWidth
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Home
