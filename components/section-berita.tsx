"use client";

import React, { useEffect, useState } from "react";

type Headline = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  author?: string;
  description?: string;
};


export default function SectionBerita() {
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
            thumbnail: item.thumbnail,
            author: item.author,
            description: item.description,
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

  return (
    <section className="max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Kiri: List Berita Dinamis */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">NEWS</h2>
          {loading ? (
            <div>Loading berita...</div>
          ) : headlines.length === 0 ? (
            <div>Tidak ada berita.</div>
          ) : (
            <div className="space-y-8">
              {headlines.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  {item.thumbnail && (
                    <img src={item.thumbnail} alt="thumb" className="w-32 h-24 object-cover rounded-md border bg-white" />
                  )}
                  <div>
                    <div className="text-xs font-bold text-orange-500 mb-1">{item.author || "Abhinaya News"} <span className="text-gray-400 font-normal ml-2">{item.pubDate?.split(" ").slice(0, 4).join(" ")}</span></div>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-bold text-lg mb-1 leading-tight hover:underline block">{item.title}</a>
                    <div className="text-sm text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.description || "" }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Kanan: Iklan Aplikasi */}
        <div className="w-full md:w-80 flex-shrink-0">
          <div className="bg-blue-100 rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/images/a.png" alt="" className="w-48 mb-4 rounded" />
            <div className="font-bold text-blue-900 text-center mb-2">MASA, Pengingat dalam Genggaman</div>
            <a href="#" className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full mb-2">Download Sekarang</a>
            <a href="#" className="inline-block bg-black text-white font-semibold py-2 px-4 rounded-full">Get it on Google Play</a>
          </div>
        </div>
      </div>
    </section>
  );
}
