import './.env.js';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App running at http://localhost:${PORT}`);
});
