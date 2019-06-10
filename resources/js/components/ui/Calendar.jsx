import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import flatpickr from "flatpickr";
import Layout from "./Layout";
import 'flatpickr/dist/flatpickr.css'

const CalendarInputUI = styled.input`
  width: 116px;
  height: 35px;
  padding: 10px 10px;
  outline: none;
  color: #3d4671;
  font: 15px/19px Source Sans Pro;
  margin-right: 10px;
`;


export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.datePicker = React.createRef();
    this.datePicker1 = React.createRef();
  }

  onChange(selectedDates, dateStr, instance) {
    console.log(selectedDates);
  }
  componentDidMount() {
    flatpickr(this.datePicker.current, {
      onChange: this.onChange
    });
    flatpickr(this.datePicker1.current, {
      onChange: this.onChange
    });
  }

  render() {
    return (
      <Layout>
        <CalendarInputUI type="date" ref={this.datePicker} />
        <CalendarInputUI type="date" ref={this.datePicker1} />
      </Layout>
    );
  }
}

