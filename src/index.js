/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

const NOT_CONNECTED = "Not connected to a library"

const _findComponentNameRec = (names, layer) => {
    const name = layer.componentName

    if (layer.parent) {
        const newNames = name ? [...names, name] : names
        return _findComponentNameRec(newNames, layer.parent)
    } else if (name) {
        return name
    } else if (names.length > 0) {
        return names[names.length - 1]
    } else {
        return NOT_CONNECTED
    }
}
const findComponentName = (layer) => _findComponentNameRec([], layer)

const findPrimitiveName = (layer) => {
    if (layer.componentName) {
        return layer.componentName
    } else if (layer.parent) {
        return findPrimitiveName(layer.parent)
    } else {
        return NOT_CONNECTED
    }
}

function layer(context, selectedLayer) {
    const output = [{
        label: "Component",
        value: findComponentName(selectedLayer),
        isShown: context.getOption("showComponentName")
    }, {
        label: "Primitive",
        value: findPrimitiveName(selectedLayer),
        isShown: context.getOption("showPrimitiveName")
    }]

    const formattedOutput = output
        .filter(({isShown}) => isShown)
        .map(({label, value}) => `${label}:\n  ${value}`)
        .join(`\n\n`)

    // TODO waiting for a fix in Zeplin to export textStyles 
    // const other = {
    //     type: selectedLayer.type,
    //     textStyles: context.project
        
    //     selectedLayer.textStyles.map(ts => {
    //         return context.project.textStyles
    //         return context.project.findTextStyleEqual(ts.textStyle)
            
    //         const projTs = context.project.findTextStyleEqual(textStyle)
    //         if (projTs) {
    //             return projTs.name
    //         } else {
    //             return "Anonymous TS"
    //         }
    //     })
    // }

    return {
        code: formattedOutput,
        language: "json"
    };
}

export default {
    layer
};