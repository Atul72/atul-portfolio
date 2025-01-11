const BlogObject = [
  {
    title: "How to use React with Typescript",
    date: "2024-01-01",
    tags: ["GSoC", "Typescript", "React"],
  },
  {
    title: "Improve your React skills",
    date: "2024-01-01",
    tags: ["GSoC", "Typescript", "React"],
  },
  {
    title: "Latest react 19 features",
    date: "2024-01-01",
    tags: ["GSoC", "Typescript", "React"],
  },
];

export default function Blogs() {
  return (
    <div>
      <div className="flex mt-[60px] justify-between items-center">
        <h1 className="text-[40px] font-bold text-localPrimary-200 md:text-[60px]">
          Blogs
        </h1>
        <p className="text-[16px] text-localPrimary-100 transition-all duration-200  hover:underline hover:text-localPrimary-500 hover:cursor-pointer">
          View all tags
        </p>
      </div>
      <div>
        {BlogObject.map((blog) => (
          <div key={blog.title}>
            <div className="mt-[20px]">
              <h1 className="text-[18px] md:text-[23px] font-bold text-localText-600 hover:underline hover:cursor-pointer hover:text-localPrimary-500 transition-all duration-200">
                {blog.title}
              </h1>
              <div className="flex gap-2 text-[14px] md:text-[16px] text-localText-500">
                <p>{blog.date}</p>
                <span>—</span>
                <p>{blog.tags.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
