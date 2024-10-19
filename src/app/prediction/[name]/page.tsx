
interface Params {
  params: {name: string}
}
export default function Name({params}:Params) {
  return (
    <div>
      {params.name}
    </div>
  );
}
