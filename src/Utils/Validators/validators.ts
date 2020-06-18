
export type FieldValidatorType = (value: string) => string | undefined


export const requiredField:FieldValidatorType = (value) => {
    if(value) return undefined
    return 'Поле обязательное'
}


export const maxLengthCreator = (maxLength:number):FieldValidatorType => (value) => {
    if(value.length > maxLength) return `Максимальная длина ${maxLength} символов`
    return undefined
}