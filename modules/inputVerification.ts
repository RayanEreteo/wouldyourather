interface IValidation {
    valid: boolean,
    message?: string
}

export function validateInput(red: string, blue: string): IValidation | null {

    // Trim spaces  
    red = red.trim()
    blue = blue.trim()

    // Check if param are not empty
    if (red == "" ||  blue == "") return {valid: false, message: "Please fill in both fields."}

    // Check param min length
    if (red.length < 5 || blue.length < 5) return {valid: false, message: "Inputs should be at least 5 character."}

    // Check param max length
    if (red.length > 50 || blue.length > 50) return {valid: false, message: "Inputs should be inferior to 50 character."}

    return {valid: true}
}