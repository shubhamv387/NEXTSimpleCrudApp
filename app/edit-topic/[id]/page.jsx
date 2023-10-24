import EditTopicForm from '@/components/EditTopicForm';

const getTopicById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch topic');

  return res.json();
};

export default async function EditTopic({ params }) {
  const { id } = params;

  const { topic } = await getTopicById(id);

  return <EditTopicForm id={id} topic={topic} />;
}
