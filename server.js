const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./resolvers');
const cors = require('cors'); // Agregar esta línea

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors()); // Habilitar CORS

// Usar las rutas de autenticación
app.use('/auth', authRoutes);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/graphql`);
});


