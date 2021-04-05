import { ChecklistData, Module } from "./types";

const defaultChecked = true;

const modules: Module[] = [
    {
        title: 'Análise',
        checked: defaultChecked,
        submodules: [
            { title: 'Análise de contas', checked: defaultChecked },
            { title: 'Análise de transações', checked: defaultChecked }
        ]
    },
    {
        title: 'Contas',
        checked: defaultChecked,
        submodules: [
            { title: 'Cliente', checked: defaultChecked },
            { title: 'Transações', checked: defaultChecked },
            { title: 'Contas digitais', checked: defaultChecked }
        ]
    },
    {
        title: 'Customização',
        checked: defaultChecked,
        submodules: [
            { title: 'Limites e horários', checked: defaultChecked },
            { title: 'Tarifas', checked: defaultChecked },
            { title: 'Tarifas personalizadas', checked: defaultChecked },
            { title: 'Conta', checked: defaultChecked }
        ]
    },
    {
        title: 'Financeiro',
        checked: defaultChecked,
        submodules: [
            { title: 'Entradas', checked: defaultChecked },
        ]
    }
];

const INITIAL_STATE: ChecklistData = {
    categories: [
        {
            title: 'Ver listagem',
            checked: defaultChecked,
            modules: [ ...modules ]
        },
        {
            title: 'Ver detalhes',
            checked: defaultChecked,
            modules: [ ...modules ]
        },
        {
            title: 'Criar',
            checked: defaultChecked,
            modules: [ ...modules ]
        },
        {
            title: 'Editar',
            checked: defaultChecked,
            modules: [ ...modules ]
        },
        {
            title: 'Deletar',
            checked: defaultChecked,
            modules: [ ...modules ]
        },
    ]
}

export default INITIAL_STATE;