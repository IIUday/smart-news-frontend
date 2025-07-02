
export default function FilteredNews({ news, analysis }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">News Relevant to Your Portfolio</h2>
      {news.length === 0 ? (
        <p>No relevant headlines found.</p>
      ) : (
        <ul className="list-disc ml-6">
          {news.map((headline, i) => (
            <li key={i}>{headline}</li>
          ))}
        </ul>
      )}
      {analysis && (
        <div className="mt-4 p-4 bg-gray-100 border">
          <h3 className="font-bold">AI Summary</h3>
          <pre className="whitespace-pre-wrap">{analysis}</pre>
        </div>
      )}
    </div>
  );
}
