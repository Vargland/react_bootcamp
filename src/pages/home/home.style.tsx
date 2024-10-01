import styled from "styled-components";

export const StyledButton = styled.button<{ $primary?: boolean; }>`
    background: ${props => props.$primary ? "#BF4F74" : "white"};
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: ${props => props.$primary ? "white" : "#BF4F74"};
    font-size: 1em;
    margin: 1em;
`;

export const StyledContainerButtons = styled.div<{ $primary?: boolean; }>`
    display: flex;
    flex-direction: column;
`;

export const StyledHomeContainer = styled.div<{ $primary?: boolean; }>`
    align-items: center;
    display: flex;
    flex-direction: column;
`;
