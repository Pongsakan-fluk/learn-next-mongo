import { NextRequest, NextResponse } from "next/server";
//Connect DB
import { connectMongoDB } from "../../../../lib/mongodb";
//Model Or Table
import { Product } from "../../../../models/product";

//List data  //Arrow function 
export const GET = async () => {
  await connectMongoDB();

  //find and return all data
  const response = await Product.find({});

  return NextResponse.json(response);
}

//Create data
export async function POST(req: NextRequest, res: NextResponse) {
  //Convert to jsObject
  const { title, price, description, category, image } = await req.json();
  
  //Connect Database
  await connectMongoDB();
  //Insert to Database
  const response = await Product.create({ title, price, description, category, image })

  //Convert to json and return
  return NextResponse.json(response);
}

