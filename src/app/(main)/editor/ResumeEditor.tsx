// "use client"

// import { Button } from "@/components/ui/button"
// import Link from "next/link"



// export default function ResumeEditor(){
//     return (
//     <div className="flex grow flex-col">
//          <header className="space-y-1.5 border-b px-3 py-5 text-center">
//         <h1 className="text-2xl font-bold">Design your resume</h1>
//         <p className="text-sm text-muted-foreground">
//           Follow the steps below to create your resume. Your progress will be
//           saved automatically.
//         </p>
//         </header>

//         <main className="relative grow ">
//             <div className="absolute bottom-0 top-0 flex w-full">
//                 <div className="w-full md:w-1/2">left </div>
//                 <div className="grow md:border-r"/>
//                 <div className="hidden w-1/2 md:flex">right</div>
//             </div>
            
//         </main>
        
//         <footer className="w-full  border-t px-3 py-5">
//             <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
//                 <div className="flex items-center gap-3">
//                     <Button variant="secondary">Privious step</Button>
//                     <Button>Next step</Button>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <Button variant="secondary">
//                         <Link href="/resumes">Close</Link>
//                     </Button>
//                     <p className=" text-muted-foreground opacity-0"> Saving...</p>
//                 </div>
//             </div>
//         </footer>
//     </div>

// )}





"use client";



// import { ResumeServerData } from "@/lib/types";
import { cn , /*mapToResumeValues*/ } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import ResumePreviewSection from "./ResumePreviewSection";
import { steps } from "./steps";
import useUnloadWarning from "@/hooks/useUnloadWarning";
 import useAutoSaveResume from "./useAutoSaveResume";



  export default function ResumeEditor() {
    const searchParams = useSearchParams();
  
    const [resumeData, setResumeData] = useState<ResumeValues>({});
    const [showSmResumePreview,setShowSmResumePreview]=useState(false)


    
  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);
  const currentStep = searchParams.get("step") || steps[0].key;


  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }
    
  

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  useUnloadWarning(); 


  return (
    <div className="flex min-h-screen flex-col">
     
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>

     
      <main className="flex-grow relative">
        <div className="absolute inset-0 flex w-full">
      
        <div
            className={cn(
              "w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2",
              showSmResumePreview && "hidden",
            )}
          >
          <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
          {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )} 
          </div>
          <div className="grow md:border-r  border-gray-300"></div>
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showSmResumePreview && "flex")}
          />
        </div>
      </main>
      <Footer currentStep={currentStep}
        setCurrentStep={setStep}
        showSmResumePreview={showSmResumePreview}
        setShowSmResumePreview={setShowSmResumePreview}
        isSaving={isSaving}
      />
    </div>
  );
}




