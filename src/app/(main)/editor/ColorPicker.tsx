import { Color, ColorChangeHandler, TwitterPicker } from "react-color";
import { useState } from "react";
import {
    Popover,
     PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Button } from "@/components/ui/button";
//   import { canUseCustomizations } from "@/lib/permissions";
  import { PaletteIcon } from "lucide-react";
//   import { useSubscriptionLevel } from "../SubscriptionLevelProvider";




interface ColorPickerProps {
    color: Color | undefined;
    onChange: ColorChangeHandler;
  }
  

  export default function ColorPicker({ color, onChange }: ColorPickerProps) {

    
  const [showPopover, setShowPopover] = useState(false);
  return (
    <Popover open={showPopover} onOpenChange={setShowPopover}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Change resume color"
          onClick={() => {
            // if (!canUseCustomizations(subscriptionLevel)) {
            //   premiumModal.setOpen(true);
            //   return;
            // }
            setShowPopover(true);
          }}
        >
          <PaletteIcon className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="border-none bg-transparent shadow-none"
        align="end"
      >
        <TwitterPicker color={color} onChange={onChange} triangle="top-right" />
      </PopoverContent>
      </Popover>
        );

}