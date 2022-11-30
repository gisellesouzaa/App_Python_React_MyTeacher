import { useEffect, useState } from "react";
import { Aula } from "../../@types/aula";
import { ApiService } from "../../services/ApiService";

export function useAulas() {
    const [listaAulas, setListaAulas] = useState<Aula[]>([]);

    useEffect(() => {
        ApiService.get('/aulas').then((resposta) => {
            setListaAulas(resposta.data)
        })
    }, []);

    return {
        listaAulas
    }
}