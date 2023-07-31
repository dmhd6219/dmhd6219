import styled from "styled-components";

export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap : 2rem;
  padding : 0 5%;
`

export const SkillsCard = styled.div`
  width : 230px;
  border: 1px solid #fff;
  padding: 3rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary_light};
`