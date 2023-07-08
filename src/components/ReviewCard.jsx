export default function ReviewCard({ data }) {
  const { rating, comment, pp, revName } = data;

  return (
    <div className="w-1/2 ">
      <div className="flex justify-between border-b-2 p-2">
        <div className="flex justify-center items-center">
          <img src={pp} alt={revName} className="w-12 rounded-3xl" />
          <span> {revName}</span>
        </div>
        <div>{rating}⭐</div>
      </div>
      <div>{comment}</div>
    </div>
  );
}
