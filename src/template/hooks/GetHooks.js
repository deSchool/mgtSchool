import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'


const GetHooks = () => {
  const [users, setusers] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(function (response) {
        // handle success
        setLoad(false)
        setusers(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  if (load)
    return <ActivityIndicator color="red" size='large' />
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text >{item.login} </Text>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default GetHooks



