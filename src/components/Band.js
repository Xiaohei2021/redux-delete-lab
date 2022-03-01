import React from 'react';

const Band = (props) => {
    debugger
    
    return(
       <li>
           {props.name}
           <button onClick={()=>props.deleteBand(props.id)}>Delete</button>
       </li>
       
    );
}
export default Band;


// import React, { Component } from 'react'

// export default class Band extends Component {

//     handleClick = () => {
//         this.props.delete(this.props.id)
//     }

//   render() {
//     return (
//       <div>
//         <li>
//             {this.props.name}
//             <button onClick={this.handleClick}>Delete</button>
//         </li>
//       </div>
//     )
//   }
// }




// import React, { Component } from 'react';

// class Band extends Component {

//   handleOnClick = () => {
//     this.props.deleteBand(this.props.id)
//   }

//   render() {
//     return(
//       <div>
//         <li>{this.props.name}</li>
//         <button onClick={this.handleOnClick}>
//           Delete
//         </button>
//       </div>
//     )
//   }
// };

// export default Band;