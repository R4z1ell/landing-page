import styled from 'styled-components';

const Container = styled.div`
  width: 115.2rem; 
  /* width: ${props => (props.position > 345 ? '100%' : '115.2rem')}; */
  margin: 0 auto;
  padding: 4.4rem 9.8rem;
  /* border-radius: 1.2rem 1.2rem 0 0; */
  /* border-radius: ${props =>
    props.position < 345 ? '1.2rem 1.2rem 0 0' : '0'}; */
  /* transform: translateY(-18.8rem); */
  /* transform: ${props =>
    props.direction === 'bottom'
      ? 'translateY(-25.8rem)'
      : 'translateY(-18.8rem)'}; */
  /* background-color: #fff; */
  /* transition: all .3s ease-out; */
`;

const Wrapper = styled.div`
  width: ${props => (props.position > 345 ? '100%' : '115.2rem')};
  background-color: #fff;
  margin: 0 auto;
  border-radius: ${props => (props.position < 345 ? '1.2rem 1.2rem 0 0' : '0')};
  transition: all 0.3s ease-out;
`;

export { Container, Wrapper };
