export const requiredField = value => {
    if(value) return undefined
    return 'Поле обязательное'
}


export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Максимальная длина ${maxLength} символов`
    return undefined
}