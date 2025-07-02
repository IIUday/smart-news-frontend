
import { useEffect, useState } from 'react';
import NewsFeed from '../components/NewsFeed';
import PortfolioInput from '../components/PortfolioInput';
import FilteredNews from '../components/FilteredNews';

export default function Home() {
  const [allNews, setAllNews] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    fetch('https://smart-news-backend-1.onrender.com')
      .then(res => res.json())
      .then(setAllNews);
  }, []);

  const filterNews = () => {
    const relevant = allNews.filter(headline =>
      portfolio.some(stock => headline.toLowerCase().includes(stock.toLowerCase()))
    );
    setFiltered(relevant);

    fetch('http://localhost:5000/api/news/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ headlines: relevant }),
    })
      .then(res => res.json())
      .then(setAnalysis);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">📈 Smart News + Portfolio Insights</h1>
      <PortfolioInput setPortfolio={setPortfolio} filterNews={filterNews} />
      <FilteredNews news={filtered} analysis={analysis} />
      <NewsFeed news={allNews} />
    </div>
  );
}
