'use client';

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Title and Description are required.');
      setDescription('');
      setTitle('');
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.refresh();
        router.push('/');
      } else throw new Error('Failed to create topic');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type='text'
        className='border border-slate-500 px-8 py-2'
        placeholder='Topic Title'
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type='text'
        className='border border-slate-500 px-8 py-2'
        placeholder='Topic Description'
      />

      <button
        type='submit'
        className='bg-green-600 font-bold text-white px-6 py-3 w-fit rounded-md hover:bg-green-500 transition-all'
      >
        Add Topic
      </button>
    </form>
  );
}
