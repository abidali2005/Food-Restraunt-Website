const mongoose = require('mongoose');
const mongoUrl = `mongodb+srv://goFood:itxhenry098@cluster0.lm8sq.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0`;

const mongodb = async () => {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("food_category");

        const foodItems = await foodCollection.find({}).toArray();
        const foodCategory = await foodCategoryCollection.find({}).toArray();

        global.fooditems = foodItems;
        global.foodCategory = foodCategory;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongodb;





