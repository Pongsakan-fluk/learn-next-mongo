import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import { Product } from "../../../../../models/product";

type Params = {
  params: { id: string }
}

//Read data
export async function GET(req: NextRequest, { params }: Params) {
  const { id }= params;

  await connectMongoDB();

  const data = Product.findOne({ _id: id})

  return NextResponse.json(data);
}

//Update data
export async function PUT(req: NextRequest, { params }: Params) {
  const { id }= params;

  return NextResponse.json({"id": id, "methode": "Update"});
}

//Update data
export async function DELETE(req: NextRequest, { params }: Params) {
  const { id }= params;

  return NextResponse.json({"id": id, "methode": "Delete"});
}