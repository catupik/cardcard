import styled, {css} from "styled-components";


type StyledBtnPropsType = {
    btnType: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    width:86px;
    height: 30px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    line-height: 200%;
    color: white;
    cursor: pointer;
    
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: #4E71FE;
    `}
    
    
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        color: #4E71FE;
        background-color: transparent;
        border: 2px solid #4E71FE
    `}
    
`