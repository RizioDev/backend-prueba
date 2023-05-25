import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import {getCountryDetail} from '../../actions/index.js'
import s from './Detail.module.css'

export default function Detail(){
     // Hook de react-router-dom que lee los params. match.params.id
     const dispatch = useDispatch();
     const {id} = useParams(); //reemplaza el props.map.detail
     const country = useSelector(state => state.countryDetail);


     // Al construirse, se despacha el getCountryId( id pasado por Params)
     useEffect(()=>{    
          dispatch(getCountryDetail(id));
     },[dispatch, id])


     console.log(country)


     return(
          <div className={s.cardInfo}>
              <div>
                    <img className={s.countryimg} src={`${country.flagimg}`} alt="Imagen de la bandera"/>
               </div>
               <div className={s.infocenter}>
                    <p>Nombre: <span>{country.name}</span></p>
                    <p>Codigo: <span>{country.id}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                    <p>Poblacion: <span>{country.population}</span></p>
                    <p>Continente: <span>{country.continent}</span></p>
                    <p>Subregion: <span>{country.subregion}</span></p>
                    <p>Area: <span>{country.area}</span></p>
                         <h3>Actividades turisticas</h3>
                    <div >
                         
                         {country.activities ? country.activities.map(activity => {
                              return (<div key={activity.id}>
                                   <p>Nombre: <span>{activity.name}</span></p>
                                   <p>Dificultad: <span>{activity.difficulty}</span></p>
                                   <p>Duracion: <span>{activity.duration} hs</span></p>
                                   <p>Temporada: <span>{activity.season}</span></p>
                              </div>)
                         }) : <>
                                   <p>No hay actividades</p>
                              </>}
                    </div>
               </div>
               <Link to="/countries"><button className={s.buttonSearch} >Volver</button></Link>
          </div>
     )
}