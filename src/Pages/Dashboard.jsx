import AddResume from "@/components/AddResume"

export const Dashboard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p className="font-normal">Start Creating AI resume to your next job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <AddResume />
      </div>
    </div>
  )
}
