import { Navigate, useParams } from 'react-router-dom';

// fakeData
import { blogsData } from '../../data/blogs';
import Slider from '../../containers/Main/components/Slider';

const BlogPage = () => {
  const params = useParams();
  const blog = blogsData.find((blg) => blg.id === Number(params.id));

  if (!blog) {
    console.log(blog);
    return <Navigate to={'/'} />;
  }
  const { id, category, image, publishedAt, title } = blog;
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* blog Content */}
      <div>
        {/* headers */}
        <div className="py-8">
          <p className=" text-gray-400 uppercase pb-2  ">
            <span>{publishedAt.toDateString()}</span>{' '}
            <span className="mx-2 text-xl">-</span> <span>{category}</span>
          </p>
          <h1 className="uppercase text-4xl">{title}</h1>
        </div>

        {/* image */}
        <img
          src={image}
          alt={title}
          className="max-h-[50rem] w-full h-full  object-cover object-bottom"
        />

        {/* content */}
        <div className=" ">
          <div className="my-8 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur facilisis vivamus massa magna. Blandit mauris libero
              condimentum commodo morbi consectetur sociis convallis sit. Magna
              diam amet justo sed vel dolor et volutpat integer. Iaculis sit
              sapien hac odio elementum egestas neque. Adipiscing purus euismod
              orci sem amet, et. Turpis erat ornare nisi laoreet est euismod.
            </p>
            <p className="text-gray-400 mt-4">
              Sit suscipit tortor turpis sed fringilla lectus facilisis amet.
              Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id
              aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi
              arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in
              sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
              aliquam. Cras sagittis tellus nunc integer vitae neque bibendum
              eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor
              elit tincidunt tellus sit ornare. Purus ut quis sed venenatis eget
              ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt
              nunc integer sit.
            </p>
          </div>
          <h2 className="text-3xl font-light">
            “Sit suscipit tortor turpis sed fringilla lectus facilisis amet.
            Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id
            aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. “
          </h2>

          <div className="my-4">
            <h3 className="text-xl">Are you amazed ?</h3>
            <ul className="list-disc text-gray-400 pl-8 my-4">
              <li>
                Blandit mauris libero condimentum commodo sociis convallis sit.{' '}
              </li>
              <li>Magna diam amet justo sed vel dolor et volutpat integer </li>
              <li>Laculis sit sapien hac odio elementum egestas neque. </li>
            </ul>
            <p className="text-gray-400">
              Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis.
              Urna in sollicitudin in vestibulum erat. Turpis faucibus augue
              ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque
              bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis
              porttitor elit tincidunt tellus sit ornare. Purus ut ipsum, enim
              lacus.
            </p>
            <p className="text-gray-400">
              Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et
              eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur
              libero elementum adipiscing mauris maecenas et magna. Etiam nec,
              rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
              viverra donec pellentesque. Odio mi consequat libero dolor. Porta
              ut diam lobortis eget leo, lectus. Nunc tempus feugiat massa
              laoreet ultrices diam magna quam. Congue auctor auctor luctus
              neque. Enim lorem ultrices diam donec. Sed id placerat consectetur
              faucibus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-rows-2 grid-cols-1 md:grid-rows-1">
            <div>
              <img
                src={image}
                alt={title}
                className="aspect-square  object-cover h-96 w-full"
              />
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:p-4">
              <p className="text-xl">Velit, praesent pharetra malesuada </p>
              <p>
                Id pulvinar amet. Consequat potenti mollis massa iaculis et,
                dolor, eget lectus. Aliquam pellentesque molestie felis fames
                sed eget non euismod eget. Et eget ullamcorper urna, elit ac
                diam tellus viverra lacus. Cras sagittis tellus nunc integer
                vitae neque bibendum eget. Tempus malesuada et pellentesque
                maecenas.
              </p>
              <p>
                Tortor diam dignissim amet, in interdum aliquet. Magnis dictum
                et eros purus fermentum, massa ullamcorper sit sollicitudin.
                Nascetur libero elementum adipiscing mauris maecenas et magna.
                Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis
                pulvinar non viverra donec pellentesque. Odio mi consequat
                libero dolor. Porta ut diam lobortis eget leo, lectus. Urna in
                sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                aliquam. Cras sagittis tellus nunc integer vitae neque bibendum
                eget. Tempus malesuada et pellentesque maecenas. Sociis
                porttitor elit tincidunt tellus sit ornare. Purus ut quis sed
                venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae
                eu, eu tincidunt nunc integer sit.
              </p>
            </div>
          </div>
          <div className="mt-8 ">
            <p className="mb-8">
              Velit, praesent pharetra malesuada id pulvinar amet. Consequat
              potenti mollis massa iaculis et, dolor, eget lectus. Aliquam
              pellentesque molestie felis fames sed eget non euismod eget. Et
              eget ullamcorper urna, elit ac diam tellus viverra lacus.
            </p>
            <p>
              Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et
              eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur
              libero elementum adipiscing mauris maecenas et magna. Etiam nec,
              rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
              viverra donec pellentesque. Odio mi consequat libero dolor. Porta
              ut diam lobortis eget leo, lectus.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Slider title="related posts" blogs={blogsData} />
      </div>
    </div>
  );
};
export default BlogPage;
