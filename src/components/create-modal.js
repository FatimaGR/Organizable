import styled from "@emotion/styled";
import { icons } from "../styles/icons";

const BackgroundModal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(23, 23, 28, 0.8);
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export function Modal({children, open, close}) {
  if(!open) return null

  return (
    <BackgroundModal>
      <ContentModal>
      <CloseButton onClick={close}>{icons.cancel}</CloseButton>
      {children}
      </ContentModal>
    </BackgroundModal>
  )
}