const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

let contacts = [
    { id: 1, name: 'Brennan George', email: 'brennan.george@gmail.com', image: 'images/1.jpg' },
    { id: 2, name: 'Alan Castro', email: 'castroalan@hotmail.com', image: 'images/2.jpg' },
    { id: 3, name: 'Troy Butler', email: 'troyB@gmail.com', image: 'images/3.jpg' },
    { id: 4, name: 'Carolina Silva', email: 'carolsii@gmail.com', image: 'images/4.jpg' },
    { id: 5, name: 'Lisandra Garcia', email: 'lisagracia123@gmail.com', image: 'images/5.jpg' },
    { id: 6, name: 'Isabela Flores', email: 'belflor@hotmail.com', image: 'images/6.jpg' },
]

app.get('/', (req, res) => {
    res.json(contacts);
})

app.get('/api/contacts', (req, res) => {
    const newContact = {
        id: contacts.length + 1,
        name: req.body.name,
        email: req.body.email,
        image: req.body.image
    }
    contacts.push(newcontact)
    req.json(newContact)
})

app.put('/api/contacts/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    const contact = contacts.find(c => c.id === contactId);

    if(contact) {
        contact.name = req.body.name;
        contact.email = rqe.body.email;
        contact.image = req.body.image;
        res.json(contact);
    } else{
        res.status(404).send('Contact not found')
    }
});

app.delete('/api/contacts/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    contacts = contacts.filter(c => c.id !== contactId);
    res.status(204).send();
})

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
})