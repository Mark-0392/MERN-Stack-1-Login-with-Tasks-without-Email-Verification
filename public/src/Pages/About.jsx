import { useLoaderData } from 'react-router-dom'
import img1 from '../../src/assets/About.png'

const About = () => {
  return (
    <>
      <div className="grid place-items-center max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)]">
        <div className="w-full h-full py-4 space-y-2 lg:gap-y-3 mx-auto  flex  flex-col  items-center justify-center bg-slate-500 px-2 ">
          <div className="w-72 hidden md:block">
            <img src={img1} alt="" />
          </div>
          <h1 className="text-xl lg:text-4xl text-white font-serif lg:font-bold leading-snug tracking-tight ml-2 lg:ml-0 ">
            We love to help people remember things.
          </h1>
          <p className="lg:tracking-wide leading-relaxed px-2 ml-6 lg:ml-4 text-base md:text-lg  lg:text-xl text-slate-300 text-wrap ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
            odit, officiis eos mollitia alias, doloremque, aspernatur ratione
            asperiores voluptas labore minus dolores reprehenderit corporis
            quos. Assumenda molestias harum dignissimos?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas assumenda ad provident quos
            dolore, sunt aliquam nihil adipisci tenetur nulla ipsam fugiat,
            maiores perspiciatis nostrum cum, deserunt quis atque veritatis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
            blanditiis a. Mollitia aliquid enim perferendis. Dignissimos magni,
            accusamus laudantium architecto vitae fugit nam non hic aperiam,
            pariatur illum debitis at dolore. Nobis odit reprehenderit sint
            nesciunt eum qui illum, at quasi architecto fugit nisi! Itaque
            reiciendis ratione at aliquam?
          </p>
        </div>
      </div>
    </>
  )
}
export default About
