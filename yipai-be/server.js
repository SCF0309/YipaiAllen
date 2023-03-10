const express = require('express');

const app = express();

require('dotenv').config();
const mysql2 = require('mysql2/promise');

let pool = mysql2.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  // 限制 pool 連線數的上限
  connectionLimit: 10,
});

// 允許跨源存取
// 預設是全部開放
// 也可以做部分限制，參考 npm cors 的文件
const cors = require('cors');
app.use(cors());

app.get('/', async (req, res, next) => {
  console.log('這裡是首頁 2', req.mfee31, req.dt);
  let [data] = await pool.query('SELECT * FROM product JOIN users ON product.id = users.users_id ORDER BY RAND() LIMIT 1');
  res.json(data);
});


app.get('/cart', async (req, res, next) => {
  console.log('這裡是 /cart');
  let [data] = await pool.query('SELECT * FROM product JOIN user_order ON product.id = user_order.product_id ORDER BY RAND() LIMIT 1');
  res.json(data);

});


app.get('/product', async (req, res, next) => {
  console.log('這裡是 /product');
  let [data] = await pool.query('SELECT * FROM product');
  res.json(data);
});

app.get('/product/:productId', async (req, res, next) => {
  console.log('/product/:productId => ', req.params.productId);
  let [data] = await pool.query('SELECT * FROM product WHERE id=? ', [
    req.params.productId,
  ]);
  res.json(data);
});

app.get('/users', async (req, res, next) => {
  console.log('這裡是 /users');
  let [data] = await pool.query('SELECT * FROM users');
  res.json(data);
});

app.get('/users/:usersId', async (req, res, next) => {
  console.log('/users/:usersId => ', req.params.spaceId);
  let [data] = await pool.query('SELECT * FROM users WHERE users_id=? ', [
    req.params.usersId,
  ]);
  res.json(data);
});
app.get('/news', async (req, res, next) => {
  console.log('這裡是 /news');
  let [data] = await pool.query('SELECT * FROM news');
  res.json(data);
});

app.get('/news/:newsId', async (req, res, next) => {
  console.log('/news/:newsId => ', req.params.spaceId);
  let [data] = await pool.query('SELECT * FROM news WHERE news_id=? ', [
    req.params.newsId,
  ]);
  res.json(data);
});
app.get('/space', async (req, res, next) => {
  console.log('這裡是 /space');
  let [data] = await pool.query('SELECT * FROM space');
  res.json(data);
});

app.get('/space/:spaceId', async (req, res, next) => {
  console.log('/space/:spaceId => ', req.params.spaceId);
  let [data] = await pool.query('SELECT * FROM space WHERE space_id=? ', [
    req.params.spaceId,
  ]);
  res.json(data);
});

app.get('/artist', async (req, res, next) => {
  console.log('這裡是 /artist');
  let [data] = await pool.query('SELECT * FROM users WHERE users_valid_role=1');
  res.json(data);
});

app.get('/artist/:artistId', async (req, res, next) => {
  console.log('/artist/:artistId => ', req.params.artistId);
  let [data] = await pool.query('SELECT * FROM users WHERE users_id=? ', [
    req.params.artistId,
  ]);
  res.json(data);
});

app.listen(3001, () => {
  console.log('Server running at port 3001');
});