import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {  Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTables from "./AppliedJobTables";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
// const skills=["Html","Css","Javascript","Reactjs"];
const isResume=true;
const profile = () => {
const [open,setOpen]=useState(false);
    const {user}=useSelector(store=>store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://picsum.photos/200/300" />
            </Avatar>
            <div>
              <h1 className="font-bold text-lg">{user?.fullname}</h1>
              <p>
               {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)}  variant="outline" className="text-right">
            <Pen />
          </Button>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className='my-5'>
            <h1>Skills</h1>
            <div className="flex items-center gap-1"></div>
            {
                user?.profile?.skills.length!=0?user?.profile?.skills.map((item,index)=><Badge key={index} className="bg-black text-white"> {item}</Badge>):<span>NA</span>
            }
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume?<a target='blank' href={user?.profile?.resume}  className="text-blue-500 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a>:<span>NA</span>
            }
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-lg">
                Applied Jobs
            </h1>
            <AppliedJobTables/>
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default profile;
