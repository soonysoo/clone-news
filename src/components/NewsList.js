import styled from 'styled-components';
import NewsItems from './NewsItems';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList;
