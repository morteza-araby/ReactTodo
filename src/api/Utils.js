function capitalizeWord (word) {
    if(!word || typeof word !== 'string') {
        word =''
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
}