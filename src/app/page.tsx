import data from '../../public/data.json';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4'>
      <h1 className='text-left'>Concurso de disfraces</h1>
      <ul className='list-none gap-10 flex flex-col justify-center items-start'>
        {data.map(item => (
          <li key={item.id}>
            <button>
              {item.name} - {item.custom}
              <img
                className='h-auto w-full'
                src={item.image}
                alt={`image of ${item.name}`}
              />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
