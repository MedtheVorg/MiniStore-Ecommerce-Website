import iphoneImage from '../../../assets/products/IphonePNG.png';
const Sales = () => {
  return (
    <section className="bg-lightWhite  relative">
      <div className="max-w-screen-xl mx-auto py-40 lg:py-52 px-8 text-center lg:text-left">
        <p className="text-dark uppercase text-3xl font-light">----- 10% off</p>
        <h2 className="text-dark uppercase text-7xl font-[300] mt-8">
          new year sale
        </h2>
        <button className="uppercase text-white bg-dark px-8 py-3 font-lato font-normal mt-8">
          shop sale
        </button>
      </div>
      <img
        src={iphoneImage}
        alt="iphone"
        className="object-cover md:absolute top-0 right-0 h-full w-[50%] hidden  lg:block "
      />
    </section>
  );
};
export default Sales;
