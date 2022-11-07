import express, { urlencoded } from 'express';
import { indexController, tambahController, transaksiController } from './controllers/index.controller.js';

const app = express();

app.use(urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get('/', indexController);
app.post('/items/tambah', tambahController);
app.post('/items/transaksi', transaksiController);

app.listen(3000, () => console.log('app running on http://localhost:3000'));
