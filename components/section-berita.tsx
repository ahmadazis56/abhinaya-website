import { NEWS_RSS_URL } from "@/config/constants";
import Link from "next/link";
import Image from "next/image";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  author: string;
  description: string;
}

interface SectionBeritaProps {
  headlineCount?: number;
}

// Function to scrape news articles from Abhinaya category
async function scrapeNewsFromWebsite(): Promise<RssItem[]> {
  try {
    const response = await fetch(NEWS_RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch:', response.status, response.statusText);
      return [];
    }
    
    const html = await response.text();
    
    // Extract article information from WordPress category page
    const articleMatches = html.match(/<article[^>]*>[\s\S]*?<\/article>/gi) || [];
    
    const articles: RssItem[] = articleMatches.slice(0, 20).map((articleHtml, index) => {
      // Extract title - try multiple WordPress patterns
      const titleMatch = articleHtml.match(/<h[1-6][^>]*class="[^"]*entry-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>(.*?)<\/a>[\s\S]*?<\/h[1-6]>/i) ||
                        articleHtml.match(/<h[1-6][^>]*class="[^"]*post-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>(.*?)<\/a>[\s\S]*?<\/h[1-6]>/i) ||
                        articleHtml.match(/<h[2-3][^>]*>[\s\S]*?<a[^>]*rel="bookmark"[^>]*>(.*?)<\/a>[\s\S]*?<\/h[2-3]>/i) ||
                        articleHtml.match(/<a[^>]*rel="bookmark"[^>]*>(.*?)<\/a>/i);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '').trim() : `Abhinaya News ${index + 1}`;
      
      // Clean title from dates and unwanted text
      const cleanTitle = title
        .replace(/^\d{1,2}\s+\w+\s+\d{4}\s*[-–—]\s*/, '') // Remove "January 14, 2026 -" pattern
        .replace(/\s*[-–—]\s*\d{1,2}\s+\w+\s+\d{4}$/, '') // Remove " - January 14, 2026" pattern
        .replace(/^\d{1,2}\/\d{1,2}\/\d{4}\s*[-–—]\s*/, '') // Remove "1/14/2026 -" pattern
        .replace(/\s*[-–—]\s*\d{1,2}\/\d{1,2}\/\d{4}$/, '') // Remove " - 1/14/2026" pattern
        .trim();
      
      // Extract link
      const linkMatch = articleHtml.match(/<a[^>]*href=["']([^"']+)["'][^>]*rel="bookmark"/i) ||
                        articleHtml.match(/<a[^>]*href=["']([^"']+)["'][^>]*class="[^"]*permalink[^"]*"/i) ||
                        articleHtml.match(/<h[1-6][^>]*>[\s\S]*?<a[^>]*href=["']([^"']+)["'][^>]*>/i);
      const link = linkMatch ? linkMatch[1] : '#';
      
      // Convert relative URLs to absolute
      const absoluteLink = link.startsWith('http') ? link : `https://news.abhinaya.co.id${link.startsWith('/') ? link : '/' + link}`;
      
      // Extract image - try multiple WordPress patterns
      const imgMatch = articleHtml.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i) ||
                       articleHtml.match(/<div[^>]*class="[^"]*post-thumbnail[^"]*"[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>/i) ||
                       articleHtml.match(/<figure[^>]*class="[^"]*featured-image[^"]*"[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>/i);
      let thumbnail: string | undefined = undefined;
      if (imgMatch && imgMatch[1]) {
        const imgSrc = imgMatch[1];
        thumbnail = imgSrc.startsWith('http') ? imgSrc : `https://news.abhinaya.co.id${imgSrc.startsWith('/') ? imgSrc : '/' + imgSrc}`;
      }
      
      // Extract date - try multiple WordPress patterns
      const dateMatch = articleHtml.match(/<time[^>]*datetime=["']([^"']+)["'][^>]*>[\s\S]*?<\/time>/i) ||
                       articleHtml.match(/<time[^>]*class="[^"]*entry-date[^"]*"[^>]*>(.*?)<\/time>/i) ||
                       articleHtml.match(/<span[^>]*class="[^"]*posted-on[^"]*"[^>]*>[\s\S]*?<time[^>]*>(.*?)<\/time>/i) ||
                       articleHtml.match(/<span[^>]*class="[^"]*date[^"]*"[^>]*>(.*?)<\/span>/i);
      const pubDate = dateMatch ? dateMatch[1].replace(/<[^>]*>/g, '').trim() : new Date().toISOString();
      
      // Extract description - try WordPress excerpt patterns
      const descMatch = articleHtml.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>[\s\S]*?<p[^>]*>(.*?)<\/p>[\s\S]*?<\/div>/i) ||
                        articleHtml.match(/<div[^>]*class="[^"]*post-content[^"]*"[^>]*>[\s\S]*?<p[^>]*>(.*?)<\/p>[\s\S]*?<\/div>/i) ||
                        articleHtml.match(/<div[^>]*class="[^"]*entry-summary[^"]*"[^>]*>[\s\S]*?<p[^>]*>(.*?)<\/p>[\s\S]*?<\/div>/i) ||
                        articleHtml.match(/<p[^>]*class="[^"]*excerpt[^"]*"[^>]*>(.*?)<\/p>/i);
      
      let description = '';
      if (descMatch) {
        // Clean HTML and get first 300 characters
        const cleanText = descMatch[1].replace(/<[^>]*>/g, '').trim();
        description = cleanText.substring(0, 300);
        if (cleanText.length > 300) {
          description += '...';
        }
      }
      
      // Default author for Abhinaya news
      const author = 'Abhinaya Indo Group';
      
      return {
        title: cleanTitle,
        link: absoluteLink,
        pubDate,
        thumbnail,
        author,
        description
      };
    });
    
    // Filter out articles without proper titles or links
    return articles.filter((article, index) => 
      article.title && 
      article.title !== `Abhinaya News ${index + 1}` && 
      article.link && 
      article.link !== '#'
    );
  } catch (error) {
    console.error('Error scraping Abhinaya news:', error);
    return [];
  }
}

export default async function SectionBerita({
  headlineCount = 3, // Reduced to 3 news items
}: SectionBeritaProps) {
  const headlines = await scrapeNewsFromWebsite();

  return (
    <div>
      {/* Ultra Professional Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-full mb-6">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">Latest Updates</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Breaking News & 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Industry Insights
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Stay informed with the latest developments, innovations, and announcements from Abhinaya Indo Group
        </p>
      </div>
      
      {/* Ultra Professional News Grid */}
      <div className="w-full">
        {headlines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {headlines.slice(0, headlineCount).map((headline, index) => (
              <article key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">
                {/* Premium Image Section */}
                {headline.thumbnail && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={headline.thumbnail}
                      alt={headline.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        News
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Premium Content Section */}
                <div className="p-6">
                  {/* Title with Enhanced Typography */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    <Link 
                      href={headline.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors duration-300"
                    >
                      {headline.title}
                    </Link>
                  </h3>
                  
                  {/* Enhanced Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                    {headline.description}
                  </p>
                  
                  {/* Professional Meta Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      {/* Author Avatar */}
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {headline.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{headline.author}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(headline.pubDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Link
                      href={headline.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors duration-200"
                    >
                      Read More
                      <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Hover Accent Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium">No news available at the moment.</p>
            <p className="text-gray-500 text-sm mt-2">Check back soon for the latest updates</p>
          </div>
        )}
      </div>
    </div>
  );
}
