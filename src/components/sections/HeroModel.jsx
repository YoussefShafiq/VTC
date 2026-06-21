const MODEL_SRC = '/models/truck_covered_in_snow.glb'

export default function HeroModel() {
  return (
    <model-viewer
      src={MODEL_SRC}
      alt="Shipping containers"
      // auto-rotate
      auto-rotate-delay="0"
      rotation-per-second="12deg"
      camera-controls
      touch-action="pan-y"
      interaction-prompt="none"
      shadow-intensity="0.85"
      exposure="1.05"
      environment-image="neutral"
      camera-orbit="-78deg 90deg 2m"
      className="hero-model-viewer block h-full w-full"
    />
  )
}


// const MODEL_SRC = '/models/optimus_truck (2).glb'

// export default function HeroModel() {
//   return (
//     <model-viewer
//       src={MODEL_SRC}
//       alt="Shipping containers"
//       // auto-rotate
//       auto-rotate-delay="0"
//       rotation-per-second="19deg"
//       camera-controls
//       touch-action="pan-y"
//       interaction-prompt="none"
//       shadow-intensity="0.85"
//       exposure="1.05"
//       environment-image="neutral"
//       camera-orbit="120deg 90deg 9000px"
//       className="hero-model-viewer block h-full w-full"
//     />
//   )
// }
