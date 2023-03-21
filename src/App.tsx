import './App.css';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {MenuProps} from 'antd';
import { Menu} from 'antd';
import { Button, Checkbox, Form, Input} from 'antd';
import { Card} from 'antd'; 
import DialoguriSocr from './DialoguriSocratice';


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const CarteCards:DialoguriSocr[]=[ 
  { 
    id: 5,
    titlu: "Dialoguri Socratice",
    autor: "Nu stiu",
    an_publicare: 1995,
    nr_pagini: 345,
    genLiterar: "Realism",
    descriere: "Descriere",
  }, 
  { 
    id: 5,
    titlu: "Dialoguri Socratice2",
    autor: "Nu stiu2",
    an_publicare: 19955,
    nr_pagini: 334,
    genLiterar: "Realism2",
    descriere: "Descriere2",
  }, 
  { 
    id: 5,
    titlu: "Dialoguri Socratice3",
    autor: "Nu stiu3",
    an_publicare: 19955,
    nr_pagini: 365,
    genLiterar: "Realism3",
    descriere: "Descriere3",
  } 
] 



function App() {

  const [current, setCurrent] = useState('1');
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  const [cards, setCards] = useState<{  
    username: string  
    password: string  
  }[]>([])  

  const onFinish = (values: any) => {
    if (username.trim() === '') {
      console.log('Nu ai introdus numele');
    } 
    else {
      console.log('success',username,password);
      setCards([...cards, {username, password }])  

    }

  };
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


  return (


    <div className="lab3">

    


    <div className = "form">
<Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
 <Input value={username}  
      onChange={ (e) => setUsername(e.target.value) } 
 />     
    
    </Form.Item>

    <Form.Item
      label="Password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
  <Input.Password  
      value={password}  onChange={ (e) => setPassword(e.target.value) } 
  />     
      
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
      Submit
      </Button>
    </Form.Item>
  </Form>
  </div>

    <div className = "menu">
<Menu
        theme={"dark"}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>

    {cards.map(card => (  
              <Card title="Informatii Utilizator: " style={{top:400, left:500, width: 300, marginTop: "20px", backgroundColor: 'pink' }}>  
                <p>Username: {card.username}</p>  
                <p>Password: {card.password}</p>
                <p></p>
              </Card>   
      ))
    } 
  {CarteCards.map(card => (  
              <Card title="DialoguriSocratice" style={{ width: 300, left:1250}}>  
                <p>id {card.id}</p>  
                <p>autor: {card.autor}</p>  
                <p>titlu: {card.titlu}</p>  
                <p>an publicare: {card.an_publicare}</p>  
                <p>nr pagini: {card.nr_pagini}</p>  
                <p>gen literar: {card.genLiterar}</p>  
                <p>descriere: {card.descriere}</p>  
              </Card>   
      ))} 


    </div>
  
  );
}

export default App;