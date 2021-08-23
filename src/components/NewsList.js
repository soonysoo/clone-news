import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItems from './NewsItems';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=090693b5006c4d9aadf57a731ff4239c',
        );
        console.log(response);
        setArticle(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>대기 중 .....</NewsListBlock>;
  }

  if (!articles) {
    console.log('ddd');
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItems key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
