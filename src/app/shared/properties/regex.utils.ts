export const emailRegex = /^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&+=*!()]{8,}$/;

export const hasANumber = /.*[0-9].*/;
export const hasAlphabeticCharacter = /.*[a-zA-Z].*/;
export const hasSpecialCharacter  = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;