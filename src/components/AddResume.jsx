import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Button } from "./ui/button";

const AddResume = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();

    const onCreate = () => {
        const uuid = uuidv4();
        console.log(uuid)
    }
  return (
    <div className="mt-10">
      <div className="p-14 py-24 border border-dashed items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer"
      onClick={() => setOpenDialog(true)}>
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add title for your new resume</p>
                <Input className="my-2" placeholder="Ex. Full Stack resume"
                onChange={(e) =>setResumeTitle(e)}
                />
            </DialogDescription>
            <div className="flex justify-end gap-5">
                <Button variant='ghost' onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button 
                disabled={!resumeTitle}
                onClick={() => onCreate()}>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
