import React, { useEffect, useState } from "react";

import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from "react-native"

const MoviesScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getMyFavoriteMovies({setData, setLoading});
    }, []);

    return(
        <View  style={{ flex: 1, padding: 24 }}>
            <Text> My favority movies </Text>
            { isLoading ? <ActivityIndicator/> :(
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                      )}
                />
            )}
        </View>
    );
};

const getMyFavoriteMovies = ({setData, setLoading}) => {
    fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then((data) => {
        setData(data.movies)
    })
    .catch((erro) => {
        console.error('🛑 Error', erro);
    })
    .finally(() => {
      setLoading(false)
    })
};

export default MoviesScreen