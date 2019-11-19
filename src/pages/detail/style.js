import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 620px;
  overflow: hidden;
  padding-bottom: 100px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  line-height: 44px;
  font-weight: bold;
  color: #333;
`;

export const WriterInfo = styled.div`
  height: 60px;
  display: flex;
  a {
    display: block;
    img {
      widtth: 48px;
      height: 48px;
      border-radius: 50px;
    }
  },
  .info {
    padding-left: 20px;
  }
`;

export const Content = styled.div`
  font-size: 16px;
  color: #2f2f2f;
  p {
    font-weight: 400;
    margin-bottom: 20px;
    word-break: break-word;
    line-height: 28px;
  }
`;
