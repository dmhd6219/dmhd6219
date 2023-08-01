import styled from "styled-components";

export const MainBody = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
`

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;

`

interface PaddingContainerProps {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string
}

export const PaddingContainer = styled.div<PaddingContainerProps>`
  padding-top: ${({top}) => top};
  padding-bottom: ${({bottom}) => bottom};
  padding-left: ${({left}) => left};
  padding-right: ${({right}) => right};
`

interface FlexContainerProps {
    justify?: string,
    align?: string,
    gap?: string,
    direction?: string,
    fullWidthChild?: boolean
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
  gap: ${({gap}) => gap};
  flex-direction: ${({direction}) => direction};

  & > div {
    flex: ${({fullWidthChild}) => fullWidthChild && 1};
  }
`

interface HeadingProps {
    align?: string,
    size?: string
}

export const Heading = styled(PaddingContainer)<HeadingProps>`
  color: ${({theme}) => theme.colors.white};
  text-align: ${({align}) => align};
  font-size: ${({size}) => {
    switch (size) {
      case 'h1' :
        return '4.5rem';
      case 'h2' :
        return '3rem';
      case 'h3' :
        return '2rem';
      case 'h4' :
        return '1.2rem';
      default :
        return;
    }
  }};
`

export const SecondaryText = styled.span`
  color: ${({theme}) => theme.colors.secondary};
`
export const ParaText = styled(PaddingContainer)`
  color: ${({theme}) => theme.colors.para_text_color};
  line-height: 2rem;
`

interface IconContainerProps {
    size?: string
}

export const IconContainer = styled.div<IconContainerProps>`
  font-size: ${({size}) => size};
  cursor: pointer;
  color: ${({color, theme}) => {
    switch (color) {
      case 'white' :
        return theme.colors.white;
      case 'secondary' :
        return theme.colors.secondary;
      default:
        return;
    }
  }}
`

export const Button = styled.a`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primary_light};
  border : 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover{
    color : ${({theme}) => theme.colors.primary_light};
    background-color: ${({theme}) => theme.colors.white};
  }
`