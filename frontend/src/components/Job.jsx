import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate=useNavigate();
  const jobId="lmmkdknsnndjfhg";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://picsum.photos/200/300" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-md text-lg">Company Name</h1>
          <p className="font-sm">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime
          culpa adipisci assumenda autem iure eos aliquid necessitatibus non!
        </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost"> 12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">47lpa</Badge>
        </div>
        <div className="flex gap-4 items-center justify-between mt-4">
          <Button onClick={()=>navigate('/description/${jobId}')} variant="outline" className="bg-slate-950 text-white"  >Details</Button>
          <Button variant="outline" className="bg-slate-950 text-white" >Save for later </Button>

        </div>
    </div>
  
)};

export default Job;
