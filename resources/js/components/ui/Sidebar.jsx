import React, { Fragment } from "react";
import styled,{ css } from "styled-components";
import Button from "./Button"
import H1 from "./H1"
import { Link } from 'react-router-dom'
import { string } from "postcss-selector-parser";

const SidebarUI = styled.nav`
  color: #3d4671;
  border-right: 1px solid #dbeaf4;
`;

const BrandUI = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 50px;
  border-bottom: 1px solid #DBEAF4;
  &:figure {
    display: flex;
    align-items: center;
    &:img {
      margin-right: 4px;
    }
    &:h3 {
      margin: 0;
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

const SidebarLinkListUI = styled.ul`
  padding-top: 15px;
  padding-left: 0;
  list-style: none;
  height: 500px;
  border-bottom: 1px solid #DBEAF4;
  overflow-y: auto
  ${({ sub }) => sub && `
    padding-left: 30px;
    list-style: none;
    height: auto;
    border-bottom: none;
    overflow-y: auto
  `}
`
const LinkUI=styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #737A9B ;
    background-color: transparent;
    padding-left: 58px;
    text-decoration: none;
    &:hover{
      background-color: #EDF4F8;
      
    }
`

const SidebarMainLinkUI=styled.div`
    display: flex;
    align-items: center;
    padding-left: 58px;
    height: 30px;
    border-bottom: 1px solid #DBEAF4;
`
const SidebarListItemUI=styled.li`
  min-height: 27px;

 

  &${SidebarLinkListUI}:{
    display:none;
  }
  
  ${({ opened }) => opened && `
  ul {
    display: block;
  }

  & > ${LinkUI} {
    color: #ffffff;
    background-color: #737A9B;
    &:hover {
      color: #ffffff;
      background-color: #737A9B;
    }
  }
`}
`
const Sidebar = ({ title, children, data, opened,...attrs }) => {
  return (
    <SidebarUI>
      <H1 bold>{title}</H1>
      <BrandUI>
        <figure>
          <img src={require('../../mockup/images/brand-logo.png')} alt="Brand name" />
          <h3>{title}</h3>
        </figure>
      </BrandUI>
      <SidebarMainLinkUI>
        <Button link='#'>Перейти на asdaсайт</Button>
      {/* <button type="button" className="btn btn-link">
          
        </button> */}
        </SidebarMainLinkUI>
      
      <SidebarLinkListUI>
      {data.map((item,idx)=>{
        const {name, data} = item
      return typeof data === "string" ? 
      <SidebarListItemUI key={idx}><LinkUI to="#">{name}</LinkUI></SidebarListItemUI>:
      <Fragment key={idx}>
        <SidebarListItemUI opened><LinkUI to="#">{name}</LinkUI>
          <SidebarLinkListUI sub>
            {data.map((sub,ids)=>{
              return (
                <SidebarListItemUI  key={ids}><LinkUI to="#">{sub.name}</LinkUI></SidebarListItemUI>
              )
            })}
          </SidebarLinkListUI>
        </SidebarListItemUI>
      </Fragment>
      })}


    </SidebarLinkListUI> 
      <div className="sidebar__footer">
        <button type="button" className="btn btn-plain">
          <i className="icon-delete" /> Корзина
        </button>
        <button type="button" className="btn btn-plain">
          <i className="icon-man" /> Пользователи
        </button>
        <button type="button" className="btn btn-plain">
          <i className="icon-gear" /> Настройки
        </button>
        <button type="button" className="btn btn-plain">
          <i className="icon-question-round" /> Раздел помощи
        </button>
        <figure className="sidebar__footer__signature">
          <h3>Rocket Engine</h3>
          <img src="/static/images/image-rocketfirm-logo.png" />
        </figure>
      </div>
    </SidebarUI>
  );
};
export default Sidebar;

