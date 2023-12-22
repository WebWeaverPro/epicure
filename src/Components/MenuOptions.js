const MenuOptions = () => {
  return (
    <section className="px-20 py-10 bg-gray">
      <h1 className="text-3xl italic font-medium">Inspiration for your first order</h1>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Biryani"
            src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
            loading="lazy"
          />
          <span>Biryani</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Biryani"
            src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
            loading="lazy"
          />
          <span>Thali</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Biryani"
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            loading="lazy"
          />
          <span>Pizza</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Biryani"
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            loading="lazy"
          />
          <span>Burger</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Biryani"
            src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
            loading="lazy"
          />
          <span>Rolls</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 rounded-full"
            alt="Biryani"
            src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
            loading="lazy"
          />
          <span>Cake</span>
        </div>
      </div>
    </section>
  );
};
export default MenuOptions;
