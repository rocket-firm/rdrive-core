import React, {Component} from 'react';
import Dashboard from 'screens/Dashboard';
import AuthentificateCont from './AuthentificateCont';
import TableContainer from './TableContainer';
import SchemasContainer from './SchemasContainer';
import LayoutDefault from 'components/layouts/LayoutDefault';
import SidebarContainer from 'components/ui/Sidebar';

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
    console.dir(this)
    return (
      <SchemasContainer>
        <LayoutDefault>
          <SidebarContainer />
          <TableContainer />
        </LayoutDefault>
      </SchemasContainer>
    )
    return (
      <Fragment>
        <Dashboard {...this.props} />
        <TableContainer {...this.props}/>
      </Fragment>
    );
  }
}

export default DashboardScreenContainer;
