import styled from 'styled-components'
import DefaultTheme from '../../themes/default'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${DefaultTheme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${DefaultTheme.corPrincipal};
`

export const Button = styled.button`
  background-color: ${DefaultTheme.corPrincipal};
  border: 1px solid ${DefaultTheme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${DefaultTheme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
