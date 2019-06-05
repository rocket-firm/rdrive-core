import React, { useState } from 'react';
import Layout from 'components/Layout';
import H1 from 'components/ui/H1';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input'
import Sidebar from 'components/ui/Sidebar' 
import links from "../mockup/links"
import Checkbox from "components/ui/Checkbox"
import Switch from "components/ui/Switch"


const Kit = () => {
  const [isChecked, setChecker] = useState(false)

 return (
   <Layout vertical>
    <H1 color="red">Kitdasfaaaaa</H1>
    <Button link="/test" >asdasddddd</Button>
    <Input />
    <label>
      <Checkbox
        checked={isChecked}
        onChange={()=>setChecker(event.target.checked)}
      />
      <span style={{ marginLeft: 8 }}>Label Text</span>
    </label>
    <Switch/>
    <h3>Kazkommerts Securities</h3>
    <Sidebar title='Kazkommerts Securities'  data={links} title="Kazkommerts Securities"/>
    
  </Layout>
     
   
 );
};

export default Kit
