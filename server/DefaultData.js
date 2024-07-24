import { products } from "./constants/data.js";
import ProductList from "./model/product-schema.js";

const DefaultData = async() =>{
    try {
        //  await ProductList.deleteMany({});
         await ProductList.insertMany(products);
         console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error while inserting dafault data', error.message);
    }
}

export default DefaultData;