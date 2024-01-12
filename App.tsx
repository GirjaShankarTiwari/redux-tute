import { } from 'react'
import { ScrollView, View } from 'react-native'
import Header from './android/components/redux/Header';
import Product from './android/components/redux/Products';


const App = () => {

  const products = [
    {
      name: 'item1',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 4000
    },
    {
      name: 'item2',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      price: 15000,

    },
    {
      name: 'item3',
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
      price: 1500,

    },
    {
      name: 'item4',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      price: 600,

    },
    {
      name: 'item5',
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      price: 500,

    }
  ]


  return <View style={{ backgroundColor: 'grey' }}>
    <Header />
    <ScrollView>
      {
        products.map((item) => <Product item={item} />)
      }
    </ScrollView>

  </View>
}

export default App;