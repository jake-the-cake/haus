import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../components/TitleBar';
import { Colors } from '../../static/colors';
import { ShoppingList } from '../../static/fakedata';

const Container = styled.div`
  background-color: ${Colors.jelly[0]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 85%;
  margin: 65px auto;
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
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.black.tran};

  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto inherit;
  }
`;

const FilterByBlock = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 10px;
`;

const FilterByLabel = styled.span`
  font-size: 12px;
  padding-bottom: 5px;

`;

const FilterBySelect = styled.select`
  border: none;
  padding: 5px;
  color: ${Colors.jelly[0]};
  font-weight: 700;
  background: linear-gradient(${Colors.white.half}, ${Colors.white.half}) ${Colors.jelly[1]};
`;

const FilterByOption = styled.option`
`;

const AddButtonBlock = styled.div`
  @media (max-width: 500px) {
    margin: 20px auto 0px;
  };
`;

const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.black.tran};
`;

const DisplayTableHeader = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  padding: 10px 10px 0px;
  font-size: 16px;
  #background-color: ${Colors.jelly[1]};
  background-image: linear-gradient(to bottom, ${Colors.white.tran}, ${Colors.jelly[1]}, ${Colors.jelly[1]});
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  font-weight: 700;
  color: ${Colors.white.true};
  margin-bottom: 0px;
`;
const DisplayTableRow = styled.div`
  display: flex;
  padding: 10px;
  font-size: 14px;
  background: linear-gradient(${Colors.yellow.invis},${Colors.yellow.invis}) ${Colors.white.opaq};
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  &:nth-child(odd){
    background-color: ${Colors.green.invis};
  };
  &:last-child{
    border-radius: 0px 0px 10px 10px;
  };
`;
const DTItem = styled.div`
  text-align: center;
  flex: 3;
  padding-bottom: 2px;
  border-bottom: ${props=>props.row === "head" ? `5px solid ${Colors.jelly[0]}` : "none"};
`;

const DTQty = styled.div`
  padding-bottom: 2px;
  text-align: center;
  border-bottom: ${props=>props.row === "head" ? `5px solid ${Colors.jelly[0]}` : "none"};
  flex: 1;
`;

const DTStore = styled.div`
  border-bottom: ${props=>props.row === "head" ? `5px solid ${Colors.jelly[0]}` : "none"};
  padding-bottom: 2px;
  text-align: center;
  flex: 2;
`;

const DTRemove = styled.div`
  border-bottom: ${props=>props.row === "head" ? `5px solid ${Colors.jelly[0]}` : "none"};
  padding-bottom: 2px;
  flex: .5;
  text-align: center;
`;

const ShoppingListHome = () => {
  return (
    <Container>
      <TitleBar />
        <ContentWrapper>
          <TitleBlock>
            <Title>Shopping List</Title>
            <TitleLine/>
          </TitleBlock>
          <ActionBlock>
            <FilterByBlock>
              <FilterByLabel>Filters:</FilterByLabel>
              <FilterBySelect>
                <FilterByOption selected disabled>Store</FilterByOption>
                <FilterByOption>All Stores</FilterByOption>
                <FilterByOption>Target</FilterByOption>
                <FilterByOption>Wegmans</FilterByOption>
              </FilterBySelect>
              <FilterBySelect>
                <FilterByOption selected disabled>Category</FilterByOption>
                <FilterByOption>Food</FilterByOption>
                <FilterByOption>Cleaning</FilterByOption>
                <FilterByOption>Baby</FilterByOption>
              </FilterBySelect>
              <Button action="filter">Filter</Button>
            </FilterByBlock>
            <AddButtonBlock>
              <Button>Add To List</Button>
            </AddButtonBlock>
          </ActionBlock>
          <DisplayBlock>
          <DisplayTableHeader>
              <DTQty row="head">Qty</DTQty>
              <DTItem row="head">Item</DTItem>
              <DTStore row="head">Store</DTStore>
              <DTRemove row="head">Rmv</DTRemove>
            </DisplayTableHeader>
            <DisplayTableRow>
              <DTQty>{ShoppingList.items[0].qty} {ShoppingList.items[0].unit}</DTQty>
              <DTItem>{ShoppingList.items[0].name}</DTItem>
              <DTStore>{ShoppingList.items[0].store}</DTStore>
              <DTRemove><input type="checkbox"/></DTRemove>
            </DisplayTableRow>
            <DisplayTableRow>
              <DTQty>{ShoppingList.items[1].qty} {ShoppingList.items[1].unit}</DTQty>
              <DTItem>{ShoppingList.items[1].name}</DTItem>
              <DTStore>{ShoppingList.items[1].store}</DTStore>
              <DTRemove><input type="checkbox"/></DTRemove>
            </DisplayTableRow>
            <DisplayTableRow>
              <DTQty>{ShoppingList.items[2].qty} {ShoppingList.items[2].unit}</DTQty>
              <DTItem>{ShoppingList.items[2].name}</DTItem>
              <DTStore>{ShoppingList.items[2].store}</DTStore>
              <DTRemove><input type="checkbox"/></DTRemove>
            </DisplayTableRow>
          </DisplayBlock>
        </ContentWrapper>
    </Container>
  )
};

export default ShoppingListHome;