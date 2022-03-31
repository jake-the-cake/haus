import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../static/colors';
import { ShoppingList } from '../../static/fakedata';

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

/* SORT and ADD Buttons */
const ActionBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.black.tran};
`;

const FilterByBlock = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 10px;
`;

const FilterByLabel = styled.span`
`;

const FilterBySelect = styled.select`

`;

const FilterByOption = styled.option`

`;

const AddButtonBlock = styled.div`
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: ${props=>props.action === "filter" ? "5px" : "10px 15px"};
  font-size: ${props=>props.action === "filter" ? "12px" : "18px"};
  border: ${props=>props.action === "filter" ? "2px" : "3px"} solid transparent;
  background-color: ${props=>props.action === "filter" ? `${Colors.jelly[1]}` : `${Colors.jelly[0]}`};
  #color: ${props=>props.action === "filter" ? `${Colors.white.true}` : `${Colors.jelly[1]}`};
  color: ${Colors.white.true};
  font-weight: 700;
  transition: all 0.3s ease;
  border-radius: ${props=>props.action === "filter" ? "inherit" : "10px"};

  &:hover{
    border-color: ${Colors.jelly[0]};
    background-color: ${Colors.jelly[1]};
    color: ${Colors.jelly[0]};
  };
`;

/* DISPLAY block */
const DisplayBlock = styled.div`

`;

const ShoppingListHome = () => {
  return (
    <Container>
        <ContentWrapper>
          <TitleBlock>
            <Title>Shopping List</Title>
            <TitleLine/>
          </TitleBlock>
          <ActionBlock>
            <FilterByBlock>
              <FilterByLabel>Filter By:</FilterByLabel>
              <FilterBySelect>
                <FilterByOption selected disabled>Store</FilterByOption>
                <FilterByOption>All Stores</FilterByOption>
                <FilterByOption>Target</FilterByOption>
                <FilterByOption>Wegmans</FilterByOption>
              </FilterBySelect>
              <Button action="filter">Filter</Button>
            </FilterByBlock>
            <AddButtonBlock>
              <Button>Add To List</Button>
            </AddButtonBlock>
          </ActionBlock>
          <DisplayBlock>
            No Content To Display... {ShoppingList.items[0].name}
          </DisplayBlock>
        </ContentWrapper>
    </Container>
  )
};

export default ShoppingListHome;