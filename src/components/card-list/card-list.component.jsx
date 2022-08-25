//import { useState, useEffect } from 'react';
import './card-list.styles.css';
import Card from '../card/card-component';

const CardList = ({monsters}) => (
    <div className="card-list" key='1234card' >
        {monsters.map((monster) => {
        return(
            <Card monster={monster} />
        )})}
    </div>
);


// class CardList extends Component {
//     render(){

//         const {monsters} = this.props;

//         return(
//             //you can only return ONE top level div
//             <div className="card-list" key='1234card' >
//                 {monsters.map((monster) => {
//                 return(
//                     <Card monster={monster} />
//                 )})}
//             </div>
//         )
//     }
// }

export default CardList;