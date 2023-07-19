import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #5063a1;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const Input = styled.input`
  width: 20rem;
  height: 2rem;
  border: none;
  border-radius: 4px;
  padding: 0 0.6rem;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 10rem;
  height: 2rem;
  border: none;
  background-color: #022dba;
  color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: #001d7a;
  }

  & a {
    text-decoration : none;
    color : #fff;
  }
`;

const UserCard = styled.div`
  width: 70%;
  height: 70vh;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  box-shadow : 2px 2px 28px #181818;;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const SectionLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
`;

const SectionRight = styled.div`
  padding: 2rem;
  width: 55%;
  height: 100%;
`;

const Content = styled.h5`
  font-weight: 500; 
  margin : 0 0 0 0.4rem;
`;

const FollowingInfoCard = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius : 12px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  background-color: #b0cacf;
`
const ContentWrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
`

const FollowerContentWrapper = styled.div`
   width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  Container,
  SearchWrapper,
  Input,
  Button,
  UserCard,
  SectionLeft,
  ProfileImage,
  ImageContainer,
  SectionRight,
  Content,
  FollowingInfoCard,
  ContentWrapper,
  FollowerContentWrapper
};
