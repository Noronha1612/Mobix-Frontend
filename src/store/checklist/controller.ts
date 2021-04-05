import { ToggleModuleProps, ToggleSubmoduleProps } from "./actions";
import { ChecklistData } from "./types";

export default class ChecklistController {
    toggleSubmodule( state: ChecklistData, data: ToggleSubmoduleProps ): ChecklistData {
        const { categoryTitle, moduleTitle, submoduleTitle } = data;

        const updatedCategories = state.categories.map(category => {
            if ( category.title !== categoryTitle ) return category;

            const updatedModules = category.modules.map(module => {
                if ( module.title !== moduleTitle ) return module;

                const updatedSubmodules = module.submodules.map(submodule => {
                    if ( submodule.title !== submoduleTitle ) return submodule;

                    return { ...submodule, checked: !submodule.checked };
                })

                return { ...module, submodules: updatedSubmodules };
            });

            return { ...category, modules: updatedModules };
        });

        return { ...state, categories: updatedCategories };
    }


    toggleModule( state: ChecklistData, data: ToggleModuleProps ): ChecklistData {
        const { categoryTitle, moduleTitle } = data;
        
        const updatedCategories = state.categories.map(category => {
            if ( category.title !== categoryTitle ) return category;

            const updatedModules = category.modules.map(module => {
                if ( module.title !== moduleTitle ) return module;
                
                return { ...module, checked: !module.checked, submodules: module.submodules.map(submodule => ({ ...submodule, checked: !module.checked })) };
            });

            return { ...category, modules: updatedModules };
        });

        return { ...state, categories: updatedCategories };
    }

    
    toggleCategory( state: ChecklistData, categoryTitle: string ): ChecklistData {

        const updatedCategories = state.categories.map(category => {
            if ( category.title !== categoryTitle ) return category;

            const updatedModules = category.modules.map(module => {
                const updatedSubmodules = module.submodules.map(submodule => ({ ...submodule, checked: !category.checked }))

                return { ...module, checked: !category.checked, submodules: updatedSubmodules };
            });
            
            return { ...category, checked: !category.checked, modules: updatedModules };
        });

        return { ...state, categories: updatedCategories };
    }

    formatOutput(rawOutput: ChecklistData): ChecklistData {
        const formattedCategoriesOutput = rawOutput.categories.map(category => {

            const formattedModulesOutput = category.modules.map(module => {
                let allSubmodulesChecked = true;

                module.submodules.forEach(submodule => {
                    if ( !submodule.checked ) allSubmodulesChecked = false;
                });

                return { ...module, checked: allSubmodulesChecked };
            });

            let allModulesChecked = true;

            formattedModulesOutput.forEach(module => {
                if ( !module.checked ) allModulesChecked = false;
            });

            return { ...category, checked: allModulesChecked, modules: formattedModulesOutput };
        });

        return { ...rawOutput, categories: formattedCategoriesOutput };
    }
}