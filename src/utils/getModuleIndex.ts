import { Module, Category } from "../store/checklist/types";

export default function getModuleIndex(module: Module, category: Category) {
    const modules = category.modules;

    let moduleIndex = -1;

    modules.forEach((categoryModule, index) => {
        if ( categoryModule.title === module.title ) moduleIndex = index;
    });

    return moduleIndex;
}