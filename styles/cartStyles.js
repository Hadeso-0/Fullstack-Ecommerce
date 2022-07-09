import styled from 'styled-components'

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`

export const CartStyle = styled.div`
  min-width: 40%;
  background: #f1f1f1;
  padding: 2rem 4rem;
  overflow-y: auto;
  position: relative;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 1.5rem;
  margin: 2rem 0;
  img {
    border-radius: 0.5rem;
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    background-position: center;
  }
`

export const CardInfo = styled.div`
  width: 50%;
  margin-left: 2rem;
  div {
    display: flex;
    flex-direction: space-between;
  }
`
export const EmptyStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  text-align: center;
  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
  h1 {
    font-size: 1.6rem;
    padding: 2rem 0;
  }
`
export const Checkout = styled.div`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
    outline: none;
  }
`
