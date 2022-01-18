const color = (material) => {
    if (material === 'plastic') {
        return '#fff'
    } else if (material === 'paper') {
        return '#000'
    } else if (material === 'cardboard') {
        return '#ff7'
    } else if (material === 'metal') {
        return '#ff6'
    } else if (material === 'glass') {
        return '#ff5'
    } else if (material === 'microfibre') {
        return '#ff4'
    } else if (material === 'styrofoam') {
        return '#ff3'
    } else if (material === 'wood') {
        return '#ff2'
    } else {
        return '#ff1'
    }
}

export default color