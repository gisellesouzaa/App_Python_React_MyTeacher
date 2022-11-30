import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { NextPage } from "next";
import Aulas from "../../../pages/aulas";
import { Aula } from "../../@types/aula";
import { useIndex } from "../../hooks/pages/useIndex";
import { ListaVazia } from "./ListaAula.style";

interface ListaAulaProps {
    aulas: Aula[]
}

// function ListaAula() {
//     const {
//         listaAulas
//     } = useIndex();
// }

const ListaAula = (props: ListaAulaProps) => {
    return (
        <div>
            {props.aulas.length > 0 ? (
                // <h2>Listagem de aulas agendadas</h2> 
                <TableContainer component={Paper} variant="outlined" sx={{ m: 2, width: 'auto' }}>
                    <Table>

                        <TableHead>
                            <TableRow>
                                <TableCell>Nome do aluno</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Professor</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {props.aulas.map(aula => (
                                <TableRow key={aula.id}>
                                    <TableCell>{aula.nome}</TableCell>
                                    <TableCell>{aula.email}</TableCell>
                                    <TableCell>{aula.professor}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    );
};

export default ListaAula;