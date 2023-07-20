import React, { Component } from "react";
import "./MobileNumber.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class MobileNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      value: "",
      mobileNumber: "",
      showCheckButton: false,
      displayMessage: false,
      isNumberValid: false,
      showProceedButton: false,
      showFinalMsg: false,
    };
  }

  mobileChangeHandler = (number) => {
    if (number.length > 10) return;
    if (number.length < 10) {
      this.setState({
        showCheckButton: false,
        displayMessage: false,
        showProceedButton: false,
        showFinalMsg: false,
      });
    }
    if (number.length === 0) {
      this.setState({
        showCheckButton: false,
      });
    }
    if (number.length === 10) {
      this.setState({
        displayMessage: false,
        showProceedButton: false,
        showCheckButton: true,
      });
    }
    this.setState({
      mobileNumber: number,
    });
  };

  numbers = [
    9886342019, 9865321470, 9221486696, 9203671212, 9016931299, 9734904593,
    9456227636, 9811394576, 9167222687, 9087645882, 9616674737, 9798080955,
    9591756913, 9439212700, 9194437365, 9533292268, 9748884085, 9975839592,
    9871061992, 9630475822,
  ];

  generateMobileNumber = () => {
    let num = 9000000000 + Math.round(Math.random() * 1000000000);
    this.setState({
      mobileNumber: num,
      showCheckButton: true,
      displayMessage: false,
      showProceedButton: false,
      showFinalMsg: false,
    });
  };

  validateMobileNumber = () => {
    let validNumber = this.numbers.includes(Number(this.state.mobileNumber));
    this.setState({
      displayMessage: true,
      isNumberValid: validNumber,
      showProceedButton: true,
      showFinalMsg: false,
    });
  };

  proceedHandler = () => {
    this.numbers.push(this.state.mobileNumber);
    this.setState({
      displayMessage: false,
      showFinalMsg: true,
      showCheckButton: false,
      showProceedButton: false,
      mobileNumber: "",
    });
  };

  storePhoneNumber = (number) => {
    this.setState({
      value: number,
    });
  };

  setStartDate = (date) => {
    this.setState({
      date,
    });
  };

  render() {
    return (
      <div className="layout">
        <div className="user-section">
          <h4>Get your mobile number</h4>
          <div className="generate">
            <input
              type="number"
              value={this.state.mobileNumber}
              onChange={(e) => this.mobileChangeHandler(e.target.value)}
              placeholder="type or generate mobile number..."
            />
            <button onClick={this.generateMobileNumber}>
              Generate Mobile Number
            </button>
          </div>
          {this.state.showCheckButton && (
            <button onClick={this.validateMobileNumber}>Check Number</button>
          )}
        </div>
        <div className="message-section">
          {this.state.displayMessage && this.state.isNumberValid && (
            <h2>
              {this.state.mobileNumber} is already taken, please try with other
              Mobile number
            </h2>
          )}
          {this.state.displayMessage && !this.state.isNumberValid && (
            <h2>{this.state.mobileNumber} - This number is Available...</h2>
          )}
          {this.state.showFinalMsg && (
            <h2>Thank you for choosing the number</h2>
          )}
          {this.state.showProceedButton && !this.state.isNumberValid && (
            <button onClick={this.proceedHandler}>Proceed</button>
          )}
          <div>
            <PhoneInput
              placeholder="Enter phone number"
              value={this.state.value}
              onChange={this.storePhoneNumber}
              defaultCountry="IN"
              international
            />
            <DatePicker
              selected={this.state.date}
              onChange={(date) => this.setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
        </div>
      </div>
    );
  }
}
