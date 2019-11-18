import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  overflow: hidden;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 66.666%;
  margin-top: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 29.1%;
  margin-left: 4.166%;
  margin-top: 15px;
  padding-top: 30px;
  float: left;
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid #ccc;
  width:30px;
  height:30px;
  text-align: center;
  line-height:30px;
  cursor:pointer;
`;

//Topic component
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
`;

export const TopicItem = styled.div`
  height: 32px;
  float: left;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px; 
  background-color: #f7f7f7;
  margin-right: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const TopicMore = styled.div`
  cursor: pointer;
  float: left;
  line-height: 32px;
`;

//List component
export const ListWrapper = styled.div`
  border-top: 1px solid #777;
  margin-bottom: 20px;
`;

export const ListItem = styled.div`
  min-height: 50px;
  padding-top: 15px;
  overflow: hidden;
  .list-left {
    float: left;
    display: block;
    width: 80%;
    color: #323232;
    padding-right: 20px;
    box-sizing: border-box;
    h3 {
      color: #000;
      font-weight: bold;
      font-size: 16px;
      padding-bottom: 15px;
    }
  }
  .list-right {
    float: left;
    display: block;
    width: 20%;
    img {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
`;

export const LoadMore = styled.div`
  background-color: #ccc;
  color: #FFFFFF;
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  margin: 30px 0;
  cursor: pointer;
`;

//Recommend component
export const RecommendWrapper = styled.div`
  margin-top: 4px;
  padding-bottom: 4px;
  min-height: 228px;
`;

export const RecommendItem = styled.a.attrs({
  href: '/mobile/club'
})`
  display: block;
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    min-height: 50px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 4px;
  }
`;

//Writer component
export const WriterWrapper = styled.div`

`;

export const WriterHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding: 10px 2px;
  display: flex;
  justify-content: space-between;
`;

export const WriterItem = styled.div`
  min-height: 50px;
  display: flex;
  margin-bottom: 10px;
  color: #777;
  img {
    height: 48px;
    width: 48px;
    border-radius: 50px;
  }
  .info {
    padding-left: 10px;
    padding-top: 5px;
  }
  .info a {
    display: block;
    color: #333;
    font-size: 14px;
    text-decoration: none;
  }
  .info p {
    margin-top: 5px;
    color: #969696;
    font-size: 12px;
  }
`;