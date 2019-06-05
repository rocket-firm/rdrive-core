import React, { useState } from 'react';
import Layout from 'components/Layout';
import H1 from 'components/ui/H1';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input'
import Sidebar from 'components/ui/Sidebar' 
import links from "../mockup/links"
import Checkbox from "components/ui/Checkbox"



const Kit = () => {
  const [count, setCount] = useState(false)

 return (
   <Layout vertical>
    <H1 color="red">Kitdasfaaaaa</H1>
    <Button link="/test" >asdasddddd</Button>
    <Input />
    <label>
      <Checkbox
        checked={count}
        onChange={()=>setCount(event.target.checked)}
      />
      <span style={{ marginLeft: 8 }}>Label Text</span>
    </label>
    <Sidebar title='Kazkommerts Securities'  data={links} />
    
  </Layout>
     
   
 );
};

export default Kit
