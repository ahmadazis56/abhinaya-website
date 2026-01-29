"use client";
import React, { useEffect, useState } from "react";

type Headline = {
  title: string;
  link: string;
  pubDate: string;
};

export default function AbhinayaHeadline() {
  const [headlines, setHeadlines] = useState<Headline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent("https://news.abhinaya.co.id/category/abhinaya/feed/")
        );
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          const result = data.items.slice(0, 5).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
          }));
          setHeadlines(result);
        } else {
          setHeadlines([]);
        }
      } catch (e) {
        setHeadlines([]);
      }
      setLoading(false);
    }
    fetchRSS();
  }, []);

  if (loading) return <div>Loading headline...</div>;
  if (!headlines.length) return <div>Tidak ada headline.</div>;

  return (
    <div className="bg-purple-100 p-4 rounded mb-4">
      <h2 className="font-bold text-lg mb-2">Headline Abhinaya</h2>
      <ul>
        {headlines.map((h, i) => (
          <li key={i} className="mb-2">
            <a href={h.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-semibold">{h.title}</a>
            <div className="text-xs text-gray-500">{h.pubDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
