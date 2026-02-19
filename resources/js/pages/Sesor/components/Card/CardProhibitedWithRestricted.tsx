const CardProhibitedWithRestricted = () => (
  <div id="prohibited-items" className="mt-10 bg-primary-two/30 py-5">
    {/* Prohibited Items */}
    <div className="section-container">
      <div className="text-center">
        <h2 className="font-manrope-extra-bold tracking-tight text-primary text-3xl">
          Prohibited Items
        </h2>
        <div className="items-center mt-5 grid gap-5 md:grid-cols-2 justify-center md:gap-10 md:px-0 lg:grid-cols-4">
          {[
            {
              src: "/assets/sesor/service/Illegal Drugs and Controlled Substances.png",
              title: "Illegal Drugs and Controlled Substances",
            },
            {
              src: "/assets/sesor/service/Explosives.png",
              title: "Explosives",
            },
            {
              src: "/assets/sesor/service/Live Animals.png",
              title: "Live Animals",
            },
            {
              src: "/assets/sesor/service/Toxic and Infectious Substances.png",
              title: "Toxic and Infectious Substances",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:p-4 text-center text-primary"
            >
              <div className="flex aspect-square w-[6.5rem] items-center justify-center">
                <img src={item.src} alt={item.title} />
              </div>
              <h3 className="mt-1 text-[15px] max-w-[200px] font-manrope-regular">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Restricted Items */}
    <div className="section-container mt-10">
      <div className="text-center">
        <h2 className="font-manrope-extra-bold tracking-tight text-primary text-3xl">
          Restricted Items
        </h2>
        <div className="items-center mt-5 grid gap-5 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-4 xl:grid-cols-5">
          {[
            {
              src: "/assets/sesor/service/Fresh or Perishable Goods without a Cooler.png",
              title: "Fresh or Perishable Goods without a Cooler",
            },
            {
              src: "/assets/sesor/service/Fragile Items without Secure Packaging.png",
              title: "Fragile Items without Secure Packaging",
            },
            {
              src: "/assets/sesor/service/Food and Drinks.png",
              title: "Food and Drinks",
            },
            {
              src: "/assets/sesor/service/CashCheques.png",
              title: "Cash/Cheques",
            },
            {
              src: "/assets/sesor/service/Jewelry or Luxury Items.png",
              title: "Jewelry or Luxury Items",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:p-4 text-center text-primary"
            >
              <div className="flex aspect-square w-[6.5rem] items-center justify-center">
                <img src={item.src} alt={item.title} />
              </div>
              <h3 className="mt-1 text-[15px] max-w-[200px] font-manrope-regular">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardProhibitedWithRestricted;
