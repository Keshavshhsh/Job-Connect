import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {  Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTables from "./AppliedJobTables";
const skills=["Html","Css","Javascript","Reactjs"]
const profile = () => {
    const isResume=true;
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
              <h1 className="font-bold text-lg">FullName</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                exercitationem, qui ratione quae, illo, nisi vero ad ab optio
                deserunt placeat tempore eveniet cum dolores inventore. Ullam
                dolores error amet!
              </p>
            </div>
          </div>
          <Button variant="outline" className="text-right">
            <Pen />
          </Button>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>namankatiyar@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>6397586670</span>
          </div>
        </div>
        <div className='my-5'>
            <h1>Skills</h1>
            <div className="flex items-center gap-1"></div>
            {
                skills.length!=0?skills.map((item,index)=><Badge key={index} className="bg-black text-white"> {item}</Badge>):<span>NA</span>
            }
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume?<a target='blank' href='https://youtube.com/@patelmernstack'  className="text-blue-500 w-full hover:underline cursor-pointer">patel mern stack</a>:<span>NA</span>
            }
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-lg">
                Applied Jobs
            </h1>
            <AppliedJobTables/>
        </div>
      </div>
    </div>
  );
};

export default profile;
