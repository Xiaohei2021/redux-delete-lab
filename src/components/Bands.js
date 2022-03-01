// import React from 'react';
// import Band from './Band';

// const Bands = props => {
//     //  const bands = props.bands.map( band => <Band key={band.id} delete={props.delete} {...band} />)
    
//      return(
//             props.bands.map( band => <Band key={band.id} delete={props.delete} name={band.name} />) 
//     );

//     // return(
//     //     <div>
//     //         {bands}
//     //     </div>
//     // )
// }
// export default Bands;


import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;