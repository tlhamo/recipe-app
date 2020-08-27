import React from 'react';
import style from './recipe.module.css';
import { ThemeProvider } from 'styled-components';
import { Button, WindowHeader, Window, WindowContent } from 'react95';
// pick a theme of your choice
import coldGray from 'react95/dist/themes/coldGray';
import { withRouter } from 'react-router-dom';

const Recipe = ({title, calories, image, ingredients, url}) =>{
    //  const routeChange = () => {
    //     let path = url;
    //     this.props.history.push(path);
    //   };

    return(
        <ThemeProvider theme={coldGray}>
            <Window resizable className={style.window}>
                <WindowHeader className={style.windowHeader}>
                    <div className={style.headerTitle}>
                        <span>{title}</span>
                    </div>                                                     
                </WindowHeader>
                <WindowContent>                   
                    <div className={style.recipe}>
                        <div className={style.box1}>
                            {/* <h1>{title}</h1> */}
                            <Window className={style.window}>
                                <WindowHeader>
                                <div className={style.headerTitle}>
                                    <span role='img' aria-label='Kiwi'>
                                     ♥ {title}
                                    </span>   
                                </div>            
                                </WindowHeader>
                            <WindowContent>
                                <img className={style.image} src={image} alt=""></img>
                            </WindowContent>
                        </Window>
                        </div>
                        <div className={style.box2}>
                            <h1>Ingredients</h1>
                            <ol>
                                {ingredients.map((ingredient,index) =>(
                                    <li key={index}>{ingredient.text}</li>
                                ))}
                            </ol>
                        </div>                       
                        <div className={style.box3}>
                            <h1>Calories</h1>
                            <p>{Math.ceil(calories)}</p>  
                        </div> 
                        <div className={style.box4}> 
                            <a href={url} target="_blank">Show Recipe</a>
                        </div>             
                    </div>
                </WindowContent>
            </Window>
        </ThemeProvider>
    )
};

export default Recipe;