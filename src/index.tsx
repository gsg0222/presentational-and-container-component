import UserContainer from 'containers/pages/UserContainer';
import { StrictMode, VFC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import User from 'User';

const Home: VFC = () => (
  <>
    <p>ブラウザの戻るボタンでこのページに戻ってください。</p>
    <ul>
      <li>
        <Link to="/split">分割済</Link>
      </li>
      <li>
        <Link to="/not-split">未分割</Link>
      </li>
    </ul>
  </>
);
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="split" element={<UserContainer />} />
        <Route path="not-split" element={<User />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
