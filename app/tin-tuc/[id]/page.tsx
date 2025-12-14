import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Hash, TrendingUp, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
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
  const recentPosts = otherNews.slice(0, 5);
  const relatedPosts = otherNews.slice(0, 3);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeaderSpacer />

      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden group">
            <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90" />
            
            <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 md:pb-20">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl animate-fade-in-up">
                         <div className="flex items-center gap-3 mb-6">
                             <Link href="/tin-tuc" className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-blue-100 transition-colors">
                                 <ArrowLeft className="w-4 h-4 mr-1" /> Tin tức
                             </Link>
                             <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                            <span className="inline-flex px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
                                {newsItem.category}
                            </span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                            {newsItem.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-400" />
                                <span>{formatDate(newsItem.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-400" />
                                <span>{newsItem.readTime} đọc</span>
                            </div>
                             {newsItem.views && (
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-blue-400" />
                                    <span>{newsItem.views.toLocaleString()} lượt xem</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 lg:py-20 bg-gray-50/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-20">
              
              {/* Left Column: Article Content */}
              <article className="flex flex-col">
                 <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    {/* Excerpt */}
                    <div className="mb-10 pl-6 border-l-4 border-blue-600">
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic text-justify">
                            {newsItem.excerpt}
                        </p>
                    </div>

                    {/* Body Content */}
                    <div
                        className="prose prose-lg md:prose-xl max-w-none text-justify
                        prose-headings:text-gray-900 prose-headings:font-bold 
                        prose-p:text-gray-700 prose-p:leading-10 prose-p:text-justify
                        [&_p]:text-justify [&_li]:text-justify
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                        prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                        prose-li:text-justify"
                        dangerouslySetInnerHTML={{
                            __html: newsItem.content || "",
                        }}
                    />

                    {/* Social Share & Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-2">
                            {newsItem.tags && newsItem.tags.map((tag, idx) => (
                                <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                                    <Hash className="w-3 h-3 mr-1 text-gray-500" /> {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-gray-500 mr-2">Chia sẻ:</span>
                            <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                             <button className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                             <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Posts (Bottom of Article) */}
                <div className="mt-12">
                     <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        Bài viết liên quan
                     </h3>
                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedPosts.map(post => (
                             <Link key={post.id} href={`/tin-tuc/${post.id}`} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                     <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                     <div className="absolute top-2 left-2">
                                          <span className="px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-xs font-bold text-gray-900 shadow-sm">
                                            {post.category}
                                          </span>
                                     </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <Calendar className="w-3 h-3 mr-1" /> {formatDate(post.date)}
                                    </div>
                                </div>
                             </Link>
                        ))}
                     </div>
                </div>

              </article>

              {/* Right Sidebar */}
              <aside className="space-y-8">
                  {/* Search Widget? Maybe later */}
                  
                  {/* Latest News */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">Tin mới cập nhật</h3>
                            <Link href="/tin-tuc" className="text-sm font-medium text-blue-600 hover:text-blue-800">Xem tất cả</Link>
                        </div>
                        <div className="space-y-6">
                            {recentPosts.map((post, i) => (
                                <Link key={post.id} href={`/tin-tuc/${post.id}`} className="group flex gap-4 items-start">
                                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                             <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                                {post.category}
                                             </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors mb-1">
                                            {post.title}
                                        </h4>
                                        <span className="text-xs text-gray-400 block">
                                            {formatDate(post.date)}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                         {/* Subscribe or Banner could go here */}
                         <div className="mt-8 p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl text-white text-center">
                             <h4 className="font-bold text-lg mb-2">Đăng ký bản tin</h4>
                             <p className="text-blue-100 text-sm mb-4">Nhận thông tin mới nhất từ HCMUTE</p>
                             <button className="w-full py-2 bg-white text-blue-700 font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors">
                                 Đăng ký ngay
                             </button>
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
