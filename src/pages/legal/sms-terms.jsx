import { legalPages } from '../../data/content'
import LegalDocument from './LegalDocument'

export default function SmsTermsPage() {
  return <LegalDocument page={legalPages.smsTerms} />
}
