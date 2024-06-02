const mongoose = require('mongoose');

 const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Chat_app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports=connect;