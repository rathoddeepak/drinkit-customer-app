import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../themes/colors';

const { width } = Dimensions.get("window")
const imageSize = width * 0.95 / 3.7
const cardSize = width * 0.95 / 3.4

const ProductCard = ({ imageUrl, volume, name, price, originalPrice, onAddPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageCover}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
            <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.varientRow}>
        <View style={styles.varientCover}>
            <Text numberOfLines={2} style={styles.varientName}>{volume}</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{price}</Text>
        <Text style={styles.originalPrice}>₹{originalPrice}</Text>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardSize,
    marginTop: 10,
    height: 190,
  },
  imageCover: {
    backgroundColor: colors.card,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    width: cardSize,
    height: cardSize,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'contain',    
  },
  varientRow: {
    flexDirection: "row",
  },
  varientCover: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.card,
    borderColor: colors.border,        
    marginTop: 5,
  },
  varientName: {
    fontSize: 8,
    color: colors.textDark,    
    fontWeight: "bold",
  },
  name: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 12,
    color: colors.textNote,
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  addButton: {
    borderColor: colors.textDark,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: colors.bgColor
  },
  addButtonText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductCard;
