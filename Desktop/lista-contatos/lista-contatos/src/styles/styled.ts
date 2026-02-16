import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #fff;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 50px;
  background: #1f1f1f;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
`

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 32px;
  text-align: center;
  font-weight: 600;
`

export const Form = styled.form`
  display: flex;
  gap: 14px;
  margin-bottom: 35px;
  flex-wrap: wrap;
`

export const Input = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #333;
  background: #2b2b2b;
  color: #fff;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
  }
`

export const Button = styled.button`
  padding: 14px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  font-weight: 600;
  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }
`

export const ButtonDanger = styled(Button)`
  background: #dc2626;

  &:hover {
    background: #b91c1c;
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li<{ $isEditing?: boolean }>`
  background: ${({ $isEditing }) =>
    $isEditing ? '#2f2f3f' : '#2b2b2b'};
    
  padding: 18px;
  border-radius: 14px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid
    ${({ $isEditing }) =>
      $isEditing ? '#6366f1' : '#2f2f2f'};

  transition: 0.25s ease;

  &:hover {
    background: #323232;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Name = styled.strong`
  font-size: 16px;
`

export const Email = styled.span`
  font-size: 13px;
  color: #9ca3af;
`

export const Phone = styled.span`
  font-size: 13px;
  color: #9ca3af;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`
