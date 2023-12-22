import ResturantCard from "./ResturantCard";
import ResturantMockData from "./Utils/MockResturantData";

const Resturants = () => {
  const resData = ResturantMockData?.SECTION_SEARCH_RESULT;
  console.log(resData);
  return (
    <section className="p-20">
      <h1 className="text-3xl italic font-medium">Best Foods In Pune</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {resData.map((res) => (
          <ResturantCard key={res?.info?.resId} resturantInfo={res} />
        ))}
      </div>
    </section>
  );
};

export default Resturants;
