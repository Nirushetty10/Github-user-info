import React, { Component } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { SiBiolink } from "react-icons/si";
import { BiSolidUserCircle } from "react-icons/bi";

import {
  Container,
  Input,
  SearchWrapper,
  Button,
  UserCard,
  SectionLeft,
  ImageContainer,
  ProfileImage,
  SectionRight,
  Content,
  FollowingInfoCard,
  ContentWrapper,
  FollowerContentWrapper,
} from "./Layout.styled";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      data: {},
    };
  }

  updateUsernameHandler = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  callGithubApi = async (userName) => {
    try {
      let response = await fetch(`https://api.github.com/users/${userName}`);
      let data = await response.json();
      this.setState({
        data,
      });
    } catch (error) {}
  };

  searchHandler = () => {
    this.callGithubApi(this.state.userName);
  };

  render() {
    const { avatar_url, name, login, bio, followers, following, html_url } =
      this.state.data;
    return (
      <Container>
        <SearchWrapper>
          <Input
            type="text"
            placeholder="Enter github username"
            onChange={this.updateUsernameHandler}
          />
          <Button onClick={this.searchHandler}>Search</Button>
        </SearchWrapper>
        {Object.keys(this.state.data).length > 0 && (
          <UserCard>
            <SectionLeft>
              <ImageContainer>
                <ProfileImage src={avatar_url} />
              </ImageContainer>
            </SectionLeft>
            <SectionRight>
              <ContentWrapper>
                <AiOutlineUser />
                <Content> {name}</Content>
              </ContentWrapper>
              <ContentWrapper>
                <BiSolidUserCircle />
                <Content>{login}</Content>
              </ContentWrapper>
              <ContentWrapper>
              <SiBiolink />
              <Content>{bio}</Content>
              </ContentWrapper>
              <FollowingInfoCard>
                <FollowerContentWrapper>
                <FaUserGroup />
                <Content>{followers} followers</Content>
                </FollowerContentWrapper>
                <FollowerContentWrapper>
                <FaUserGroup />
                <Content>{following} following </Content>
                </FollowerContentWrapper>
              </FollowingInfoCard>
              <Button>
                <a href={html_url} target="_blank">
                  Visit GitHub Account
                </a>
              </Button>
            </SectionRight>
          </UserCard>
        )}
      </Container>
    );
  }
}
