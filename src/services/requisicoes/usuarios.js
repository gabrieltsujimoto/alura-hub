import api from "../api";

export async function searchUser(login) {
    try {
        const result = await api.get(`/users?login=${login}`)
        return result.data[0]
    }
    catch (e) {
        console.log(e)
    }
}