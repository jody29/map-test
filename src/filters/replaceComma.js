function replaceComma(str) {
    return typeof str === 'string' ? str.replaceAll(',', '.') : str
}

export default replaceComma