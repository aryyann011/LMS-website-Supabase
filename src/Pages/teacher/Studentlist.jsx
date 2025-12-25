import React from 'react'
import { studentProgressData } from '@/data/dummy'
import { Table, TableHeader, TableBody, TableRow, TableCell,
    TableHead
 } from '@/Components/ui/table'
 import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
 import { Badge } from '@/Components/ui/badge'

const Studentlist = () => {
  return (
    <div className='p-6'>
      <h1 className='font-bold bottom-4'>All Students List</h1>
      <Table className="h-screen table-fixed w-full">
        <TableHeader>
            <TableRow>
                <TableHead className="w-62.5">Name</TableHead>
                <TableHead className="w-70">Active Courses</TableHead>
                <TableHead className="w-35">Status</TableHead>
                <TableHead className="w-55">Progress</TableHead>
                <TableHead className="w-35">Hours Spent</TableHead>
                <TableHead className="w-30 text-right">Location</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>
            {studentProgressData.map((data, index) => (
            <TableRow key={index}>
                <TableCell>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={data.StudentImage}/>
                        </Avatar>
                        <span className="truncate">{data.StudentName}</span>
                    </div>
                </TableCell>

                <TableCell>{data.ActiveCourse}</TableCell>
                <TableCell>
                    <Badge
                        style={{
                        backgroundColor: data.StatusBg,
                        color: "white",
                        }}
                    >
                        {data.Status}
                    </Badge>
                </TableCell>
                <TableCell>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">
                        {data.Progress}
                        </span>

                        <progress
                        value={parseInt(data.Progress)}
                        max="100"
                        className="h-2 w-24"
                        />
                    </div>
                </TableCell>
                <TableCell>{data.HoursSpent}</TableCell>
                <TableCell className="text-right">
                    {data.Location}
                </TableCell>

            </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Studentlist

// export const studentProgressData = [
//   {
//     StudentID: 1001,
//     StudentName: 'Nirav Joshi',
//     StudentEmail: 'nirav@gmail.com',
//     StudentImage: 'https://i.pravatar.cc/150?img=1',
//     ActiveCourse: 'React 18 Masterclass',
//     Status: 'Active',
//     StatusBg: '#8BE78B',
//     Progress: '85%',
//     HoursSpent: '12h',
//     Location: 'India',
//   },
//   {
//     StudentID: 1002,
//     StudentName: 'Sunil Joshi',
//     StudentEmail: 'sunil@gmail.com',
//     ActiveCourse: 'Node.js Backend',
//     Status: 'Active',
//     StudentImage: 'https://i.pravatar.cc/150?img=2',
//     StatusBg: '#8BE78B',
//     Progress: '40%',
//     HoursSpent: '5h',
//     Location: 'India',
//   },
//   {
//     StudentID: 1003,
//     StudentName: 'Andrew McDownland',
//     StudentEmail: 'andrew@gmail.com',
//     ActiveCourse: 'Docker & Kubernetes',
//     Status: 'Pending',
//     StudentImage: 'https://i.pravatar.cc/150?img=3',
//     StatusBg: '#FEC90F',
//     Progress: '10%',
//     HoursSpent: '2h',
//     Location: 'USA',
//   },
// ];
