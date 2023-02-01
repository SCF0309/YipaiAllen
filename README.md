# YipaiAllen #

1.藝術家內容新增,rwd功能完成

2.首頁▷藝術家, 由新至舊按鈕更新

3.be內server.js資料要增加artist部分
、、、
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
、、、
4.app.js要更新
、、、
<Route path="/artist/:artistId" element={<ArtistDetail />} />


5.藝術家頁面與藝術家詳細資料更新

6.mydb2 欄位增加，須更新
