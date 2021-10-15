import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productAction'
import Loading from './Loading'
import Product from './Product'

const Products = () => {
    const products = useSelector((state)=>state.allProducts.products)
    const dispatch=useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>(
            dispatch(setProducts(res.data))
        )).catch(err=>alert(err),
        setLoading(false))
    },[dispatch])


    return (
        <>
        {loading ? <Loading/> :
        <View style={styles.container}>
            <Text style={{fontSize:17, fontWeight:"bold", marginVertical:20}}>Grab Your Deal!!</Text>
            {products.map((item)=>(
                <Product
                key={item.id}
                id={item.id}
                imgSrc={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating.rate}
                desc={item.description}
                />
            ))}
        </View>}
        </>
    )
}

export default Products

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    }
})
