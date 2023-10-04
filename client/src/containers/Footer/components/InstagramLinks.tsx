import instagramProducts from '../../../data/instagramProducts';

//icons
import { BsInstagram } from 'react-icons/bs';

const InstagramLinks = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <h2 className="text-4xl text-center uppercase mb-10 font-light">
        Instagram Store
      </h2>
      <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-4 px-2">
        {instagramProducts.map(({ id, image, url }) => (
          <a href={url} className="group" target="_blank" key={id}>
            <article className="relative h-[300px]">
              <img
                src={image}
                alt="instagram product"
                className="object-cover h-full w-full"
              />
              <div className="wrapper bg-dark/30 flex items-center justify-center absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity">
                <BsInstagram className="text-white" size={30} />
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};
export default InstagramLinks;
