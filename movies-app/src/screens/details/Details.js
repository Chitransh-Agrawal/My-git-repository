import React, {Component} from 'react';
import  './Details.css';
import Header from '../../common/header/Header';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import { Button, GridListTile } from '@material-ui/core';
import '../../common/moviesData';
import Typography from '@material-ui/core/Typography';
import moviesData from '../../common/moviesData';
import YouTube from 'react-youtube';


//import Rating from '@material-ui/lab/Rating';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
//import Box from '@material-ui/core/Box';
import { ImageListItem } from '@material-ui/core';
import { ImageList } from '@material-ui/core';
import {ImageListItemBar} from '@material-ui/core';

class Details extends Component{
    constructor(props) {
        super(props);
        this.state = {
        moviesList: moviesData
        };
       }
    

    render(){

        return(
            <Router>
            <div className="details-container" >
            <Header/>

            <div className="content-div">

            <div className="left">
                <Link to="/"><Typography>&lt;&lt;Back To Home</Typography></Link>
                <img src={this.state.moviesList[0].poster_url} />

            </div>

            <div className="middle">
            <Typography variant="h5">
                     {this.state.moviesList[0].title}
                 </Typography>

                 <Typography variant="subtitle2">
                     Genres: {this.state.moviesList[0].genres}
                 </Typography>
                 <Typography variant="subtitle2">
                     Duration: {this.state.moviesList[0].duration}
                 </Typography>
                 <Typography  variant="subtitle2">
                     Release Date: {this.state.moviesList[0].release_date}
                 </Typography>
                 <Typography variant="subtitle2">
                     Rating: {this.state.moviesList[0].critics_rating}
                 </Typography>
                 <Typography topMargin="18px" variant="subtitle2">
                    <span>Plot: </span>  <a href={this.state.moviesList[0].wiki_url}>(Wiki link)</a>{this.state.moviesList[0].storyline}
                 </Typography>

                 <Typography variant="subtitle2">
                     Trailer:
                 </Typography>

                    <YouTube videoId={this.state.moviesList[2].trailer_url}></YouTube>
                 
                
            </div>




            <div className="right">

            <Typography variant="subtitle2">
                     Rate this movie:
                 </Typography>
                 
                {/*
                    <Rating
                    name="customized-empty"
                    defaultValue={2}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                  */
                } 

<Typography variant="subtitle2">
                     Artists:
                 </Typography>

                 <ImageList col={2}>
                     {
                         this.state.moviesList[0].artists.map((item)=>{
                             return(<ImageListItem key={item.id}>
                                 <ImageListItemBar title={item.first_name +" "+ item.last_name}>
                                 <img src={this.state.moviesList[0].artists[0].profile_url}/>
                                 </ImageListItemBar>
                                 
                                 </ImageListItem>);
                         })
                         

                     }
                     
                     

                     </ImageList>
                 
            </div>


            </div>

            </div>
            
            
            </Router>
            
        );
    }
}

export default Details;