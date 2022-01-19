const color = (material) => {
    if (material === 'plastic') {
        return '#FF2C2C'
    } else if (material === 'paper') {
        return '#4FC639'
    } else if (material === 'cardboard') {
        return '#D6A5FF'
    } else if (material === 'metal') {
        return '#7C81FF'
    } else if (material === 'glass') {
        return '#FFF855'
    } else if (material === 'microfibre') {
        return '#88CDFF'
    } else if (material === 'styrofoam') {
        return '#fff'
    } else if (material === 'wood') {
        return '#A5771F'
    } else {
        return '#909090'
    }
}

export default color