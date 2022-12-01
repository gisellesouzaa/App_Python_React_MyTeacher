import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Aula } from "../../@types/aula";
import { ListaVazia} from "./ListaAula.style";

interface ListaAulaProps {
    aulas: Aula[]
}

const ListaAula = (props: ListaAulaProps) => {
    return (
        <div>
            {props.aulas.length > 0 ? (
                <TableContainer component={Paper} variant="outlined" sx={{ m: 2, width: 'auto' }}>
                    
                    <Table>

                        <TableHead>
                            <TableRow>
                                <TableCell><b>Nome do aluno</b></TableCell>
                                <TableCell><b>Email</b></TableCell>
                                <TableCell><b>Professor</b></TableCell>
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