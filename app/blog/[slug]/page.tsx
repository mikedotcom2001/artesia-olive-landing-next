import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft, CalendarDays } from "lucide-react";

// Revalidate ISR every hour
export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(postSlugsQuery);
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    // Sanity not yet configured — skip static pre-generation; pages render via ISR
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.mainImage?.asset && {
        images: [urlFor(post.mainImage).width(1200).height(630).url()],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Portable Text component overrides — styled to match the site palette
const ptComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-foreground/90">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl text-foreground mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-xl text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-5 my-6 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-6 mb-5 space-y-1.5 text-foreground/90">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 mb-5 space-y-1.5 text-foreground/90">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-muted text-foreground font-mono text-sm px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Back link + hero */}
      <section className="bg-gradient-hero pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Categories */}
          {post.categories?.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.categories.map((cat: { _id: string; title: string }) => (
                <span
                  key={cat._id}
                  className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.author && (
              <>
                <span>·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main image */}
      {post.mainImage?.asset && (
        <div className="container mx-auto px-6 max-w-3xl -mt-6">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={urlFor(post.mainImage).width(900).height(506).url()}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="container mx-auto px-6 max-w-3xl py-12">
        {post.body && <PortableText value={post.body} components={ptComponents} />}

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-card border border-border rounded-2xl text-center">
          <p className="font-display text-2xl text-foreground mb-2">
            Ready to get your books in order?
          </p>
          <p className="text-muted-foreground mb-6 text-sm">
            Book a free consultation with Artesia Bookkeeping.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-olive text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
