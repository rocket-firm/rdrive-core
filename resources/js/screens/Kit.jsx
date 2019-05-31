import React from 'react';
import Layout from 'components/Layout';
import H1 from 'components/ui/H1';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input'
import Sidebar from 'components/ui/Sidebar' 

const SideBarLinks=[
  {
    name:'Большая работа',
    link:"/"
  },
  {
    name:'Большая работа',
    link:"/"
  },
  {
    name:'Большая работа',
    link:"/",
    sublink:[
      {
        name:'Большая работа',
        link:"/"
      },
      {
        name:'Большая работа',
        link:"/"
      },
    ]
  },
  {
    name:'Большая работа',
    link:"/"
  },
  {
    name:'Большая работа',
    link:"/"
  },
]
export default () => (
  
  <Layout>
    <H1 custom ='red'>Kit</H1>
    <Button>Button</Button>
    <Input />
    <Sidebar title='Kazkommerts Securities' data={SideBarLinks}/>
  </Layout>
);