const express = require('express');
const app = express();

const { buildSchema } = require('graphql');
const { createHandler }= require('graphql-http');

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = {
    description: 'Red Shoe',
    price: 42.12
}

app.use(express.json());

app.use('/graphql', createHandler({ schema, rootValue: root }));


app.listen(4000, () => {
    console.log('Server started on port 4000');
});