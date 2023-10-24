'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EditTopicForm({ id, topic: { title, description } }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newDescription.trim()) {
      alert('Title and Description are required.');
      setNewDescription('');
      setNewTitle('');
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.refresh();
        router.push('/');
      } else throw new Error('Failed to update topic');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type='text'
        className='border border-slate-500 px-8 py-2'
        placeholder='Topic Title'
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type='text'
        className='border border-slate-500 px-8 py-2'
        placeholder='Topic Description'
      />

      <button
        type='submit'
        className='bg-green-600 font-bold text-white px-6 py-3 w-fit rounded-md hover:bg-green-500 transition-all'
      >
        Update Topic
      </button>
    </form>
  );
}
