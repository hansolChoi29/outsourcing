import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  background-color: #b82218;
  text-align: center;
  padding: 10px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 100;
`;

const Footer = () => {
  return (
    <LayoutContainer>
      MADE BY HanSol Choi | HaEun Park | JeongEun Park | JiHyun Kwon | KyungPil Koo | Daeeun Kang
    </LayoutContainer>
  );
};

export default Footer;
