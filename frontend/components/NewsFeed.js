
export default function NewsFeed({ news }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">General Market News</h2>
      <ul className="list-disc ml-6">
        {news.map((headline, i) => (
          <li key={i}>{headline}</li>
        ))}
      </ul>
    </div>
  );
}
