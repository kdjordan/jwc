import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <RightSide>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
max-width: 100%;
  display: flex;
  height: 40px;
  padding: 0 32px;
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  margin-right: auto;
  color: ${COLORS.white};
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const RightSide = styled.div`
  min-width: 275px;
  display: flex;
  justify-content: space-between;
`

export default SuperHeader;
