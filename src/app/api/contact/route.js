/* ******************************************************************************
|               PURPOSE OF API :: Create New Contacts              |
| *******************************************************************************
|
| 1. POST () :- Function Responsible For Create New Contacts.
|
*/

import { NextResponse } from "next/server";
import prisma from "../../../../utils/prismadb";
import fs from "fs";
import path from "path";



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
    const filePath = path.join(process.cwd(), "public/JSON/Contact-Lead.json");

    // Read existing data
    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      if (fileData) {
        leads = JSON.parse(fileData);
      }
    }

    // Add new lead
    // const newLead = req.body;
    console.log("Request",req);
    leads.push(req);

    // Write updated data back to file
    try {
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf8");
      return { status:200, message: "Lead saved successfully" };
    } catch (error) {
      console.error("Error writing file:", error);
      return {status:500, message: "Failed to save lead" };
    }
}