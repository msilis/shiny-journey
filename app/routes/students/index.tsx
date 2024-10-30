import { json, useLoaderData } from "@remix-run/react";
import { StudentRecord } from "~/types/types";

export const loader = async () => {
  const allStudents = await fetch(
    `${process.env.BACKEND_SERVER_ROOT}/students`
  ).then((response) => response.json());
  return json(allStudents);
};

const StudentView = () => {
  const allStudents = useLoaderData<typeof loader>();
  console.log(allStudents);
  return (
    <div>
      <h1>All student should be here</h1>
      {allStudents.map((student: StudentRecord) => {
        return (
          <div key={student.id}>
            <p>{student.first_name}</p>
            <p>{student.last_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StudentView;
