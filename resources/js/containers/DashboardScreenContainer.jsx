import React, {Component} from 'react';
import AuthentificateCont from './AuthentificateCont';
import SchemasContainer from './SchemasContainer';
import LayoutDefault from 'components/layouts/LayoutDefault';

// class Layout extends Component {
//   render() {
//     return (
//       <div>
//         <div><SideBardCointer></SideBardCointer></div>
//         <div>{ children }</div>
//       </div>
//     )
//   }
// }

class DashboardScreenContainer extends AuthentificateCont {
  
  render() {
    return (
      <SchemasContainer>
        <LayoutDefault>
        </LayoutDefault>
      </SchemasContainer>
    )
  }
}

export default DashboardScreenContainer;
