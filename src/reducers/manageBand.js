import uuid from "uuid";


export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        name: action.name
      }
  //  return {...state, bands:[...state.bands, band]}

      return { bands:state.bands.concat(band)}

     case "DELETE_BAND":{
       
       return {
          bands: state.bands.filter(band=> band.id !== action.id)
       }
      // const bands = state.bands.filter (band=> band.id !== action.id);
      // return {bands}
     } 
    default:
      return state
  
  }
};


// export default function manageBand(state = {
//   bands: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_BAND':
//       const band = { id: Math.random(), name: action.name }
//       return { ...state, bands: [...state.bands, band] }
//     case 'DELETE_BAND':
//       const bands = state.bands.filter(band => band.id !== action.id);
//       return { bands };
//     default:
//       return state;
//   }
// };