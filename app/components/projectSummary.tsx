import Link from 'next/link';

export default function ProjectSummary({ metadata }) {
  const { title, description, category, client, industry, link } = metadata;
  return (
    <>
      <h3>{title}</h3>
      <div>{[category, client, industry].map((v, i) => (<div key={i}>{v}</div>))}</div>
    </>
  )
}