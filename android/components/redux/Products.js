import React, { useEffect, useState } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native'
import { addToCart, removeToCart } from './action';
import { useDispatch, useSelector } from 'react-redux';





const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

    }
    const handleRemoveToCart = (item) => {
        dispatch(removeToCart(item.name))
    }

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])

    return (
        <View style={style.itemUI}>
            <View style={{ margin: 8 }}>
                <Image source={{ uri: item.image }} style={{ height: 80, width: 80, borderRadius: 10 }} />
            </View>

            <View style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 18, color: '#000' }}>{item.name.substring(0, 24)}</Text>
                <Text style={{ fontSize: 17, marginBottom: 7, marginTop: 7, color: 'green', fontWeight: 600 }}>{'₹' + item.price}</Text>

                {
                    isAdded ?
                        <Button title='Remove To Cart' color={'green'} onPress={() => handleRemoveToCart(item)} />
                        :
                        <Button title='Add To Cart' color={'green'} onPress={() => handleAddToCart(item)} />
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    itemUI: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: 'green',
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 7,
        paddingBottom: 10,
        shadowColor: 'red',
        elevation: 4,
        shadowOpacity: 7
    }
})
export default Product;