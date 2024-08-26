export default function Card({text, title}:{text: string, title:string}) {
    
  return (
    <div className="bg-[var(--primary)] p-8 rounded-md border-solid border-[var(--secondary)] border-[5px] card">
      <div className="icon">
        <i className="text-2xl fa-solid fa-circle-check"></i>
      </div>
      <h1 className="text-xl p-4">{title}</h1>
      <div className="flex justify-start content">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}
