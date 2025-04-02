import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

/**
 * ******************************************************************************
 * PURPOSE OF API :: Save Lead & Send Email via Python
 * ******************************************************************************
 */

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type");
    let body = await (contentType && contentType.includes("application/json") ? req.json() : {});

    // Call Python script to send email
    let emailResponse = await sendEmail(body);

    return NextResponse.json({ emailResponse }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ status: 500, error: error.message }, { status: 500 });
  }
}


// Function to call Python script with arguments
async function sendEmail(data) {
    return new Promise((resolve) => {
      const scriptPath = path.join(process.cwd(), "scripts/send_mail.py");
  
      // Extract fields from data and pass them as arguments
      const { subject, email, company, manager } = data;
  
      const pythonProcess = spawn("python3", [scriptPath, subject, email, company, manager]);
  
      let output = "";
      let errorOutput = "";
  
      pythonProcess.stdout.on("data", (data) => {
        output += data.toString();
      });
  
      pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString();
      });
  
      pythonProcess.on("close", (code) => {
        if (code === 0) {
          resolve({ status: 200, message: "Email sent successfully!", output });
        } else {
          resolve({ status: 500, message: "Error executing Python script", error: errorOutput });
        }
      });
    });
  }