import React, { useState } from 'react';
import './News.css';
import Footer from './Footer';

const newsData = [
  {
    date: "Feb 12",
    title: "Third party inspection report for soil and groundwater [2021-HJ-2109143 (soil)][2021-HJ-2109144 groundwater]",
    image: "assets/default.jpg",
    link: "https://portfolioiii.wixstudio.com/my-site-9/post/third-party-inspection-report-for-soil-and-groundwater-2021-hj-2109143-soil-2021-hj-2109144-grou"
  },
  {
    date: "Feb 12",
    title: "Do not forget the original intention, forge ahead, we have been on the road!",
    image: "assets/default.jpg",
    link: "https://portfolioiii.wixstudio.com/my-site-9/post/do-not-forget-the-original-intention-forge-ahead-we-have-been-on-the-road"
  },
  {
    date: "Feb 12",
    title: "2021 Hongshi Oath Conference",
    image: "assets/default.jpg",
    link: "https://portfolioiii.wixstudio.com/my-site-9/post/2021-hongshi-oath-conference"
  },
  {
    date: "Feb 12",
    title: "Haining Hongshi Baosheng Technology Co., Ltd. won the \"Best New Supplier Award\" from Luo Luo!",
    image: "assets/default.jpg",
    link: "https://portfolioiii.wixstudio.com/my-site-9/post/haining-hongshi-baosheng-technology-co-ltd-won-the-best-new-supplier-award-from-luo-luo"
  }
];

function News() {
  const [likes, setLikes] = useState(Array(newsData.length).fill(0));

  const handleLikeClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault(); // prevent navigating to the link
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  return (
    <div className="news-container" id = "news-page">
      <h1 className="news-header">Press Release</h1>
      <div className="news-grid">
        {newsData.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="news-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="news-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="news-date">{item.date}</div>
              {index === 1 && <div className="news-tag">NEWS</div>}
              {index === 3 && <div className="news-tag">AWARDS</div>}
            </div>
            <div className="news-title">
              {item.title.length > 60 ? item.title.slice(0, 60) + '...' : item.title}
            </div>
            <div className="news-like" onClick={(e) => handleLikeClick(e, index)}>
              ❤️ {likes[index]}
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default News;
