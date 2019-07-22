import React, {Component} from 'react';
import AuthentificateCont from './AuthentificateCont';
import SchemasContainer from './SchemasContainer';
import LayoutDefault from 'components/layouts/LayoutDefault';
import TableContainer from './TableContainer';

class TableScreenContainer extends AuthentificateCont {

    render() {
        console.dir(this)
        return (
            <SchemasContainer>
                <LayoutDefault>
                    <TableContainer {...this.props}>

                    </TableContainer>
                </LayoutDefault>
            </SchemasContainer>
        )
    }
}

export default TableScreenContainer;


