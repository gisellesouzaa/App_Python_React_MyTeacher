import { Alert, Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { CabecalhoContainer } from '../src/components/Cabecalho/Cabecalho.style';
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
    marcarAula,
    mensagem,
    setMensagem
  } = useIndex();

  return (
    <>
      <CabecalhoContainer>
        <p>Encontre o professor de programação perfeito e agende sua aula!</p>  
      </CabecalhoContainer>

      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
        ></Lista>
      </Box>

      <Dialog onClose={() => setProfessorSelecionado(null)} open={professorSelecionado !== null} fullWidth PaperProps={{ sx: { p: 5 } }}>
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
          
          <Grid item xs={12}>
            <Alert severity="info"><small>Inserir dados fictícios pois ficará visível na área de agendamentos.</small></Alert>
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>

      </Dialog>

      <Snackbar
        message={mensagem}
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />

    </>
  )
}

export default Home
