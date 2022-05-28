
export interface PlataformaAplicacao {
    id: string;
    name: string;
    url: string;
}

export const platafatormaConfig: PlataformaAplicacao[] = [
    {
        id: 'treino',
        name: 'Treino',
        url: 'http://localhost:4200'
    },
    {
        id: 'adm',
        name: 'ADM',
        url: 'http://localhost:4300'
    }
];