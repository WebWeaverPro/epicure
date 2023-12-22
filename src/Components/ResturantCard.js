const ResturantCard = ({ resturantInfo }) => {
  const name = resturantInfo?.info?.name;
  const imgPath = resturantInfo?.info?.image?.url;
  const avgRating = resturantInfo?.info?.rating?.rating_text;
  const costForTwo = resturantInfo?.info?.cft?.text;
  const cusines = resturantInfo?.info?.cuisine;
  const deliveryTime = resturantInfo?.order?.deliveryTime;
  const theme = "dark";
  return (
    <div className="flex items-center justify-center">
      <div
        className={`cursor-pointer w-[380px] h-[380px] rounded-xl shadow-md transition duration-300 ease-out hover:scale-95`}
      >
        <div className="bg-cover bg-center">
          <img
            className="w-full rounded-t-xl"
            src={imgPath}
            alt="Card cap"
            style={{ height: "200px" }}
          />
        </div>
        <div className={`bg-gray-100 p-4`}>
          <div className="flex justify-between items-center">
            <p className={`text-xl leading-7 mb-1 font-normal`}>{name}</p>
            <div
              className={`bg-[#5ba829] flex items-center div-color gap-1 text-white px-2 rounded-lg self-start`}
            >
              <span className="text-xl leading-7 mb-1 font-bold mt-1">
                {avgRating}
              </span>
            </div>
          </div>
          <p
            className={`${
              theme === "light" ? "text-white" : "text-gray-500"
            } text-md leading-7 mb-1 font-normal text-sm`}
          >
            {cusines.map((cu, index) => (
              <span className="text-sm">
                {cu.name} {index === cusines.length - 1 ? "..." : ", "}
              </span>
            ))}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className={`font-semibold leading-7 mb-1 text-sm`}>
              {deliveryTime}
            </p>
            <p
              className={`${
                theme === "light" ? "text-white" : "text-gray-500"
              } text-md leading-7 mb-1 font-normal text-sm`}
            >
              {costForTwo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
