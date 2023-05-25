
const initialState = {
    continent: '',
    countries: [],
    countryDetail: [],
    allCountries: [],
    allActivities: [],
    countryForm: [],
    activity:[],
    detail: '',
    loading: true,
    error: ""
}

function rootReducer(state=initialState,action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                allActivities: action.payload,
                loading: false
            }
            case "SET_CONTINENT":
                return {
                     ...state,
                     continent: action.payload
                }
            case "GET_COUNTRY_DETAIL":
                return {
                    ...state,
                    countryDetail: action.payload
                }
        case 'GET_COUNTRY_ID':
            console.log(action.payload)
            return {
                ...state,
                countries: action.payload,
                countryDetail: action.payload,
                loading: false
            }
        case 'POST_ACTIVITY':
            return {
                ...state
            }
        case 'GET_ACTIVITY':
          return {
            ...state,
            loading: false,
            activity: action.payload,
        }
            case 'GET_NAME_COUNTRY_FORM':     
             return {
                ...state,
                countryForm: action.payload

                }
                case 'GET_NAME_COUNTRY':     
             return {
                 ...state,
                 countries: action.payload,
                 loading: false

                }
            case "CHANGE_PAGE":
                return {
                    ...state,
                    actualPage: action.payload
                }
            case 'BY_CONTINENT':
                const allCountries = state.allCountries
                const continentFilter = action.payload === "All" ? allCountries : allCountries.filter(el=> el.continent === action.payload)
                return {
                    ...state,
                    countries: continentFilter,
                    loading: false

                }
            case 'BY_ACTIVITY':
                    const allActivities = state.allActivities;
                    const activityFilter = action.payload === 'All' ? allActivities.filter(e => e.activities.length > 0) :
                        allActivities.filter(c => c.activities.find((element) => element.name.toLowerCase() === action.payload))
                    return {
                        ...state,
                        countries: activityFilter
                    }
            case 'FAILURE':
                return {
                    ...state,
                    error: action.payload
                }
            case 'LOADING':
                return {
                    ...state,
                    loading: true
                }
        default:
            return state
    }
}

export default rootReducer;