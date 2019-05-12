import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const CardStyle = styled.div`
  position: absolute;
  right: ${props =>
    props.value <= 1100
      ? 'calc((100vw - 80%) / 2)'
      : 'calc((100vw - 95.7rem) / 2)'};
  /* top: calc((100vh - 65.8rem) / 2); */
  top: ${props =>
    props.value <= 550
      ? 'calc((100vh - 52.8rem) / 2)'
      : 'calc((100vh - 65.8rem) / 2)'};
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

  @media ${below.tabletL} {
    width: 77%;
    font-size: 2.5rem;
    margin: 12.5rem auto 0 4.7rem;
  }

  @media ${below.mobileB} {
    font-size: 2.2rem;
  }
`;

const WhiteSection = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
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

  @media ${below.tabletL} {
    margin-left: 4.7rem;
  }
`;

export { CardStyle, Text, WhiteSection, ImagesWrapper };
