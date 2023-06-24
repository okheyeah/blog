// 필요한 모듈 가져오기
const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

// 초기 경로 설정
let initial_path = path.join(__dirname, 'public');

// expressJS 서버 생성
const app = express();

// 정적 파일 미들웨어 설정
app.use(express.static(initial_path));
// 파일 업로드 미들웨어 설정
app.use(fileupload());

// 홈 페이지 라우팅
app.get('/', (req, res) => {
  res.sendFile(path.join(initial_path, 'home.html'));
});

// 서버 시작
app.listen('3000', () => {
  console.log('listening......');
});
