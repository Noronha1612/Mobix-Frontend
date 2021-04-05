import { Submodule, Module } from "../store/checklist/types";

export default function getSubmoduleIndex(submodule: Submodule, module: Module) {
    const moduleSubmodules = module.submodules;

    let submoduleIndex = -1;

    moduleSubmodules.forEach((moduleSubmodule, index) => {
        if ( moduleSubmodule.title === submodule.title ) submoduleIndex = index;
    });

    return submoduleIndex;
}