import { createGlobalStyle } from 'styled-components';

export const GlobalIconFontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1573560237791'); /* IE9 */
  src: url('iconfont.eot?t=1573560237791#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWMAAsAAAAAClgAAAVAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqHUIYpATYCJAMYCw4ABCAFhG0HUxvaCMgOJYnAwABQoABCBNFaVr0zO0FSQKhYhVWEjIojlQcP7Pwb/cKwETc82/If2HDXxNas6qLTuCgDEQuHLFq31v/bWFapvyL+536+Lq3B8gLNJSP50c5oPEqgAXX+wApKoH0Q/MvwWpe6oPMEWo2YCjqtalACuYxMC8Q9y2iBPKaXS6ihWVVy1mYQn4FEc7UKvg/45P59/AcbIQcqdQJk7s1dpQGU/II/6xe5/n+rx0YBQX9WsJtIWAJk4iXX/kzkS5dceWveYLEzQLtmldzXJfDPsj5r/Kz//wYxMXGHdr2QWlb1+M+LArC8HfAXiZpfsMkPFThoZVBkgUyZohG0Eij6QXha6tLjmB4g1gGId4AQlsir3b/vStMQIZfj6GA8dhAUVR0vk6OMF/WSkYjmRqg0R6XJuRpWP3+udPltAR/mDfCE0/LVyvxQCC3+pMFALKKOUiIWtLMrMAJZP6hDew71AtAayGXE8xByazRuxFOgOr4buPag3msQZPHW3im8EAo9L8Cw888RT93dcNidfiwSafY8b3m+WPUkhHq1W6imqCNvqZ+GNRomWeN2I+qADyj7DarVY+2Dt98dQnSvHcqQmnX7Tp0YpzoTmspEhUKqqcjC04zQgQBJZs8nHxVrgmQQR70QESD9uJ9YgI8I3sWH+33Y+QLl5ZLVEzEf4gkgu+9nbD85fnwA8ZDkqexT+cFdOO7HmQBErhvqDvoB9t1Y4PdgXj/uChANPt++YMJi8GLW+2Hbt0/YRSpuwFBUPtHq1ivBB+ac+O2mKvmC182zS2vAQLzKDemRdaG9LTuJRNUStgPUPtb9d6P0qy9cMrp6aXubHvhmEwO4GVw2Vj+ZWPGEjvlfVx42FzWr4DIdWxQR/13kFG7kJEOS0iRukpqN7kXrS/I+6dMI9wbjfw8Z9+O4EeDJt8XLT797LpmD5010bDjw1inrpIJUZnd3srDQ5HX6C8mfVy3OaDfZKZNN6VVUlc6dVnjq1Dkjs88uxQzm9uQe4N/2jQ74kjejC4KhlU0gLvw7Txz8+furjtW+vW76yWHzyEEocWzIF7XpXVt+N88YvKKxCm+qBP8vuiy+8M8/F/JF8d//II7OsaUXmTf555/alERZG/Tq238TL64+stZTxYthGM9/7FKPXlYrIV0DcTDY3i9fMF9jDBf+PUOVKoHIL2nYNna0EttxNUaUUPrwvYVDVNP0mePiel4A0HULgNbGwM1y+WB4rOIJdHy89Bs4Nv5EngvKqkx7EYbO7nZKE1/MFcB8aGAahfcA0Pg/XRYBl/5VCopIujt1ihYkL6cropLPdZyNtnVMf2zBr3L0D276+cPlA9jXcGdQn//NKciCj1NQsyorImIoWUI2JwgUb8ien5VWvY5P0t3rvb5MA/pNhmYDIVSaDEPSbAqd8UtQa7MFRbMDaLWoenObPjyRyArAgmUIQrdDUOn0A5JuD9AZ/y7UBn0LRXeIoNVtJO7ZZiZYpJyntQJtoHRzKFbP2Y2GSUC80jaamWHV8lGRS1PTvJMNUalJKclUNW2n+T4WOGcyaYJgpIw8Z6Oq0NVoq5WjHDxnpvVCkkkQHHnJyca8R0rSczaAOMGjaQloBhSdOSgsPY6d0W4sQFKXb0NjzGClxZcgyuxqNJ4T2zslVZKUGuhqub0W4lwGO83ESCMQGKlJRjyODaUKrDSrHudQHPmjzGh6giSmFlGHPMm4lrGuPGl8pe0qd0Er8gElYEgEiSEJJIVkoDzMYgW9CS7VKmxaxs4aWZqX6U203sLaJTYtp2MBAA==') format('woff2'),
  url('iconfont.woff?t=1573560237791') format('woff'),
  url('iconfont.ttf?t=1573560237791') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1573560237791#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .jianshu-switch:before {
  content: "\e65f";
  }

  .jianshu-Aa:before {
  content: "\e636";
  }

  .jianshu-magnifier:before {
  content: "\e64d";
  }

  .jianshu-checkin:before {
  content: "\e615";
  }

  .jianshu-maobi:before {
  content: "\e602";
  }
`;

