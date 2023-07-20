import React, { Component } from "react";
import {
  DropDown,
  FormButton,
  FormHeading,
  FormWrapper,
  InputElement,
  Lable,
  Option,
  Radio,
  RadioWrapper,
  TextArea,
} from "./Form.styled";

export default class Form extends Component {
  render() {
    return (
      <FormWrapper>
         <FormHeading>Enter your Details</FormHeading>
        <InputElement type="email" placeholder="Enter your email" />
        <InputElement type="number" placeholder="Enter your mobile number" />
        <DropDown>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </DropDown>
        <InputElement type="date" placeholder="Enter your birt date" />
        <TextArea rows="4" cols="50" placeholder="Enter your address" />
        <RadioWrapper>
         <Lable>Blood group</Lable>
          <Radio type="radio" id="A" name="blood-group" value="A" />
          <Lable htmlFor="A">A</Lable>
          <Radio type="radio" id="B" name="blood-group" value="B" />
        
          <Lable htmlFor="B">B</Lable>
          <Radio type="radio" id="AB" name="blood-group" value="AB" />
          <Lable htmlFor="AB">AB</Lable>
          <Radio type="radio" id="O" name="blood-group" value="O" />
          <Lable htmlFor="O">O</Lable>
        </RadioWrapper>

        <FormButton type="submit">Submit</FormButton>
      </FormWrapper>
    );
  }
}
