import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-unresolved, import/extensions
import connectMongoDB from '@/libs/mongodb';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Topic from '@/models/Topic';

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();

  await connectMongoDB();

  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: 'topic updated' }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;

  await connectMongoDB();

  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
}
