import { InterceptedSheetContents } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import OrganizationForm from '../../org/organization-form'

export default function CreateOrganization() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContents>
        <SheetHeader>
          <SheetTitle>Create orgnaization</SheetTitle>
        </SheetHeader>

        <OrganizationForm />
      </InterceptedSheetContents>
    </Sheet>
  )
}
