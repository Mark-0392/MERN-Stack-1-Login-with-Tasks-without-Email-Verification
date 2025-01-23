const Loading = () => {
  return (
    <div class=" grid place-items-center border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)]">
      <div className="flex items-center gap-x-2">
        <h1 className="font-Playfair_SemiBold text-lg lg:text-xl text-yellow-400">
          Loading....
        </h1>
        <div className=" w-8 h-8 lg:w-16 lg:h-16">
          <svg
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="6" width="2.8" height="12">
              <animate
                begin="spinner_Diec.begin+0.4s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.4s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="5.8" y="6" width="2.8" height="12">
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="10.6" y="6" width="2.8" height="12">
              <animate
                id="spinner_Diec"
                begin="0;spinner_dm8s.end-0.1s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="0;spinner_dm8s.end-0.1s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="15.4" y="6" width="2.8" height="12">
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.2s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
            <rect x="20.2" y="6" width="2.8" height="12">
              <animate
                id="spinner_dm8s"
                begin="spinner_Diec.begin+0.4s"
                attributeName="y"
                calcMode="spline"
                dur="0.6s"
                values="6;1;6"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
              <animate
                begin="spinner_Diec.begin+0.4s"
                attributeName="height"
                calcMode="spline"
                dur="0.6s"
                values="12;22;12"
                keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              />
            </rect>
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Loading

//  <div className="w-20 h-20">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
//         <circle
//           fill="none"
//           strokeOpacity="1"
//           stroke="#FF156D"
//           strokeWidth=".5"
//           cx="100"
//           cy="100"
//           r="0"
//         >
//           <animate
//             attributeName="r"
//             calcMode="spline"
//             dur="2"
//             values="1;80"
//             keyTimes="0;1"
//             keySplines="0 .2 .5 1"
//             repeatCount="indefinite"
//           ></animate>
//           <animate
//             attributeName="stroke-width"
//             calcMode="spline"
//             dur="2"
//             values="0;25"
//             keyTimes="0;1"
//             keySplines="0 .2 .5 1"
//             repeatCount="indefinite"
//           ></animate>
//           <animate
//             attributeName="stroke-opacity"
//             calcMode="spline"
//             dur="2"
//             values="1;0"
//             keyTimes="0;1"
//             keySplines="0 .2 .5 1"
//             repeatCount="indefinite"
//           ></animate>
//         </circle>
//       </svg>
//     </div>

//  <div class="flex-1 space-y-6 py-1">
//       {/* <div class="w-10 h-4 rounded bg-black"></div> */}
//       <div class="space-y-3">
//         <div class="h-14 w-14 rounded bg-black"></div>
//       </div>
//     </div>

//  <svg
//         className="w-16 h-16"
//         // width="24"
//         // height="24"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
//           opacity=".25"
//         />
//         <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             dur="0.75s"
//             values="0 12 12;360 12 12"
//             repeatCount="indefinite"
//           />
//         </path>
//       </svg>
