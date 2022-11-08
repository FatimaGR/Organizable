import styled from "@emotion/styled";

const ContainerModal = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  background-color: pink;
`;

export function Modal({children, open, close}) {
  if(!open) return null

  return (
    <ContainerModal>
      <button onClick={close}>x</button>
      {children}
    </ContainerModal>
  )
}