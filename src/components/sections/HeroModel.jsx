const MODEL_SRC = '/models/20ft_container.glb'

export default function HeroModel() {
  return (
    <model-viewer
      src={MODEL_SRC}
      alt="Shipping containers"
      auto-rotate
      auto-rotate-delay="0"
      rotation-per-second="12deg"
      camera-controls
      touch-action="pan-y"
      interaction-prompt="none"
      shadow-intensity="0.85"
      exposure="1.05"
      environment-image="neutral"
      className="hero-model-viewer block h-full w-full p-4"
    />
  )
}
