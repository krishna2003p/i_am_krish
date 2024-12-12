/* ******************************************************************************
|               PURPOSE OF API :: Create New Contacts              |
| *******************************************************************************
|
| 1. POST () :- Function Responsible For Create New Contacts.
|
*/

import { NextResponse } from "next/server";
import prisma from "../../../../utils/prismadb";



/**
**********************************************************************
*               This is Parent Function                               |
* *********************************************************************/
export async function POST(req){
    try{
        
        const contentType = req.headers.get("content-type") 
        let body = await (contentType && contentType.includes("application/json") ? req.json() : {});
        
        let response = await createContact(body)
        return NextResponse.json(response,{status:response.status})
        }
    catch(error){
        console.log("Error",error);
        return NextResponse.json({status:500, error:error.message},{status:500});
    }
    finally{
        prisma.$disconnect();
    }
}

async function createContact(req){
    let name = req?.name
    let email = req?.email
    let comment = req?.message
    let mobile = req?.mobile

    await prisma.users.create({data:{name,email,comment,mobile}})

    return({status:200, message:"Contact successfully created"})
}