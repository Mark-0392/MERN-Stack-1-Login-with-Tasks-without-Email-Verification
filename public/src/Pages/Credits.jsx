import milkyway from '../../src/assets/Mobile background Image/milkyway.jpg'
import amsterdam from '../../src/assets/Mobile background Image/image6.jpg'
import About from '../../src/assets/About.png'
import Login from '../../src/assets/diamond-sunset.png'
import Register from '../../src/assets/flat-mountains.png'

const Credits = () => {
  return (
    <div className="grid place-items-center max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)] grid-rows-1 bg-teal-500 text-black max-sm:px-2">
      <div className="w-full max-w-xl mx-auto px-2 flex flex-col gap-y-4 text-center border py-2 rounded-md border-slate-950 bg-black">
        <h1 className="text-white font-Tangerine_Regular text-2xl md:text-4xl">
          I would like to thank everyone who helped me achieve this with their
          contribution with a free of charge.
        </h1>
        <div className="flex flex-col h-60 rounded-md border border-gray-700 px-4 py-4 divide-y-2  divide-white bg-teal-400">
          <div className="flex gap-x-2 items-center py-2">
            <div className="w-10 h-13">
              <img src={milkyway} alt="milkyway image" />
            </div>
            <p className="uppercase text-base">
              {' '}
              - eberhard grossgasteiger{' '}
              <span className="lowercase text-sm">
                (from https://www.pexels.com/)
              </span>
            </p>
          </div>
          <div className="flex gap-x-2 items-center py-2">
            <div className="w-10 h-13">
              <img src={amsterdam} alt="amsterdam image" />
            </div>
            <p className="uppercase text-base">
              {' '}
              - Anh Nguyen{' '}
              <span className="lowercase text-sm">
                (from https://www.pexels.com/)
              </span>
            </p>
          </div>
          <div className="flex gap-x-4 items-center py-2">
            <div className="w-10 h-13">
              <img src={About} alt="about page image" />
            </div>
            <div className="w-10 h-13">
              <img src={Login} alt="about page image" />
            </div>
            <div className="w-10 h-13">
              <img src={Register} alt="about page image" />
            </div>
            <p className="text-sm text-wrap underline underline-offset-4 decoration-2 decoration-indigo-600">
              -{' '}
              <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
                Free SVG Backgrounds and Patterns
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Credits
