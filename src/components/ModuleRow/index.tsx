import React, { HTMLAttributes, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { FiChevronDown } from 'react-icons/fi';

import { toggle_module, toggle_submodule } from '../../store/checklist/actions';
import { Category, Module } from '../../store/checklist/types';

import getModuleIndex from '../../utils/getModuleIndex';
import getSubmoduleIndex from '../../utils/getSubmoduleIndex';

import { RowContainer, SubmodulesContainer } from './styles';

interface ModuleRowProps extends HTMLAttributes<HTMLTableRowElement> {
    categories: Category[],
    module: Module
}

const ModuleRow: React.FC<ModuleRowProps> = ({ categories, module }) => {
    const [ closed, setClosed ] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <RowContainer className="module-row">
                <tr>
                    <td>
                        <span>{ module.title }</span>
                        <div className="icon-wrapper"
                            onClick={ () => setClosed(!closed) } 
                        >
                            <FiChevronDown size={18}/>
                        </div>
                    </td>

                    { categories.map((category, index) => (
                        <td key={ index }>
                            <Checkbox 
                                className={`check-modulerow-${index}`}
                                color='default'
                                size='small'
                                checked={ category.modules[getModuleIndex(module, category)].checked }
                                onChange={ () => dispatch(toggle_module({ moduleTitle: module.title, categoryTitle: category.title })) }
                            />
                        </td>
                    ))}
                </tr>
            </RowContainer>
            <SubmodulesContainer 
                className="submodule-row" 
                containerLength={ module.submodules.length } 
                closed={ closed }
            >
                { module.submodules.map((submodule, index) => (
                    <tr key={ index }>
                        <td>{ submodule.title }</td>

                        {
                            categories.map((category, index) => (
                                <td key={ index }>
                                    <Checkbox 
                                        className={`check-submodulerow-${index}`}
                                        color='default'
                                        size='small'
                                        checked={ category
                                            .modules[getModuleIndex(module, category)]
                                            .submodules[getSubmoduleIndex(submodule, module)]
                                            .checked 
                                        }
                                        onChange={ () => dispatch(toggle_submodule({ 
                                            moduleTitle: module.title, 
                                            categoryTitle: category.title,
                                            submoduleTitle: submodule.title 
                                        }))}
                                    />
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </SubmodulesContainer>
        </>
    );
}

export default ModuleRow;