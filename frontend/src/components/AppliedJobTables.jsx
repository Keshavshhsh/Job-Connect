import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTables = () => {
  return (
    <div>
        <Table>
            <TableCaption>
                A list of your applied jobs
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>
                    Date
                    </TableHead>
                    <TableHead>
                    Job Role
                    </TableHead>
                    <TableHead>
                    Company
                    </TableHead>
                    <TableHead className="text-right">
                    Status
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2,3,4].map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell>
                                14/1/2025
                            </TableCell>
                            <TableCell>
                                Frontend Developer
                            </TableCell>
                            <TableCell>
                                Google
                            </TableCell>
                            <TableCell
                            className="text-right">
                                <Badge>Selected</Badge>
                                
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTables