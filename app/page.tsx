import Link from 'next/link';
import ReactMarkdown from "react-markdown";

import { getAboutCopy, getProjectList } from '@/app/helpers';

export default function Home() {
  const about = getAboutCopy();
  const list = getProjectList();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ReactMarkdown>{about.markdown}</ReactMarkdown>
        <h2>Projects</h2>
        {
          list.projects && list.projects.map(({ slug, metadata }) => {
            const { title } = metadata;
            return (
              <Link key={slug} href={`/projects/${slug}`}>{title}</Link>
            )
          })
        }
      </main>
    </div>
  );
}
