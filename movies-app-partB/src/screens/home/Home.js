import React, {Component} from 'react';
import  './Home.css';
import Header from '../../common/header/Header';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Details from '../details/Details';

import '../../common/moviesData';
import '../../common/genre';
import '../../common/artists';
import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import { ImageListItemBar } from '@material-ui/core';
import moviesData from '../../common/moviesData';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
import genres from '../../common/genre';
import artists from '../../common/artists';

 
const Home= (props)=> {

  const [moviesDB, setMoviesDB]=React.useState(moviesData);

  return (
    <Router>
      <div className="home-container">
          <Header/>
          <span id="heading">Upcoming Movies</span>
         
         
         <ImageList className="image-container" cols={6}>
{
moviesDB.map((item)=>{
return( <ImageListItem  className="image-items"  key={item.id}>
          <img src={item.poster_url} alt={item.title} />
          <ImageListItemBar title={item.title}/>
       </ImageListItem>);
}) 
} 
      </ImageList>





<div className="flex-container">


<div className="left">

<ImageList  className="image-items-released" rowHeight={350} cols={4}>
{
moviesDB.map((item)=>{
return( 
        
        <ImageListItem   key={item.id}><Link to="/details">
          <img src={item.poster_url} alt={item.title} />
          <ImageListItemBar title={item.title} subtitle={item.release_date.toString()}/>
          </Link>
       </ImageListItem>
        
       );
}) 
} 
</ImageList>
</div>




<div className="right">

<Card >
<CardContent color="theme.palette.primary.light">

<Typography variant="h6"  >
    FIND MOVIES BY:
  </Typography>

  <form>

  <FormControl className="card-component">
  <InputLabel htmlFor="movie-name-input">Movie Name</InputLabel>
  <Input id="movie-name-input" placeholder="Movie Name" />
 </FormControl>



<br/>

<FormControl className="card-component">
  <InputLabel rowWidth={100} id="artists-select-label">Genres</InputLabel>
  <Select placeholder="Genres"
      multiple
      value={moviesDB}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      
  >
      {
          genres.map((gene)=>{
              return(<MenuItem key={gene.id} value={gene.name}><Checkbox/>{gene.name}</MenuItem>

              );
          })
      }
   
  </Select>
</FormControl>


<br/>

<FormControl className="card-component" >
<InputLabel rowWidth={100} id="genres-select-label">Artists</InputLabel>
<Select placeholder="Genres"
multiple
value={moviesDB}
labelId="demo-simple-select-label"
id="demo-simple-select"
rowWidth={100}
>
{
   artists.map((gene)=>{
       return(<MenuItem key={gene.id} value={gene.first_name}><Checkbox/>{`${gene.first_name} ${gene.last_name}`}</MenuItem>

       );
   })
}

</Select>
</FormControl>

<br/>

  <FormControl className="card-component">
  <TextField
    id="standard-number"
    label="Release Date Start"
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
  />
 </FormControl>

 <br/>

  <FormControl className="card-component">
  <TextField
    id="standard-number"
    label="Release Date End"
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
  />
 </FormControl>

 



  </form>
  

  
  
</CardContent>


<CardActions>
  <Button  variant="contained" color="primary">APPLY</Button>
</CardActions>
</Card>


</div>




</div>

<Route path='/Details' render={({history}, props) => <Details {...props} history={history}  /> } />


</div>
</Router>
);
}




export default Home;