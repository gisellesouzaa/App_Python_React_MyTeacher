import { styled } from "@mui/material";

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20)};
`;

export const Titulo = styled('h3')`
    text-align: center;
    color: ${({theme}) => theme.palette.primary.main};
    padding: ${({ theme }) => theme.spacing(2, 0)};
`;