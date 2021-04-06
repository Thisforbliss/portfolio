import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom'
import resume from './components/Malcolm_Leake_Resume_2021.pdf'


function App() {
  return (
   <div>
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href={resume}> Download My Resume </a>
                <Link to="/">Home</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
      
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href={resume}> Download My Resume </a>
                <Link to="/">Home</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
   </div> 

  );
}

export default App;
