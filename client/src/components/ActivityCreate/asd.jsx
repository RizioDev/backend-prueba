import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {getCountries, postActivity} from '../../actions/index.js'
import {useDispatch, useSelector} from 'react-redux'

const ActivityCreate = () => {
  
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [activity, setInputActivity] = useState({
     idCountries: [],
     name: "",
     difficulty: "",
     duration: "",
     season: "",
   });

   useEffect(() => {
     console.log(activity);
     dispatch(getCountries());
     setInputActivity({
       idCountries: [],
       name: "",
       difficulty: "",
       duration: "",
       season: "",
     });
   }, []);
 

     return (
    <div>
     <Link to='/country'><button>Volver</button></Link>
     <h1>Crea tu actividad</h1>
     <form>
          <div>
               <label>Nombre</label>
               <input type="text"
               value={activity.name}
               name="name" 
               
               />
          </div>
          <div>
               <label htmlFor=""></label>
          </div>
     </form>

    </div>
  )
}

export default ActivityCreate