import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Pagina2 from './Pagina2';
import Optiune1 from './Optiune1';
import helloImage from './hello.jpg';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="main_cont">
      <Router>
        <Menu mode="inline">
          <Menu.Item key="home">
            <Link to="/">Pagina Principală</Link>
          </Menu.Item>
          <Menu.Item key="pagina2">
            <Link to="/pagina2">Pagina 2</Link>
          </Menu.Item>
          <SubMenu key="sub1" title="Opțiuni">
            <Menu.Item key="optiune1">
              <Link to="/optiune1">Opțiunea 1</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <Routes>
          <Route path="/" element={
            <div>
              <h1>Bun venit!</h1>
              <img
                src={helloImage}
                alt="Hello"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          } />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/optiune1" element={<Optiune1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
