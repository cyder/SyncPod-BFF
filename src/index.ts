import app from './server';

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at localhost:${PORT}/graphql`);
});
