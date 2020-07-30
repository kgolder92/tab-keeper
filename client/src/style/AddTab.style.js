import styled from 'styled-components';

import { Search } from '@styled-icons/feather/Search';

export const SearchIcon = styled(Search)`
  width: 13px;
`;

export const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputAddContainer = styled.div`
  display:flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 5px;
  border: 1px solid rgb(235, 235, 235);
`;

export const LabelInput = styled(Input)`
  width: 40%;
  margin-top: 1em;
`;

export const Image = styled.img`
  width: 50px;
  border-radius: 6px;
`;
