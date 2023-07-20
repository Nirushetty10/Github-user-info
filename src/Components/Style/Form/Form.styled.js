import styled from "styled-components";

const FormWrapper = styled.form`
  margin: 2rem auto;
  width: 30rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(73, 128, 223);
`;

const InputElement = styled.input`
  width: 80%;
  height: 2rem;
  margin: 1rem 0;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;
  box-sizing: border-box;

  &:focus {
    outline : none;
  }
`;

const FormButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: rgb(0, 42, 255);
  border: none;
  color: #fff;
  margin: 1rem auto;

  &:hover {
    background-color : rgb(0, 26, 103);
  }
`;

const DropDown = styled.select`
  width: 80%;
  height: 2rem;
  margin: 1rem 0;
  border: none;
  border-radius: 12px;
  padding: 0 1rem;
  box-sizing: border-box;
  &:focus {
    outline : none;
  }
`;

const Option = styled.option`
  background-color: rgb(112, 131, 226);
  color: #fff;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 50%;
  margin: 1rem 0;
  padding: 1rem;
  box-sizing: border-box;

  &:focus {
    outline : none;
  }
`;
const Lable = styled.label`
  color: #fff;
`;
const Radio = styled.input`
  color: #fff;
`;
const RadioWrapper = styled.div`
  display: flex;
  justify-content : space-between;
  width : 20rem;
`;

const FormHeading = styled.h2`
margin : 1rem 0;
 height: 1.5rem;
 text-align  : center;
 color : #fff;
`

export {
  FormWrapper,
  InputElement,
  FormButton,
  DropDown,
  Option,
  TextArea,
  Lable,
  Radio,
  RadioWrapper,
  FormHeading
};
