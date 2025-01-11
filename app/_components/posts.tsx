import Link from "next/link";

const blogPosts = [
  {
    title: "Long post title and many words to check if it works",
    date: "2024-01-01",
  },
  {
    title: "Blog Post 2",
    date: "2024-01-01",
  },
  {
    title: "Blog Post 3",
    date: "2024-01-01",
  },
];

export default function Posts() {
  return (
    <div className="mt-5 flex flex-col gap-10">
      <div>
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="text-[16px] md:text-[20px] flex flex-col gap-2"
          >
            <Link
              href={`/posts/${post.title}`}
              className="text-localPrimary-300 hover:underline hover:text-localPrimary-500 transition-all duration-200"
            >
              {post.title}
            </Link>
            <div className="text-localPrimary-200 ">{post.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
