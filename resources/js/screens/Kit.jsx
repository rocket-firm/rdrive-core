import React from 'react';
import Layout from 'components/Layout';
import H1 from 'components/ui/H1';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input'
import Sidebar from 'components/ui/Sidebar' 
import links from "../mockup/links"

export default () => (
  
  <Layout vertical>
    <H1 color="red">Kitdasfaa</H1>
    <Button link="/test" ></Button>
    <Input />
    {/* {console.log(Links)} */}
    <Sidebar title='Kazkommerts Securities'  data={links}/>
  </Layout>
);