import styled from "styled-components";
import {StyledBtn} from "../components/Button.styled.tsx";


type CardPropsType = {
    src: string
    headline: string
    text: string
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <Image src={props.src} alt="pic"/>

            <ContentWrapper>
                <Headline>{props.headline}</Headline>
                <Text>{props.text}</Text>
                <ButtonWrapper>
                    <StyledBtn btnType={"primary"}>See more</StyledBtn>
                    <StyledBtn btnType={"outlined"}>Save</StyledBtn>
                </ButtonWrapper>

            </ContentWrapper>

        </StyledCard>
    );
};


const StyledCard = styled.div`
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 300px;
    padding: 10px;
`
const Image = styled.img`
    
    border-radius: 10px;
    width: 100%;
`
const Headline = styled.h2`
    font-weight: 700;
    font-size: 16px;
    color: black;
    margin: 20px 0px 20px 0px;
`

const Text = styled.p`
    font-family: Inter, sans-serif;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
    margin-bottom: 20px;
    font-weight: 500;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap:12px;
    margin-bottom: 12px;
`

const ContentWrapper = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`