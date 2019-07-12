import React from 'react';
import Layout from 'components/ui/Layout';
import Sidebar from 'components/ui/Sidebar';

export default ({ settings, schemas }) => (
  <Layout>
    <Layout width="250px" height="100vh">
      {
        settings && schemas
        && (
        <Sidebar
          settings={settings}
          schemas={schemas}
        />
        )
      }
    </Layout>
  </Layout>
);
