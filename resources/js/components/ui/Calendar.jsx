import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

const CalendarWrapperUI = styled.span`
  position: relative;
`;

const CalendarInputUI = styled(Flatpickr)`
box-sizing: border-box;
  width: 116px;
  height: 35px;
  padding: 10px 10px;
  border: 1px solid #DBEAF4;
  border-radius: 2px;
  outline: none;
  color: #3d4671;
  font: 15px/19px Source Sans Pro;
  margin-right: 10px;
`;
const CalendarIconUI = styled.svg`
  position: absolute;
  right: 25px;
  top: calc(50% - 7px);
  width: 13px;
  height: 14px;
  fill: none;
`;
export default class Calendar extends Component {
  state = {
    dateStart: new Date(),
    dateEnd: new Date()
  };

  render() {
    const { dateStart, dateEnd } = this.state;
    return (
      <Layout>
        <CalendarWrapperUI>
          <CalendarInputUI
            options={{ locale: Russian }}
            value={dateStart}
            onChange={dateStart => {
              this.setState({ dateStart });
            }}
          />
          <CalendarIconUI viewBox="0 0 13 14">
            <path
              d="M11.6179 1.16202H10.2221V0.642386C10.2221 0.367287 10.0305 0.15332 9.78421 0.15332H8.60737C8.36105 0.15332 8.16947 0.367287 8.16947 0.642386V1.16202H4.73474V0.642386C4.73474 0.367287 4.54316 0.15332 4.29684 0.15332H3.12C2.87368 0.15332 2.68211 0.367287 2.68211 0.642386V1.16202H1.38211C0.61579 1.16202 0 1.86505 0 2.70563V12.4564C0 13.3123 0.61579 14 1.38211 14H11.6179C12.3842 14 13 13.3123 13 12.4564V2.70563C13 1.86505 12.3842 1.16202 11.6179 1.16202ZM11.6179 13.19H1.38211C1.01263 13.19 0.711579 12.8538 0.711579 12.4411V4.52435H12.2747V12.4564C12.2884 12.869 11.9874 13.19 11.6179 13.19Z"
              fill="#737A9B"
            />
          </CalendarIconUI>
        </CalendarWrapperUI>

        <CalendarWrapperUI>
          <CalendarInputUI
            options={{ locale: Russian }}
            value={dateEnd}
            onChange={dateEnd => {
              this.setState({ dateEnd });
            }}
          />
          <CalendarIconUI viewBox="0 0 13 14">
            <path
              d="M11.6179 1.16202H10.2221V0.642386C10.2221 0.367287 10.0305 0.15332 9.78421 0.15332H8.60737C8.36105 0.15332 8.16947 0.367287 8.16947 0.642386V1.16202H4.73474V0.642386C4.73474 0.367287 4.54316 0.15332 4.29684 0.15332H3.12C2.87368 0.15332 2.68211 0.367287 2.68211 0.642386V1.16202H1.38211C0.61579 1.16202 0 1.86505 0 2.70563V12.4564C0 13.3123 0.61579 14 1.38211 14H11.6179C12.3842 14 13 13.3123 13 12.4564V2.70563C13 1.86505 12.3842 1.16202 11.6179 1.16202ZM11.6179 13.19H1.38211C1.01263 13.19 0.711579 12.8538 0.711579 12.4411V4.52435H12.2747V12.4564C12.2884 12.869 11.9874 13.19 11.6179 13.19Z"
              fill="#737A9B"
            />
          </CalendarIconUI>
        </CalendarWrapperUI>
      </Layout>
    );
  }
}
