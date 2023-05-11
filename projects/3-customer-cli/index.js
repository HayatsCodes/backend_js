const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;


const Customer = require('./models/customer');

const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        db.close();
    });;
}

const findCustomer = (name) => {
    const search = new RegExp(name, 'i');

    Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    });
    console.info(`Please hold on. Looking for ${name}...`);
}

const updateCustomer = (_id, customer) => {
    Customer.findByIdAndUpdate(_id, customer).then(customer => {
        console.info('Customer Updated');
        db.close();
    });
    console.info(`Please hold on. updating...`);
}

const listCustomer = () => {
    Customer.find().then(customer => {
        console.info(customer);
        db.close();
    });
    console.info('Please hold on. Getting all customers...');
}

const deleteCustomer = (_id) => {
    Customer.findByIdAndDelete(_id).then(customer => {
        console.info('Customer Deleted');
        db.close();
    });
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    listCustomer,
    deleteCustomer
}