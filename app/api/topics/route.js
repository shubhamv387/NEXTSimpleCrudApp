import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/Topic';

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: 'Topic created' }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    console.log(error.message);
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');

  await connectMongoDB();
  await Topic.findByIdAndDelete(id);

  return NextResponse.json({ message: 'Topic Deleted' }, { status: 200 });
}
