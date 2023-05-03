import { useQuery } from 'react-query'
import { api } from '../api'

export type User = {
     id: string,
    name: string,
    email: string,  
    createAt: string
}

type Data = {
    users: User[]
}

export const getUsers = async () => {
    const { data } = await api.get<Data>('users')

    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createAt: new Date(user.createAt).toLocaleDateString('pt-Br', {
                day: '2-digit',
                month: 'long', 
                year: 'numeric'
            })
        }
    })

    return users
}


export const useUsers = () => {
    return useQuery('users', getUsers, {
        staleTime: 1000 * 5
    })
}