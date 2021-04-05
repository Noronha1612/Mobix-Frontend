import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';

import { ApplicationStore } from '../../store';
import { set_output, toggle_category } from '../../store/checklist/actions';

import { Container, ContentTable } from './styles';

import ModuleRow from '../../components/ModuleRow';
import { Output } from '../../store/checklist/types';

interface AnyObject {
    [key: string]: any;
}

const Home: React.FC = () => {
    const checklist = useSelector((store: ApplicationStore) => store.checklist);
    const dispatch = useDispatch();

    const handleSignUp = useCallback(() => {

        const { categories } = checklist;

        const permissions: AnyObject = {};

        // Fill signUpUser
        categories.forEach(category => {
            permissions[category.title] = {};

            category.modules.forEach(module => {
                permissions[category.title][module.title] = [];

                module.submodules
                    .filter(submodule => submodule.checked)
                    .forEach(submodule => permissions[category.title][module.title].push(submodule.title));
            });
        });

        dispatch(set_output({permissions} as Output));
    }, [ checklist, dispatch ]);

    useEffect(() => {
        console.log(checklist.output)
    }, [checklist.output]);

    return (
        <Container>
            <h1>Tabela de Permissões</h1>

            <ContentTable>
                <tbody>
                    <tr>
                        <th></th>
                        { checklist.categories.map((category, index) => (
                            <th key={ index } >{category.title}</th>
                        ))}
                    </tr>
                    <tr className="all-row" >
                        <td>Todos</td>
                        { checklist.categories.map((category, index) => (
                            <td key={ index } >
                                <Checkbox 
                                    color='default'
                                    size='small'
                                    checked={ category.checked }
                                    onChange={ () => {
                                        dispatch(toggle_category(category.title));
                                    }}
                                />
                            </td>
                        ))}
                    </tr>
                </tbody>
                { checklist.categories[0].modules.map((module, index) => (
                    <ModuleRow
                        key={ index }
                        categories={checklist.categories} 
                        module={ module } 
                    />
                ))}
            </ContentTable>

            <div className="button-wrapper">
                <button onClick={ handleSignUp } >Cadastrar</button>
            </div>
        </Container>
    );
}

export default Home;