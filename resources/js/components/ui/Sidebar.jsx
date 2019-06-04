import React, { Fragment } from "react";
import styled,{ css } from "styled-components";
import Button from "./Button"
import H1 from "./H1"
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

const SidibarLinkList = styled.ul`
  padding-top: 15px;
  padding-left: 0;
  list-style: none;
  height: 500px;
  border-bottom: 1px solid #DBEAF4;
  overflow-y: auto
`
const SidebarListItem=styled.li`

  min-height: 27px;
  a{
    display: flex;
    align-items: center;
    height: 100%;
    color: #737A9B;
    background-color: transparent;
    padding-left: 58px;
    text-decoration: none;
    &:hover{
      background-color: #EDF4F8;
    }
    &:before {
      font-family: 'Icons';
      content:'\0055';
      margin-right: 10px;
      font-size: 6px;
    }
  }
    
`
const Sidebar = ({ title, children, ...attrs }) => {
  return (
    <SidebarUI>
      <H1>teawteae</H1>
      <BrandUI>
        <figure>
          <img src="/static/images/brand-logo.png" alt="Brand name" />
          <h3>{title}</h3>
        </figure>
      </BrandUI>
      <div className="sidebar__main-link">
        <button type="button" className="btn btn-link">
          Перейти на asdaсайт
        </button>
      </div>
      <SidibarLinkList>
  <SidebarListItem><a href="res">Болasdьшая работа</a></SidebarListItem>

        <li className="sidebar__links-list__item">
          <a href="#">Болasdьшая работа</a>
        </li>
        <li className="sidebar__links-list__item sidebar__links-list__item_opened">
          <a href="#">Открытый пункт</a>
          <ul>
            <li className="sidebar__links-list__item">
              <a href="#">Категории</a>
            </li>
            <li className="sidebar__links-list__item">
              <a href="#">Наборы</a>
            </li>
            <li className="sidebar__links-list__item">
              <a href="#">Клиенты</a>
            </li>
          </ul>
        </li>
        <li className="sidebar__links-list__item">
          <a href="#">Закрытый пункт</a>
          <ul>
            <li className="sidebar__links-list__item">
              <a href="#">Категории</a>
            </li>
            <li className="sidebar__links-list__item">
              <a href="#">Наборы</a>
            </li>
            <li className="sidebar__links-list__item">
              <a href="#">Клиенты</a>
            </li>
          </ul>
        </li>
        <li className="sidebar__links-list__item">
          <a href="#">
            Пункт с очень очень длинным названием (так пожелал клиент)
          </a>
        </li>
        {[...Array(5).keys()].map((item, key) => (
          <Fragment key={key}>
            <li className="sidebar__links-list__item">
              <a href="#">Отделы</a>
            </li>
            <li className="sidebar__links-list__item">
              <a href="#">Контакты</a>
            </li>
            <li className="sidebar__links-list__item">
              <a href="#">Вакансии и резюме</a>
            </li>
          </Fragment>
        ))}
    </SidibarLinkList> 
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
