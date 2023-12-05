import api from "../api";

export async function listRepos(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`)
        console.log(id)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}