import { legalPages } from '../../data/content'
import LegalDocument from './LegalDocument'

export default function TermsOfUsePage() {
  return <LegalDocument page={legalPages.termsOfUse} />
}
