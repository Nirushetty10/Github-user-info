import axios from "axios";
import React, { Component } from "react";
import { styled } from "styled-components";
import { LineWave } from "react-loader-spinner";

const DataContainer = styled.div`
  width: 100%;
  background-color: #d8858c;
  position: relative;
  padding-bottom: 3rem;
`;
const TopSection = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid gold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.45rem;
  font-weight: 400;
`;
const BottomSection = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-auto-rows: 200px;
  gap: 50px;
  padding: 3rem 6rem;
  box-sizing: border-box;
`;
const Card = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 25px -4px #050505;
  border-radius: 10px;
  /* transition: transform 1s ease; */
  &:hover {
    transform: scale(1.05);
  }
`;
const CardHeading = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #e14f4f;
  margin: 1rem 0;
`;
const CardContent = styled.h3`
  font-size: 1rem;
  text-align: center;
  color: #fd3d3d;
  margin: 1rem 0;
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
width: 15rem;
  position:absolute;
  right: 0;
  left: 0;
  margin:auto;
  bottom:10px;
`

export default class Unsplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      loading: true,
      noOfElement : 4
    };
  }

  fetchData = () => {
    const URL =
      "https://api.data.gov.in/resource/5ffbd21d-2000-4f78-a768-095d7be3b865?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json";
    axios
      .get(URL)
      .then((res) => {
        this.setState({
          loading: false,
          data: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error:
            "Cannot get the data from server at this time.. please try after some times",
        });
      });
  };

  componentDidMount() {
    this.fetchData();
    window.addEventListener("scroll" , this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll")
  }

  handleLoad = ()=> {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(scrollable - scrolled === 0) {
      this.setState({
        noOfElement : this.state.noOfElement+2
      })
    }
  }

  render() {
    const { desc, records } = this.state.data;

    if (this.state.error) {
      return;
    }
    if (this.state.loading) {
      return (<LoadingContainer>
        <LineWave
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        </LoadingContainer>
      );
    }

    const dispaly = this.state.data.records.slice(0,this.state.noOfElement);
   
    return (
      <DataContainer>
        <TopSection>{desc}</TopSection>
        <BottomSection>
          {!this.state.loading &&
            dispaly.map((record) => {
              return (
                <Card key={record.id}>
                  <CardHeading>{record.month}</CardHeading>
                  <CardContent>
                    Aircrafts departured in no.s -{" "}
                    {record.aircraft_flown___departures__in_number_}
                  </CardContent>
                  <CardContent>
                    Aircraft flown hours -{" "}
                    {record.aircraft_flown___hours__in_number_} hr
                  </CardContent>
                  <CardContent>
                    Total passengers carrieed -{" "}
                    {record.passengers_carried_inumber_}
                  </CardContent>
                </Card>
              );
            })}
        </BottomSection>
      </DataContainer>
    );
  }
}
