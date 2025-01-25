const Loading2 = () => {
  return (
    <div class=" grid place-items-center border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto min-h-screen max-lg:bg-night bg-cover bg-center px-2 lg:bg-loginPage">
      <div className="flex items-center gap-x-2">
        {/* <h1 className="font-Playfair_SemiBold text-lg lg:text-xl text-yellow-400">
          Loading....
        </h1> */}
        <div className="w-16 h-16 ">
          <svg
            fill="#FFFFFF"
            // width="50"
            // height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="spinner-gF01">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="1"
                  result="y"
                />
                <feColorMatrix
                  in="y"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                  result="z"
                />
                <feBlend in="SourceGraphic" in2="z" />
              </filter>
            </defs>
            <g filter="url(#spinner-gF01)">
              <circle cx="5" cy="12" r="4">
                <animate
                  attributeName="cx"
                  calcMode="spline"
                  dur="2s"
                  values="5;8;5"
                  keySplines=".36,.62,.43,.99;.79,0,.58,.57"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="19" cy="12" r="4">
                <animate
                  attributeName="cx"
                  calcMode="spline"
                  dur="2s"
                  values="19;16;19"
                  keySplines=".36,.62,.43,.99;.79,0,.58,.57"
                  repeatCount="indefinite"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="0.75s"
                values="0 12 12;360 12 12"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Loading2
