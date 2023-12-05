import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Touchable } from 'react-native';
import estilos from './estilos';
import { listRepos } from '../../services/requisicoes/repos';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const onScreen = useIsFocused();

    async function getRepos() {
        const resultado = await listRepos(route.params.id)
        setRepo(resultado)
    }

    useEffect(() => {
        getRepos()
    }, [onScreen])

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio')}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>
            <FlatList
                data={repo}
                style={{ width: "100%" }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}
                        style={estilos.repositorio}>
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em: {item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
