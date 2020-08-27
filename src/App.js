import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import logo from './logo.svg';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, Button,TextField, 
  WindowHeader, Window,
  List, ListItem, Divider, WindowContent } from 'react95';
// pick a theme of your choice
import coldGray from "react95/dist/themes/coldGray";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import './App.css';

const APP_ID = '3290a36b';
const APP_KEY = '98130d36463781ef6aee936fe71ddc24';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('strawberry');

  useEffect(()=>{
    getRecipes();
    
  }, [query]);
  

  const getRecipes = async () =>{
    try{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json(); 
      setRecipes(data.hits);
      console.log(data.hits);
    } catch(error) {
      throw error;
    }
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  const [state, setState] = useState({
    value: ''
  });

  const handleChange = e => setState({ value: e.target.value });
  const reset = () => setState({ value: '' });

  return(
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path ="/shop" exact component={Shop}/>
        </Switch>
      </Router>
      <ThemeProvider theme={coldGray}>
        <div className="search-form">
          <TextField
            className="search-bar"
            value={search}
            placeholder='Type here...'
            onChange={updateSearch}
            fullWidth
          />
          <Button onClick={getSearch} style={{ marginLeft: '2px' }}>
            Search
          </Button>
          </div>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.uri}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}/>
          ))}
        </div>
      </ThemeProvider>
    </div>
  );
};

const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>
);
export default App;
