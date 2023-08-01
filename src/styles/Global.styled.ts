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
    right?: string,

    responsiveTop?: string,
    responsiveBottom?: string,
    responsiveLeft?: string,
    responsiveRight?: string
}

export const PaddingContainer = styled.div<PaddingContainerProps>`
  padding-top: ${({top}) => top};
  padding-bottom: ${({bottom}) => bottom};
  padding-left: ${({left}) => left};
  padding-right: ${({right}) => right};

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding-top: ${({responsiveTop}) => responsiveTop};
    padding-bottom: ${({responsiveBottom}) => responsiveBottom};
    padding-left: ${({responsiveLeft}) => responsiveLeft};
    padding-right: ${({responsiveRight}) => responsiveRight};
  }
`

interface FlexContainerProps {
    justify?: string,
    align?: string,
    gap?: string,
    direction?: string,
    fullWidthChild?: boolean,
    responsiveFlex?: boolean,
    responsiveDirection?: string
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

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    display: ${({responsiveFlex}) => responsiveFlex ? 'flex' : 'block'};

    flex-direction: ${({responsiveDirection}) => responsiveDirection};
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

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: ${({size}) => {
      switch (size) {
        case 'h1' :
          return '2.5rem';
        case 'h2' :
          return '2rem';
        case 'h3' :
          return '1.5rem';
        case 'h4' :
          return '1rem';
        default :
          return;
      }
    }}
  }
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

export const IconContainer = styled.a<IconContainerProps>`
  font-size: ${({size}) => size};
  cursor: pointer;
  z-index: 1;
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


export interface FadeImage {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string
}

export const FadeImage = styled.img<FadeImage>`
  position: absolute;
  top: ${({top}) => top};
  right: ${({right}) => right};
  left: ${({left}) => left};
  bottom: ${({bottom}) => bottom};
  z-index: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    display: none;
  }
`