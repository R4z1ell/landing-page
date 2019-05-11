import styled from 'styled-components';

const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #4a4a4a;
  visibility: ${props => (props.value ? 'visible' : 'hidden')};
  opacity: ${props => (props.value ? '1' : '0')};
  z-index: 10;
  transition: all 0.3s;
  overflow: hidden;
  cursor: pointer;
`;

export { OverlayStyle };
