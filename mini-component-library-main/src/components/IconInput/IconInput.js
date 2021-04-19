import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = STYLES[size]
  return (
    <Wrapper style={{}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput placeholder={placeholder} style={{
        '--width': width + 'px', 
        '--height': styles.height + 'px', 
        '--border-thickness': styles.borderThickness + 'px',
        '--font-size': styles.fontSize + 'px'
        }}/>

    </Wrapper>

  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  color: inherit;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder{
    color: ${COLORS.gray500};
  }
`

export default IconInput;
