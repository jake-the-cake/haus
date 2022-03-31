import React from 'react';
import styled from 'styled-components';
import { Colors } from '../static/colors';

const Container = styled.div`
    background-color: ${Colors.jelly[0]};
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContentWrapper = styled.div`
  width: 85%;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: ${Colors.white.opaq};
  max-width: 650px;
  display: flex;
  flex-direction: column;
  border: 4px solid ${Colors.jelly[1]};
  border-radius: 10px;
`;

/* TITLE Block */
const TitleBlock = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-bottom: 10px
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${Colors.jelly[1]};
  font-style: italic;
`;

const TitleLine = styled.hr`
  flex: auto;
  border: none;
  height: 3px;
  background-color: ${Colors.jelly[1]};
`;

const Home = () => {
  return (
    <Container>
        <ContentWrapper>
          <TitleBlock>
            <Title>Home Page</Title>
            <TitleLine/>
          </TitleBlock>
        </ContentWrapper>
    </Container>
  )
};

export default Home;