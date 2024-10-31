import styled from 'styled-components'
import DefaultTheme from '../../themes/default'

export const Vaga = styled.li`
  border: 1px solid ${DefaultTheme.corPrincipal};
  background-color: ${DefaultTheme.corSecundaria};
  color: ${DefaultTheme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${DefaultTheme.corPrincipal};
    color: ${DefaultTheme.corSecundaria};

    a {
      border-color: ${DefaultTheme.corPrincipal};
      background-color: ${DefaultTheme.corSecundaria};
      color: ${DefaultTheme.corPrincipal};
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${DefaultTheme.corSecundaria};
  background-color: ${DefaultTheme.corPrincipal};
  color: ${DefaultTheme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
