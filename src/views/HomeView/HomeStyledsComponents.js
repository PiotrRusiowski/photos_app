import styled from "styled-components";

export const StyledHome = styled.div`
  height: 85vh;
  position: relative;
  padding: 15px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  &:after {
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
    background-position: center;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const StyledContent = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
`;
export const StyledTitle = styled.h1`
  margin-top: 100px;
  margin-bottom: 15px;
  font-size: 46px;
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.lightGrey};
  text-decoration: underline;
  &:visted {
    color: ${({ theme }) => theme.lightGrey};
    text-decoration: underline;
  }
`;
