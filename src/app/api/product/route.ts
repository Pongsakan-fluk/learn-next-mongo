import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import { Product } from "../../../../models/product";

//List data  //Arrow function 
export const GET = async () => {
  await connectMongoDB();

  //find and return all data
  const data = Product.find({});

  return NextResponse.json(data);
}

//Create data
export async function POST(req: NextRequest, res: NextResponse) {
  //Convert to jsObject
  const { title, price, description, category, image } = await req.json();
  
  //Connect Database
  await connectMongoDB();
  //Insert to Database
  Product.create({ title, price, description, category, image })

  //Convert to json and return
  return NextResponse.json({title: title, method: "POST"});
}

