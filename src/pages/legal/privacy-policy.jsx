import { legalPages } from '../../data/content'
import LegalDocument from './LegalDocument'

export default function PrivacyPolicyPage() {
  return <LegalDocument page={legalPages.privacyPolicy} />
}
