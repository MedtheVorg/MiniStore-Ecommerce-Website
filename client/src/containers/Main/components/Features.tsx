import { BsCart3 } from 'react-icons/bs';
import { SlBadge } from 'react-icons/sl';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { GoShieldCheck } from 'react-icons/go';
const Features = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="grid p-4 grid-cols-1  gap-y-12  md:grid-cols-2 lg:grid-cols-4  my-10  xl:gap-y-0 xl:px-0">
        <div className="card flex gap-4">
          <div className="icon ">
            <BsCart3 className="text-semiBlue" size={30} />
          </div>
          <div className="content">
            <h2 className="uppercase font-semibold text-dark">free delivery</h2>
            <p className="mt-2 text-lightGray font-light">
              Enjoy hassle-free shopping with our complimentary delivery
              service. Get your electronics delivered to your doorstep at no
              extra cost. Shop with confidence, knowing that shipping won't
              break the bank
            </p>
          </div>
        </div>

        <div className="card flex gap-4">
          <div className="icon ">
            <SlBadge className="text-semiBlue" size={30} />
          </div>
          <div className="content">
            <h2 className="uppercase font-semibold text-dark ">
              quality guarantee
            </h2>
            <p className="mt-2 text-lightGray font-light text-balance ">
              We stand by the quality of our electronics. Every product is
              rigorously tested and backed by our quality guarantee. Rest
              assured that you're getting top-notch electronics that meet the
              highest standards
            </p>
          </div>
        </div>

        <div className="card flex gap-4">
          <div className="icon ">
            <MdOutlineLocalOffer className="text-semiBlue" size={30} />
          </div>
          <div className="content">
            <h2 className="uppercase font-semibold text-dark">daily offers</h2>
            <p className="mt-2 text-lightGray font-light">
              Don't miss out on incredible daily offers! Discover unbeatable
              discounts on a wide range of electronics every day. Grab the
              hottest deals and upgrade your tech without breaking the budget.
            </p>
          </div>
        </div>

        <div className="card flex gap-4">
          <div className="icon ">
            <GoShieldCheck className="text-semiBlue" size={30} />
          </div>
          <div className="content">
            <h2 className="uppercase font-semibold text-dark">
              100% secure payment
            </h2>
            <p className="mt-2 text-lightGray font-light">
              Your online security is our priority. Shop with peace of mind
              knowing that your payments are 100% secure. We use the latest
              encryption technology to protect your financial information
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
