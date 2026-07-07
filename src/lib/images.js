import fleetHero from '../assets/fleet-hero.jpg'
import fleetTruck from '../assets/fleet-truck.png'
import heroTruckLogo from '../assets/hero-truck.png'
import aboutStory from '../assets/about-story.png'
import siteBackground from '../assets/site-background.png'

import serviceDrayage from '../assets/services/drayage.png'
import serviceIntermodal from '../assets/services/intermodal.png'
import serviceOtr from '../assets/services/otr.png'
import serviceLtl from '../assets/services/ltl.png'
import serviceWarehouse from '../assets/services/warehouse.png'
import serviceSpecialized from '../assets/services/specialized.png'

export const FLEET_IMAGE = fleetHero
export const HERO_TRUCK_IMAGE = fleetTruck
export const HERO_LOGO_IMAGE = heroTruckLogo
export const ABOUT_STORY_IMAGE = aboutStory
export const SITE_BACKGROUND_IMAGE = siteBackground

export const SERVICE_IMAGES = {
  drayage: serviceDrayage,
  intermodal: serviceIntermodal,
  otr: serviceOtr,
  ltl: serviceLtl,
  warehouse: serviceWarehouse,
  specialized: serviceSpecialized,
}

export function getServiceImage(serviceId) {
  return SERVICE_IMAGES[serviceId] ?? FLEET_IMAGE
}

export const fleetImagePositions = [
  'center 35%',
  'center 20%',
  'center 50%',
  'center 65%',
  'center 40%',
  'center 25%',
]
