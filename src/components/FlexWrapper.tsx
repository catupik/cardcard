import styled from "styled-components";


type FlexWrapperPropsType = {
        direction?: string
        justifyC?: string
        alignI?: string
        wrap?: string
    }

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyC || 'flex-start'};
    align-items: ${props => props.alignI || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    min-height: 100vh;
`