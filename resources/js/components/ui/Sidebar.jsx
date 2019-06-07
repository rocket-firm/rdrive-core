import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { string } from "postcss-selector-parser";
import Button from "./Button";
import H from "./H";
const SidebarUI = styled.nav`
  color: #3d4671;
  border-right: 1px solid #dbeaf4;
  height: 100%;
`;

const BrandUI = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  border-bottom: 1px solid #dbeaf4;
  figure {
    display: flex;
    align-items: center;
    img {
      margin-right: 4px;
    }
    h6 {
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
  border-bottom: 1px solid #dbeaf4;
  overflow-y: auto
    ${({ sub }) =>
      sub &&
      `
    list-style: none;
    height: auto;
    border-bottom: none;
    overflow-y: auto
    ${LinkUI}{
      padding-left: 78px;
    }
  `};
`;
const LinkUI = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  height: 100%;
  color: #737a9b;
  background-color: transparent;
  padding-left: 58px;
  text-decoration: none;
  &:hover {
    background-color: #edf4f8;
  }
  :before {
    content: "o";
    margin-right: 10px;
    font-size: 6px;
  }
`;

const ButtonPlainUI = styled.button`
  background-color: transparent;
  color: #737a9b;
  cursor: pointer;
  &:hover {
    color: #177ff2;
  }
  i {
    position: relative;
    bottom: -2px;
  }
`;
const SidebarMainLinkUI = styled.div`
  display: flex;
  align-items: center;
  padding-left: 58px;
  height: 30px;
  border-bottom: 1px solid #dbeaf4;
`;
const SidebarListItemUI = styled.li`
  min-height: 27px;

  &${SidebarLinkListUI}: {
    display: none;
  }
  ${({ sub }) =>
    sub &&
    `
    background:red;  


  `};
  ${({ opened }) =>
    opened &&
    `
  ul {
    display: block;
  }

  & > ${LinkUI} {
    border:0;
    color: #ffffff;
    background-color: #737A9B;
    &:hover {
      color: #ffffff;
      background-color: #737A9B;
    }
  }
`}
`;
const SidebarFooterUI = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding-left: 58px;
  ${ButtonPlainUI} {
    border: 0;
    padding: 11px;
    position: relative;
    left: -0.75rem;
  }
  h3 {
    margin: 0;
    color: $color-primary-dark;
    font-weight: bold;
  }
  figure {
    margin: 22px 0 0 0;
  }
`;
const Sidebar = ({ title, children, data, opened, ...attrs }) => {
  const a = 1;
  return (
    <SidebarUI>
      <BrandUI>
        <figure>
          {/* <img  src={require('../../mockup/images/brand-logo.png')} alt="Brand name" /> */}
          <H size="6" bold>
            {title}
          </H>
        </figure>
      </BrandUI>
      <SidebarMainLinkUI>
        <Button link="#">Перейти на asdaсайт</Button>
      </SidebarMainLinkUI>

      <SidebarLinkListUI>
        {data.map((item, idx) => {
          const { name, data } = item;
          return typeof data === "string" ? (
            <SidebarListItemUI key={idx}>
              <LinkUI to="#">{name}</LinkUI>
            </SidebarListItemUI>
          ) : (
            <Fragment key={idx}>
              <SidebarListItemUI opened>
                <LinkUI to="#">{name}</LinkUI>
                <SidebarLinkListUI sub>
                  {data.map((sub, ids) => (
                    <SidebarListItemUI key={ids}>
                      <LinkUI to="#">{sub.name}</LinkUI>
                    </SidebarListItemUI>
                  ))}
                </SidebarLinkListUI>
              </SidebarListItemUI>
            </Fragment>
          );
        })}
      </SidebarLinkListUI>
      <SidebarFooterUI>
        <ButtonPlainUI>
          {/* <i className="icon-delete" /> */}
          Корзина
        </ButtonPlainUI>

        <ButtonPlainUI>
          {/* <i className="icon-man" /> */}
          Пользователи
        </ButtonPlainUI>
        <ButtonPlainUI>
          {/* <i className="icon-gear" /> */}
          Настройки
        </ButtonPlainUI>
        <ButtonPlainUI>
          {/* <i className="icon-question-round" /> */}
          Раздел помощи
        </ButtonPlainUI>
        <figure className="sidebar__footer__signature">
          <H size="3" bold>
            Rocket Engine
          </H>
          <img
            src={require("../../../../public/images/image-rocketfirm-logo.png")}
            alt="Brand name"
          />
        </figure>
      </SidebarFooterUI>
    </SidebarUI>
  );
};
export default Sidebar;
