import * as yup from 'yup'

export const signinSchemeValidation = yup.object().shape({
    email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha é obrigatório')
})

export const createUserSchemeValidation = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha é obrigatório').min(6, 'Mínimo 6 caracteres'),
    password_confirm: yup.string().oneOf([
        '', yup.ref('password')
    ], 'As senhas devem ser iguais')
})