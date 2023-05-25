import axios from 'axios'

export function getCountries (order) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/countries?order=${order}`)
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: json.data
    })
  }
}

export function getNameCountryForm (name) {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/countries?name=' + name)
      return dispatch({ type: 'GET_NAME_COUNTRY_FORM', payload: json.data })
    } catch (error) {
      return dispatch({
        type: 'FAILURE',
        payload: error.response.data.msg
      })
    }
  }
}

export function getNameCountry (name) {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/countries?name=' + name)
      var resp = json.data
      return dispatch({ type: 'GET_NAME_COUNTRY', payload: resp })
    } catch (error) {
      return dispatch({
        type: 'FAILURE',
        payload: error.response.data.msg
      })
    }
  }
}

export function changePage (page) {
  return {
    type: 'CHANGE_PAGE',
    payload: page
  }
}

export const getCountryDetail = id => {
  return dispatch => {
    return axios
      .get(`http://localhost:3001/countries/${id}`)
      .then(r => {
        return dispatch({
          type: 'GET_COUNTRY_DETAIL',
          payload: r.data
        })
      })

      .catch(err => {
        alert(err)
      })
  }
}

export function postActivity (payload) {
  console.log(payload)
  return async function (dispatch) {
    try {
      const res = await axios.post('http://localhost:3001/activity', payload)
      return dispatch({
        type: 'POST',
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getCountryId (id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({ type: 'GET_COUNTRY_ID', payload: json.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export function clearNameCountryForm () {
  return function (dispatch) {
    return dispatch({ type: 'CLEAR_NAME_COUNTRY_FORM' })
  }
}

export function byActivity (payload) {
  return {
    type: 'BY_ACTIVITY',
    payload
  }
}

export function byContinent (payload) {
  //funcion a la cual le voy a pasar el payload
  // console.log(payload)
  return {
    type: 'BY_CONTINENT',
    payload
  }
}

export function byPoblation (payload) {
  return {
    type: 'BY_POBLATION',
    payload
  }
}

export function byOrder (payload) {
  return {
    type: 'BY_ORDER',
    payload
  }
}

export function setContinent (continent) {
  return {
    type: 'SET_CONTINENT',
    payload: continent
  }
}

// export function byPopulation (payload) {
//     return async function (dispatch) {
//         var json = await axios.get(`http://localhost:3001/countries/`)
//     }
// }
