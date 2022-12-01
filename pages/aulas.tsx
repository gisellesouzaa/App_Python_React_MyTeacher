import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { CabecalhoContainer } from '../src/components/Cabecalho/Cabecalho.style';
import ListaAula from '../src/components/ListaAula/ListaAula';
import { useAulas } from '../src/hooks/pages/useAulas';


const Aulas: NextPage = () => {
  const {listaAulas} = useAulas(); 

  return (
    <>
      <CabecalhoContainer>
        <p>Aqui você encontra todos os agendamentos realizados no nosso banco de dados.</p>
      </CabecalhoContainer>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <ListaAula aulas={listaAulas}></ListaAula>
      </Box>
    </>
  )
}

export default Aulas
