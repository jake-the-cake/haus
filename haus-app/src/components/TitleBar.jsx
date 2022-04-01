import React from 'react';
import styled from 'styled-components';
import { Colors } from '../static/colors';
import { House } from '@mui/icons-material';

const Container = styled.div`
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, ${Colors.jelly[1]}, ${Colors.jelly[1]}, ${Colors.jelly[1]}, transparent);
    position: fixed;
`;

const ContentWrapper = styled.div`
    width: calc(85% + 40px);
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 690px;
`;

const TitleBlock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

const TitleLabel = styled.div`
    font-size: 28px;
    color: ${Colors.white.true};
    font-weight: 900;

`;

const ControlBlock = styled.div`
    display: flex;
    column-gap: 10px;
`;

const ControlLink = styled.a`
    padding-top: 5px;
    cursor: pointer;
    color: ${Colors.white.true};
    letter-spacing: 1.5px;
    font-weight: 700;
    font-size: 14px;

    &:hover{
        color: ${Colors.yellow.lemon};
        text-decoration: none;
    }
`;

const Divider = styled.p`
    font-size: 20px;
    color: ${Colors.jelly[0]};
    font-weight: bold;
    padding: 0px;
    margin: 0px;
`;


const TitleBar = () => {
    return (
        <Container>
            <ContentWrapper>
                <TitleBlock>
                    <House style={{color: `${Colors.white.true}`, fontSize: "32px"}}/>
                    <TitleLabel>HAUS</TitleLabel>
                </TitleBlock>
                <ControlBlock>
                    <ControlLink href="#">Register</ControlLink>
                    <Divider>|</Divider>
                    <ControlLink href="#">Login</ControlLink>
                </ControlBlock>
            </ContentWrapper>
        </Container>
    )
};

export default TitleBar;