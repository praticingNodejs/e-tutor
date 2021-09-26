import app from './src/app.js';

const PORT = 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App running at http://localhost:${PORT}`);
});
