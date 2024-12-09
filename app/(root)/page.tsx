import Hello from "../components/Hello";

export default function Home() {
  console.log("What am I? Server or Client Component");
  return (
    <>
      <h1 className="text-3xl">Welcome to NextJS</h1>
      <Hello />
    </>
  );
}
