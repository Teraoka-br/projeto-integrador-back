const app = require('./app');
const { db } = require('./db');

const PORT = process.env.PORT || 2000;

db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT} ...`);
    })
})