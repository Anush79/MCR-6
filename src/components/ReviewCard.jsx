export default function ReviewCard({ data }) {
  const { rating, comment, pp, revName } = data;

  return (
    <div className="w-3/4 m-auto ">
      <div className="flex justify-between p-2">
        <div className="flex justify-center gap-2 items-center">
          <img src={pp} alt={revName} className="w-10 rounded-3xl" />
          <span className="font-bold"> {revName}</span>
        </div>
        <div className="bg-green-600 h-7 w-9 rounded p-1">{rating}⭐</div>
      </div>
      <div className=" border-b-2 text-left p-2">{comment}</div>
    </div>
  );
}
