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
  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl">Students</h1>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthdate</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student: StudentRecord) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.birthdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentView;
