import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaDhl,
  FaShip,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaGithub,
} from 'react-icons/fa';
const Links = () => {
  return (
    <div>
      <div className="  mt-8 gap-8 grid md:grid-cols-5  grid-cols-[auto] max-w-screen-xl mx-auto p-4 py-16 font-lato">
        <div className="col-span-2 pr-16">
          <a href="/" className="font-normal text-3xl">
            MiniStore<span className="text-semiBlue">.</span>
          </a>
          <p className="mt-4 my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            saepe hic modi maiores voluptatem reiciendis incidunt iusto omnis
            fugiat quam!
          </p>
          {/* social links */}
          <ul className="flex gap-4">
            <li className="mb-3 ">
              <a href="#">
                <FaFacebookF
                  className="text-dark/30 hover:text-semiBlue transition-colors "
                  size={30}
                />
              </a>
            </li>
            <li className="mb-3 ">
              <a href="#">
                <FaInstagram
                  className="text-dark/30 hover:text-semiBlue transition-colors "
                  size={30}
                />
              </a>
            </li>
            <li className="mb-3 ">
              <a href="#">
                <FaTwitter
                  className="text-dark/30 hover:text-semiBlue transition-colors "
                  size={30}
                />
              </a>
            </li>
            <li className="mb-3 ">
              <a href="#">
                <FaLinkedinIn
                  className="text-dark/30 hover:text-semiBlue transition-colors "
                  size={30}
                />
              </a>
            </li>
            <li className="mb-3 ">
              <a href="#">
                <FaYoutube
                  className="text-dark/30 hover:text-semiBlue transition-colors "
                  size={30}
                />
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <h3 className="uppercase text-2xl mb-4">quick links</h3>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              home
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              about
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              shop
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              blogs
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              contact
            </a>
          </li>
        </ul>

        <ul>
          <h3 className="uppercase text-2xl mb-4">help & info</h3>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              track your order
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              returns policies
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              shipping + delivery
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              contact us
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="uppercase hover:text-semiBlue">
              faqs
            </a>
          </li>
        </ul>

        <ul>
          <h3 className="uppercase text-2xl mb-4">contact us</h3>

          <li className="mb-3 text-lightGray font-light">
            Do you have any queries or suggestions? <br />
            <a href="#" className=" underline text-dark font-normal">
              yourinfo@gmail.com
            </a>
          </li>
          <li className="mb-3 text-lightGray font-light">
            if you need support? just give us a call. <br />
            <a href="#" className="uppercase underline text-dark font-normal">
              +55 11 22 33 44
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t-2">
        <div className="max-w-screen-xl mx-auto font-lato flex justify-between py-8 flex-col px-4 gap-4 text-md font-light lg:flex-row">
          <div className="flex gap-8">
            {/* shipment options */}
            <p className="flex items-center gap-2">
              we ship with: <FaDhl className="text-lightGray" size={40} />
              <FaShip className="text-lightGray" size={25} />
            </p>
            {/* payment options */}
            <p className="flex items-center gap-2">
              Payment options: <FaCcVisa className="text-lightGray" size={25} />
              <FaCcMastercard className="text-lightGray" size={25} />{' '}
              <FaCcPaypal className="text-lightGray" size={25} />
            </p>
          </div>
          <div>
            <p>
              © Copyright 2023 MiniStore. Design by TemplatesJungle and coded by
              <a
                href="https://github.com/MedtheVorg"
                target="_blank"
                className="inline-flex items-center gap-2 ml-2 underline  border-2 p-2 "
              >
                <FaGithub /> Mohamed lem
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Links;
