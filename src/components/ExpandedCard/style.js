import styled from 'styled-components';

const CardStyle = styled.div`
  position: absolute;
  right: 24.7%;
  top: 21%;
  background-color: #f8e627;
  border-radius: 1.2rem;
`;

const Text = styled.p`
  font-size: 2.6rem;
  font-weight: 700;
  font-family: 'Montserrat';
  line-height: 3.2rem;
  width: 48.5rem;
  margin-left: 9.7rem;
`;

const WhiteSection = styled.div`
  position: absolute;
  display: flex;
  bottom: 0px;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 1.2rem 1.2rem;
`;

const ImagesWrapper = styled.div`
  display: flex;
  margin-left: 9.7rem;
  overflow: hidden;

  img {
    margin-right: 1.8rem;
  }
`;

export { CardStyle, Text, WhiteSection, ImagesWrapper };
