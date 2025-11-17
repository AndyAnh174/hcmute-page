import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Hash, TrendingUp } from "lucide-react";
import { getNewsItemById, formatDate, newsItems } from "@/lib/news-data";
import Header from "@/components/block/header";
import Footer from "@/components/block/footer";
import HeaderSpacer from "@/components/ui/header-spacer";

// Generate static params for all news items
export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const newsId = parseInt(id);
  const newsItem = getNewsItemById(newsId);
  const otherNews = newsItems.filter((item) => item.id !== newsId);
  const recentPosts = otherNews.slice(0, 4);
  const relatedPosts = otherNews.slice(0, 5);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeaderSpacer />

      <main className="flex-1">
        {/* Hero Section với ảnh */}
        <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

          {/* Back Button */}
          <div className="absolute top-4 left-4 z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </Link>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600/90 text-white text-sm font-semibold shadow-lg shadow-blue-600/30">
                  {newsItem.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {newsItem.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(newsItem.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{newsItem.readTime}</span>
                </div>
                {newsItem.views && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{newsItem.views} lượt xem</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
              {/* Main Column */}
              <div>
                {/* Excerpt */}
                <div className="mb-10 pb-6 border-b border-gray-200">
                  <p className="text-xl text-gray-800 leading-relaxed font-medium italic">
                    {newsItem.excerpt}
                  </p>
                </div>

                {/* Main Content */}
                <div
                  className="news-content prose max-w-none text-gray-700 leading-relaxed prose-img:rounded-2xl prose-img:shadow-md prose-figcaption:italic prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-figcaption:text-center"
                  dangerouslySetInnerHTML={{
                    __html: newsItem.content || newsItem.excerpt,
                  }}
                />

                {/* Tags */}
                {newsItem.tags && newsItem.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-gray-600 mr-2">
                        Tags:
                      </span>
                      {newsItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors"
                        >
                          <Hash className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        Bạn cũng có thể thích
                      </h3>
                      <Link
                        href="/"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        Xem thêm
                      </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {relatedPosts.map((item) => (
                        <Link
                          key={item.id}
                          href={`/tin-tuc/${item.id}`}
                          className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                        >
                          <div className="relative h-48">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-5 space-y-2">
                            <p className="text-sm text-gray-500">
                              {formatDate(item.date)}
                            </p>
                            <h4 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to News Button */}
                <div className="mt-12">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Quay lại trang tin tức</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-28 self-start">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Tin mới
                      </p>
                      <p className="text-xs text-gray-500">
                        Cập nhật hoạt động mới nhất
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                      <span>Xem tất cả</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                  <div className="space-y-5">
                    {recentPosts.map((item) => (
                      <Link
                        key={item.id}
                        href={`/tin-tuc/${item.id}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">
                            {formatDate(item.date)}
                          </span>
                          <span className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
