import { useEffect, useState } from "react";
import { Text, View } from 'react-native'
import { useSelector } from "react-redux";

const Header = () => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItem, setCartItems] = useState(0);


    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData]);

    return (
        <View style={{
            paddingLeft: 12,
            backgroundColor: 'red',
            height: 55, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
        }}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Redux Example</Text>
            <View style={{
                height: 30, width: 30, backgroundColor: 'green',
                marginRight: 16, borderRadius: 20, borderWidth: 1,
                borderColor: 'yellow', justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 500 }}>{cartItem}</Text>
            </View>
        </View>
    )
}
export default Header;
