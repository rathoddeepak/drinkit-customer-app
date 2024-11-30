import { StyleSheet, View } from "react-native"
import ProductCard from "../../../components/product/ProductCard"

const ProductList = () => {
    return (
        <View style={styles.main}>
            <ProductCard
                imageUrl="https://i.ibb.co/sRtBXFz/jimmy.png"
                volume="300 ml"
                name="Jack Daniel's Whiskey"
                price="2200"
                originalPrice="2800"
                onAddPress={() => alert('Added to cart')}
            />
            <ProductCard
                imageUrl="https://i.ibb.co/xD52Jcq/cham.png"
                volume="300 ml"
                name="Champion Lanson"
                price="2200"
                originalPrice="2800"
                onAddPress={() => alert('Added to cart')}
            />  
            <ProductCard
                imageUrl="https://i.ibb.co/XSWJFnT/Henney.png"
                volume="300 ml"
                name="Hennessy"
                price="2200"
                originalPrice="2800"
                onAddPress={() => alert('Added to cart')}
            />  
            <ProductCard
                imageUrl="https://i.ibb.co/MnbvNmT/vodka.png"
                volume="300 ml"
                name="Absolute Vodka"
                price="2200"
                originalPrice="2800"
                onAddPress={() => alert('Added to cart')}
            />
            <ProductCard
                imageUrl="https://i.ibb.co/HPc0Hjc/oldmonk.png"
                volume="300 ml"
                name="Old Monk"
                price="2200"
                originalPrice="2800"
                onAddPress={() => alert('Added to cart')}
            />
            <View />   
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",        
        flexWrap: "wrap",
        columnGap: 15
    }
})

export default ProductList