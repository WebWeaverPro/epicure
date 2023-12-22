const BrandOptions = () => {
  return (
    <section className="px-20 py-10">
      <h1 className="text-3xl italic font-medium">
        Top Brands For You
      </h1>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="McDonalds's"
            src="https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp"
            loading="lazy"
          />
          <span>McDonalds's</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Aroma's"
            src="https://b.zmtcdn.com/data/brand_creatives/logos/82b5b6321860545a160e790d99ec6da3_1629438503.png?output-format=webp"
            loading="lazy"
          />
          <span>Aroma's</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Dominos Pizza"
            src="https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp"
            loading="lazy"
          />
          <span>Dominos Pizza</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="KFC"
            src="https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp"
            loading="lazy"
          />
          <span>KFC</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Rolls Mania"
            src="https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png?output-format=webp"
            loading="lazy"
          />
          <span>Rolls Mania</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Haldiram"
            src="https://b.zmtcdn.com/data/brand_creatives/logos/d3c593271933bba9027ab27e60e7e9c9_1605068098.png?output-format=webp"
            loading="lazy"
          />
          <span>Haldiram's Resturant</span>
        </div>
      </div>
    </section>
  );
};

export default BrandOptions;
