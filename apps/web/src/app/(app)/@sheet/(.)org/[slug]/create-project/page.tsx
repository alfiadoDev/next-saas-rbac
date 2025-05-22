import ProjectForm from '@/app/(app)/org/[slug]/create-project/project-form'
import { InterceptedSheetContents } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function CreateProject() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContents>
        <SheetHeader>
          <SheetTitle>Create orgnaization</SheetTitle>
        </SheetHeader>

        <ProjectForm />
      </InterceptedSheetContents>
    </Sheet>
  )
}
