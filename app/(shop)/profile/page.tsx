import { auth } from "@/auth.config";





export default async function NamePage() {
  const session =  await auth()
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}