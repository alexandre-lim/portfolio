import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Realizations from './pages/Realizations';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    const href = window.location.href.split('/');

    this.state = {
      menuKey : href[4] ? [href[4]] : ['home']
    };

    this.handleHrefClick = this.handleHrefClick.bind(this);
  }

  handleHrefClick(param) {
    this.setState({
      menuKey: [param],
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Header className="app-header">
          <img src={logo} className="logo" alt="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={this.state.menuKey}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to="/" onClick={() => this.handleHrefClick('home')}>Accueil</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about" onClick={() => this.handleHrefClick('about')}>Je suis un rêveur</Link></Menu.Item>
            <Menu.Item key="skills"><Link to="/skills" onClick={() => this.handleHrefClick('skills')}>Mes compétences</Link></Menu.Item>
            <Menu.Item key="realizations"><Link to="/realizations" onClick={() => this.handleHrefClick('realizations')}>Mes réalisations</Link></Menu.Item>
            <Menu.Item key="resume"><Link to="/resume">Mon parcours</Link></Menu.Item>
            {/* <Button type="primary" shape="circle" icon="linkedin" />
            <Button type="primary" shape="circle" icon="github" /> */}
          </Menu>
        </Header>
        <Content className= "content">
          <Route component={ScrollToTop} />
          <Route exact path="/" render={()=><Home handleHrefClick={() => this.handleHrefClick('about')}/>}/>
          <Route exact path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/realizations" component={Realizations} />
        </Content>
        <Footer className="app-footer">
          Portfolio ©2018 Created by Alexandre LIM
        </Footer>
    </Layout>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


export default App;
