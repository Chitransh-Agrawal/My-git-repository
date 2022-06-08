
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Create.css";
export function Create (props){

   const handleSubmit = ()=> {
       return alert('New Product created successfully ' );

        
        
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
        <label>
          Title:   </label>
          <input type="text"  />
        
        <br/>
        <br/>
        <label>
          Description:</label>
          <input type="text"  />
       
        <br/>
        <br/>
        <label>
          Price:</label>
          <input type="text"  />
       
        <br/>
        <br/>
        <label>
          Rating:
          <input type="text"  /></label>
       
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
            </div>
    );

}