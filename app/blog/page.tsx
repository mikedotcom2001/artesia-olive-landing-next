import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Bookkeeping insights, tax tips, and financial guidance for small business owners from Artesia Bookkeeping.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: object; alt?: string };
  categories?: { _id: string; title: string }[];
  author?: { name: string };
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery).catch(() => []);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-24 pt-36">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            The Blog
          </p>
          <h1 className="text-5xl md:text-6xl font-display text-foreground mb-4">
            Bookkeeping Insights
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tax tips, financial fundamentals, and practical guidance to help
            your small business thrive.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg py-16">
              No posts yet — check back soon!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(338).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-olive opacity-20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.categories.map((cat) => (
                          <span
                            key={cat._id}
                            className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      {post.author && (
                        <>
                          <span className="mx-1">·</span>
                          <span>{post.author.name}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
