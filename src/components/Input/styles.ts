import styled, { css } from 'styled-components';

interface ContainerProps { 
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: var(--orange);
      border-color: var(--orange);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--orange);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--gray-shades);

    &::placeholder {
      color: var(--gray-shades);
    }
  }

  svg {
    margin-right: 16px;
  }
`;