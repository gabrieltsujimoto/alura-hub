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


export async function updateRepos(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id,
        })
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}