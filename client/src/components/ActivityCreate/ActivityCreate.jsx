import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from '../../actions/index.js'
import { useNavigate } from 'react-router'
// import axios from 'axios'
import s from './ActivityCreate.module.css'

export default function CreateActivity () {
  const [error, setError] = useState('Completa los datos')
  const navigate = useNavigate()
  const [activity, setInputActivity] = useState({
    countries_id: [],
    name: '',
    difficulty: '',
    duration: '',
    season: ''
  })

  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()





  const duration = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24'
  ]

  useEffect(() => {
    dispatch(getCountries())
    setInputActivity({
      countries_id: [],
      name: '',
      difficulty: '',
      duration: '',
      season: ''
    })
  }, [dispatch])

  useEffect(() => {
    if (
      activity.countries_id.length > 0 &&
      activity.name !== '' &&
      activity.difficulty !== '' &&
      activity.duration.length > 0 &&
      activity.season !== ''
    ) {
      setError('')
    }
  }, [activity, error])

  useEffect(() => {}, [activity])

  function handlerOnChange (e) {
    setInputActivity({
      ...activity,
      [e.target.name]: e.target.value
    })
  }

  function pushPais (e) {
    let value = e.target.value
    const aux = activity.countries_id
    aux.push(value)
    setInputActivity({
      ...activity,
      countries_id: aux
    })
  }

  function eliminarCountry (e) {
    let Eliminarid = e.target.value
    let aux = activity.countries_id.filter(id => id !== Eliminarid)
    setInputActivity({
      ...activity,
      countries_id: aux
    })
  }

  function handleSelectDuration (e) {
    setInputActivity({
      ...activity,
      duration: e.target.value
    })
  }

  // async function handlerSubmit (e) {
  //   e.preventDefault()
  //   console.log(activity)

  //   await axios.post('http://localhost:3001/activity', activity)
  //   setInputActivity({
  //     countries_id: [],
  //     name: '',
  //     difficulty: '',
  //     duration: '',
  //     season: ''
  //   })
  // }

  function handlerSubmit(e) {
    e.preventDefault();
    console.log(activity);
    dispatch(postActivity(activity))

    alert('Actividad creada con exito!')
    setInputActivity({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })
    navigate.push('/countries')
}

  return (
    <div className={s.container}>
      <h1>Crear Actividad</h1>

      <form onSubmit={handlerSubmit} className=''>
        <label>Nombre</label>
        <input
          type='text'
          placeholder='Nombre de la actividad'
          name='name'
          onChange={handlerOnChange}
          value={activity.name}
        />
        <hr />

        <label>Dificultad</label>
        <select
          name='difficulty'
          onChange={handlerOnChange}
          value={activity.difficulty}
          required
        >
          <option value=''>Elige una dificultad</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        <hr />

        <label>Temporada</label>
        <select
          name='season'
          onChange={handlerOnChange}
          value={activity.season}
          required
        >
          <option value=''>Elige una temporada</option>
          <option value='winter'>Invierno</option>
          <option value='spring'>Primavera</option>
          <option value='summer'>Verano</option>
          <option value='autumm'>Otono</option>
        </select>
        <hr />

        <div>
          <label>Duración: </label>
          <select onChange={handleSelectDuration} required>
            <option value='' hidden>
              Elige un tiempo estimado
            </option>
            {duration.map((e) => (
              <option value={e} name='duration'>
                {e} 
              </option>
            ))}
          </select>
        </div>

        <hr />

        <label>Pais</label>
        <select name='countries_id' onChange={pushPais} value='' >
          <option value=''>Selecciona un pais</option>
          {countries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.nameSpanish}
              </option>
            )
          })}
        </select>

        <div className={s.seleccionadosDiv}>
          <h3>Seleccionados</h3>
          <div className={s.seleccionados}>
            {activity.countries_id.length > 0
              ? countries.map((country) => { 
                  // console.log(country.id);
                  if (activity.countries_id.includes(country.id.toString())) { //pregunto si a mi activity le agregaron countries,
                    return (
                      <div key={country.id} className={s.seleccionado}>
                        <p>{country.name}</p> 
                        <button value={country.id} onClick={eliminarCountry}>
                          x
                        </button>
                      </div>
                    )
                  } else {
                    return [];
                  }
                })
              : []}
          </div>
        </div>
        {error ? (
          <div className={s.divError}>
            <p>{error}</p>
          </div>
        ) : (
          <input
            type='submit'
            value='Registrar actividad'
            className={s.submit}
          />
        )}
      </form>
    </div>
  )
}
