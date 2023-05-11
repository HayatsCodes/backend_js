process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err);
    // You can perform any necessary cleanup or logging here
    // Optionally, you can call process.exit(1) to terminate the process
});

// Your code here...


const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    listCustomer,
    deleteCustomer
} = require('./index');

//  Questions to Add Customer
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Adress'
    },
];

program
    .version('1.0.0')
    .description('CMS');

// Add Command
program
    .command('add')
    .alias('a')
    .description('add a customer to the db')
    .action(async () => {
        try {
            const answers = await prompt(questions);
            await addCustomer(answers);
        } catch (error) {
            console.error('An error occurred while adding the customer:', error);
        }
    });

// Find Command
program
    .command('find <name>') // Add <name> parameter here
    .alias('f')
    .description('Find a customer by its name')
    .action(name => findCustomer(name));

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action(async (_id) => {
        const answers = await prompt(questions);
        await updateCustomer(_id, answers)
    });

// List Command
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(async () => await listCustomer());

// Delete Command
program
    .command('delete <_id>')
    .alias('d')
    .description('Delete a customer')
    .action(async (_id) => {
        try {
            await deleteCustomer(_id);
        } catch (error) {
            console.error('An error occurred while deleting the customer:', error);
        }
    });


program.parse(process.argv);