import React, {Component} from 'react';
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

class DashboardScreenContainer extends Component {

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
