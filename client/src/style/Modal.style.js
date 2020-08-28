import styled from 'styled-components';
import { Close } from '@styled-icons/evil/Close';
import { Edit2 } from '@styled-icons/feather/Edit2';

export const CloseIcon = styled(Close)`
  display: flex;
  height:30px
`;

export const Edit2Icon = styled(Edit2)`
  display: flex;
  height:30px
`;

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  width: 14%;
  height: 23%;
  // background: rgba(0, 0, 0, 0.6);
  background: whitesmoke;
`;

export const Image = styled.img`
  width: auto;
  height: 11em;
  border-radius: 6px;
`;
