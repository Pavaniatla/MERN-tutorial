// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "axios";

// // // // // // // // // const StudentsTable = () => {
// // // // // // // // //   const [students, setStudents] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchStudents = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const response = await axios.get("http://localhost:4000/allStudents");
// // // // // // // // //         console.log("Fetched Students:", response.data); // Log the fetched students
// // // // // // // // //         setStudents(response.data); // Update state with fetched students
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error fetching students:", error);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false); // Ensure loading state is updated
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchStudents();
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mt-4">
// // // // // // // // //       <h3>Students List</h3>
// // // // // // // // //       {loading ? (
// // // // // // // // //         <p>Loading students...</p>
// // // // // // // // //       ) : students.length > 0 ? (
// // // // // // // // //         <table className="table table-striped">
// // // // // // // // //           <thead>
// // // // // // // // //             <tr>
// // // // // // // // //               <th>Name</th>
// // // // // // // // //               <th>Roll Number</th>
// // // // // // // // //               <th>Java</th>
// // // // // // // // //               <th>CPP</th>
// // // // // // // // //               <th>Python</th>
// // // // // // // // //               <th>GenAI</th>
// // // // // // // // //               <th>FSD</th>
// // // // // // // // //             </tr>
// // // // // // // // //           </thead>
// // // // // // // // //           <tbody>
// // // // // // // // //             {students.map((student) => (
// // // // // // // // //               <tr key={student.rollNo}>
// // // // // // // // //                 <td>{student.name}</td>
// // // // // // // // //                 <td>{student.rollNo}</td>
// // // // // // // // //                 {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // // // // // // //                   <td key={subject}>{student.scores[subject] || 0}</td>
// // // // // // // // //                 ))}
// // // // // // // // //               </tr>
// // // // // // // // //             ))}
// // // // // // // // //           </tbody>
// // // // // // // // //         </table>
// // // // // // // // //       ) : (
// // // // // // // // //         <p>No students found.</p>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default StudentsTable;
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import axios from "axios";

// // // // // // // // const StudentsTable = () => {
// // // // // // // //   const [students, setStudents] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchStudents = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await axios.get("http://10.11.24.255:4000/allStudents");
// // // // // // // //         console.log("Fetched Students:", response.data);
// // // // // // // //         setStudents(response.data);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching students:", error);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchStudents();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className="container mt-4">
// // // // // // // //       <h3>Students List</h3>
// // // // // // // //       {loading ? (
// // // // // // // //         <p>Loading students...</p>
// // // // // // // //       ) : students.length > 0 ? (
// // // // // // // //         <table className="table table-striped">
// // // // // // // //           <thead>
// // // // // // // //             <tr>
// // // // // // // //               <th>Name</th>
// // // // // // // //               <th>Roll Number</th>
// // // // // // // //               <th>Java</th>
// // // // // // // //               <th>CPP</th>
// // // // // // // //               <th>Python</th>
// // // // // // // //               <th>GenAI</th>
// // // // // // // //               <th>FSD</th>
// // // // // // // //             </tr>
// // // // // // // //           </thead>
// // // // // // // //           <tbody>
// // // // // // // //             {students.map((student) => (
// // // // // // // //               <tr key={student.rollNo}>
// // // // // // // //                 <td>{student.name}</td>
// // // // // // // //                 <td>{student.rollNo}</td>
// // // // // // // //                 {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // // // // // //                   <td key={subject}>{student.scores[subject] || 0}</td>
// // // // // // // //                 ))}
// // // // // // // //               </tr>
// // // // // // // //             ))}
// // // // // // // //           </tbody>
// // // // // // // //         </table>
// // // // // // // //       ) : (
// // // // // // // //         <p>No students found.</p>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default StudentsTable;
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import axios from "axios";

// // // // // // // const StudentsTable = () => {
// // // // // // //   const [students, setStudents] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchStudents = async () => {
// // // // // // //       try {
// // // // // // //         const response = await axios.get("http://localhost:4000/allStudents");
// // // // // // //         setStudents(response.data);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching students:", error);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchStudents();
// // // // // // //   }, []);

// // // // // // //   const deleteStudent = async (rollNo) => {
// // // // // // //     try {
// // // // // // //       const response = await axios.delete(`http://localhost:4000/student/${rollNo}`);
// // // // // // //       alert(response.data.message);
// // // // // // //       setStudents(students.filter(student => student.rollNo !== rollNo)); // Remove student from the list
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error deleting student:", error);
// // // // // // //       alert("Failed to delete student.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container mt-4">
// // // // // // //       <h3>Students List</h3>
// // // // // // //       {loading ? (
// // // // // // //         <p>Loading students...</p>
// // // // // // //       ) : students.length > 0 ? (
// // // // // // //         <table className="table table-striped">
// // // // // // //           <thead>
// // // // // // //             <tr>
// // // // // // //               <th>Name</th>
// // // // // // //               <th>Roll Number</th>
// // // // // // //               <th>Java</th>
// // // // // // //               <th>CPP</th>
// // // // // // //               <th>Python</th>
// // // // // // //               <th>GenAI</th>
// // // // // // //               <th>FSD</th>
// // // // // // //               <th>Action</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {students.map((student) => (
// // // // // // //               <tr key={student.rollNo}>
// // // // // // //                 <td>{student.name}</td>
// // // // // // //                 <td>{student.rollNo}</td>
// // // // // // //                 {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // // // // //                   <td key={subject}>{student.scores[subject] || 0}</td>
// // // // // // //                 ))}
// // // // // // //                 <td>
// // // // // // //                   <button
// // // // // // //                     className="btn btn-danger"
// // // // // // //                     onClick={() => deleteStudent(student.rollNo)}
// // // // // // //                   >
// // // // // // //                     Delete
// // // // // // //                   </button>
// // // // // // //                 </td>
// // // // // // //               </tr>
// // // // // // //             ))}
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       ) : (
// // // // // // //         <p>No students found.</p>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default StudentsTable;
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "axios";

// // // // // // const StudentsTable = () => {
// // // // // //   const [students, setStudents] = useState([]);
// // // // // //   const [editRow, setEditRow] = useState(null); // Track the row being edited
// // // // // //   const [editedScores, setEditedScores] = useState({}); // Track scores while editing

// // // // // //   // Fetch all students
// // // // // //   useEffect(() => {
// // // // // //     const fetchStudents = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get("http://10.11.24.255:4000/allStudents");
// // // // // //         setStudents(response.data);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching students:", error);
// // // // // //       }
// // // // // //     };
// // // // // //     fetchStudents();
// // // // // //   }, []);

// // // // // //   // Handle clicking the "Update" button
// // // // // //   const handleEdit = (rollNo, scores) => {
// // // // // //     setEditRow(rollNo); // Set the row to edit mode
// // // // // //     setEditedScores(scores); // Pre-fill scores for editing
// // // // // //   };

// // // // // //   // Handle changes in score input fields
// // // // // //   const handleScoreChange = (subject, value) => {
// // // // // //     setEditedScores({
// // // // // //       ...editedScores,
// // // // // //       [subject]: parseInt(value, 10) || 0, // Ensure scores are numbers
// // // // // //     });
// // // // // //   };

// // // // // //   // Handle clicking the "Submit" button
// // // // // //   const handleSubmit = async (rollNo) => {
// // // // // //     try {
// // // // // //       const updatedStudent = {
// // // // // //         scores: editedScores, // Send updated scores to the backend
// // // // // //       };
// // // // // //       await axios.put(`http://10.11.24.255:4000/student/${rollNo}`, updatedStudent);
// // // // // //       alert("Student scores updated successfully.");
// // // // // //       setEditRow(null); // Exit edit mode
// // // // // //       refreshTable(); // Refresh the table to reflect updates
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating student:", error);
// // // // // //       alert("Failed to update student.");
// // // // // //     }
// // // // // //   };

// // // // // //   // Refresh the table data
// // // // // //   const refreshTable = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get("http://10.11.24.255:4000/allStudents");
// // // // // //       setStudents(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error refreshing table:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h3>Students Table</h3>
// // // // // //       <table className="table table-bordered">
// // // // // //         <thead>
// // // // // //           <tr>
// // // // // //             <th>Name</th>
// // // // // //             <th>Roll Number</th>
// // // // // //             <th>Java</th>
// // // // // //             <th>CPP</th>
// // // // // //             <th>Python</th>
// // // // // //             <th>GenAI</th>
// // // // // //             <th>FSD</th>
// // // // // //             <th>Action</th>
// // // // // //           </tr>
// // // // // //         </thead>
// // // // // //         <tbody>
// // // // // //           {students.map((student) => (
// // // // // //             <tr key={`row${student.rollNo}`} id={`row${student.rollNo}`}>
// // // // // //               <td>{student.name}</td>
// // // // // //               <td>{student.rollNo}</td>
// // // // // //               {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // // // //                 <td key={subject}>
// // // // // //                   {editRow === student.rollNo ? (
// // // // // //                     <input
// // // // // //                       type="number"
// // // // // //                       className="form-control"
// // // // // //                       value={editedScores[subject]}
// // // // // //                       onChange={(e) => handleScoreChange(subject, e.target.value)}
// // // // // //                     />
// // // // // //                   ) : (
// // // // // //                     student.scores[subject]
// // // // // //                   )}
// // // // // //                 </td>
// // // // // //               ))}
// // // // // //               <td>
// // // // // //                 {editRow === student.rollNo ? (
// // // // // //                   <button
// // // // // //                     className="btn btn-success"
// // // // // //                     onClick={() => handleSubmit(student.rollNo)}
// // // // // //                   >
// // // // // //                     Submit
// // // // // //                   </button>
// // // // // //                 ) : (
// // // // // //                   <button
// // // // // //                     className="btn btn-primary"
// // // // // //                     id={`update${student.rollNo}`}
// // // // // //                     onClick={() => handleEdit(student.rollNo, student.scores)}
// // // // // //                   >
// // // // // //                     Update
// // // // // //                   </button>
// // // // // //                 )}
// // // // // //               </td>
// // // // // //             </tr>
// // // // // //           ))}
// // // // // //         </tbody>
// // // // // //       </table>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default StudentsTable;
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // const StudentsTable = () => {
// // // // //   const [students, setStudents] = useState([]);
// // // // //   const [editRow, setEditRow] = useState(null); // Track the row being edited
// // // // //   const [editedScores, setEditedScores] = useState({}); // Track scores while editing

// // // // //   // Fetch all students
// // // // //   useEffect(() => {
// // // // //     const fetchStudents = async () => {
// // // // //       try {
// // // // //         const response = await axios.get("http://10.11.24.255:4000/allStudents");
// // // // //         setStudents(response.data);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching students:", error);
// // // // //       }
// // // // //     };
// // // // //     fetchStudents();
// // // // //   }, []);

// // // // //   // Handle clicking the "Update" button
// // // // //   const handleEdit = (rollNo, scores) => {
// // // // //     setEditRow(rollNo); // Set the row to edit mode
// // // // //     setEditedScores(scores); // Pre-fill scores for editing
// // // // //   };

// // // // //   // Handle changes in score input fields
// // // // //   const handleScoreChange = (subject, value) => {
// // // // //     setEditedScores({
// // // // //       ...editedScores,
// // // // //       [subject]: parseInt(value, 10) || 0, // Ensure scores are numbers
// // // // //     });
// // // // //   };

// // // // //   // Handle clicking the "Submit" button
// // // // //   const handleSubmit = async (rollNo) => {
// // // // //     try {
// // // // //       const updatedStudent = {
// // // // //         scores: editedScores, // Send updated scores to the backend
// // // // //       };
// // // // //       await axios.put(`http://10.11.24.255:4000/student/${rollNo}`, updatedStudent);
// // // // //       alert("Student updated successfully.");
// // // // //       setEditRow(null); // Exit edit mode
// // // // //       refreshTable(); // Refresh the table to reflect updates
// // // // //     } catch (error) {
// // // // //       console.error("Student not found:", error);
// // // // //       alert("Failed to update student.");
// // // // //     }
// // // // //   };

// // // // //   // Handle deleting a student
// // // // //   const handleDelete = async (rollNo) => {
// // // // //     // if (!window.confirm("Are you sure you want to delete this student?")) {
// // // // //     //   return;
// // // // //     // }
// // // // //     try {
// // // // //       await axios.delete(`http://10.11.24.255:4000/student/${rollNo}`);
// // // // //       alert("Student deleted successfully.");
// // // // //       refreshTable(); // Refresh the table after deletion
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting student:", error);
// // // // //       alert("Failed to delete student.");
// // // // //     }
// // // // //   };

// // // // //   // Refresh the table data
// // // // //   const refreshTable = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("http://10.11.24.255:4000/allStudents");
// // // // //       setStudents(response.data);
// // // // //     } catch (error) {
// // // // //       console.error("Error refreshing table:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h3>Students Table</h3>
// // // // //       <table className="table table-bordered">
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th>Name</th>
// // // // //             <th>Roll Number</th>
// // // // //             <th>Java</th>
// // // // //             <th>CPP</th>
// // // // //             <th>Python</th>
// // // // //             <th>GenAI</th>
// // // // //             <th>FSD</th>
// // // // //             <th>Actions</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {students.map((student) => (
// // // // //             <tr key={`row${student.rollNo}`} id={`row${student.rollNo}`}>
// // // // //               <td>{student.name}</td>
// // // // //               <td>{student.rollNo}</td>
// // // // //               {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // // //                 <td key={subject}>
// // // // //                   {editRow === student.rollNo ? (
// // // // //                     <input
// // // // //                       type="number"
// // // // //                       className="form-control"
// // // // //                       value={editedScores[subject]}
// // // // //                       onChange={(e) => handleScoreChange(subject, e.target.value)}
// // // // //                     />
// // // // //                   ) : (
// // // // //                     student.scores[subject]
// // // // //                   )}
// // // // //                 </td>
// // // // //               ))}
// // // // //               <td>
// // // // //                 {editRow === student.rollNo ? (
// // // // //                   <button
// // // // //                     className="btn btn-success me-2"
// // // // //                     onClick={() => handleSubmit(student.rollNo)}
// // // // //                   >
// // // // //                     Submit
// // // // //                   </button>
// // // // //                 ) : (
// // // // //                   <button
// // // // //                     className="btn btn-primary me-2"
// // // // //                     id={`update${student.rollNo}`}
// // // // //                     onClick={() => handleEdit(student.rollNo, student.scores)}
// // // // //                   >
// // // // //                     Update
// // // // //                   </button>
// // // // //                 )}
// // // // //                 <button
// // // // //                   className="btn btn-danger"
// // // // //                   id={`delete${student.rollNo}`}
// // // // //                   onClick={() => handleDelete(student.rollNo)}
// // // // //                 >
// // // // //                   Delete
// // // // //                 </button>
// // // // //               </td>
// // // // //             </tr>
// // // // //           ))}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default StudentsTable;
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // const StudentsTable = () => {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [editRow, setEditRow] = useState(null);
// // // //   const [editScores, setEditScores] = useState({});

// // // //   // Fetch students with GPA
// // // //   useEffect(() => {
// // // //     const fetchStudents = async () => {
// // // //       try {
// // // //         const response = await axios.get("http://localhost:4000/studentsGPA");
// // // //         setStudents(response.data);
// // // //       } catch (error) {
// // // //         console.error("Error fetching students:", error);
// // // //         alert("Failed to fetch students.");
// // // //       }
// // // //     };

// // // //     fetchStudents();
// // // //   }, []);

// // // //   const handleEdit = (rollNo, scores) => {
// // // //     setEditRow(rollNo);
// // // //     setEditScores(scores);
// // // //   };

// // // //   const handleScoreChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditScores({
// // // //       ...editScores,
// // // //       [name]: parseInt(value, 10),
// // // //     });
// // // //   };

// // // //   const handleUpdate = async (rollNo) => {
// // // //     try {
// // // //       await axios.put(`http://localhost:4000/student/${rollNo}`, {
// // // //         scores: editScores,
// // // //       });
// // // //       alert("Student updated successfully!");
// // // //       setEditRow(null);
// // // //       window.location.reload(); // Refresh the table
// // // //     } catch (error) {
// // // //       console.error("Error updating student:", error);
// // // //       alert("Failed to update student.");
// // // //     }
// // // //   };

// // // //   const handleDelete = async (rollNo) => {
// // // //     try {
// // // //       await axios.delete(`http://localhost:4000/student/${rollNo}`);
// // // //       alert("Student deleted successfully!");
// // // //       setStudents(students.filter((student) => student.rollNo !== rollNo));
// // // //     } catch (error) {
// // // //       console.error("Error deleting student:", error);
// // // //       alert("Failed to delete student.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h3>Students Table</h3>
// // // //       <table className="table">
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Name</th>
// // // //             <th>Roll Number</th>
// // // //             <th>GPA</th>
// // // //             <th>Java</th>
// // // //             <th>CPP</th>
// // // //             <th>Python</th>
// // // //             <th>GenAI</th>
// // // //             <th>FSD</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {students.map((student) => (
// // // //             <tr key={`row${student.rollNo}`}>
// // // //               <td>{student.name}</td>
// // // //               <td>{student.rollNo}</td>
// // // //               <td>{student.gpa}</td>
// // // //               {editRow === student.rollNo ? (
// // // //                 ["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // //                   <td key={subject}>
// // // //                     <input
// // // //                       type="number"
// // // //                       name={subject}
// // // //                       value={editScores[subject]}
// // // //                       onChange={handleScoreChange}
// // // //                       className="form-control"
// // // //                     />
// // // //                   </td>
// // // //                 ))
// // // //               ) : (
// // // //                 ["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // // //                   <td key={subject}>{student.scores[subject]}</td>
// // // //                 ))
// // // //               )}
// // // //               <td>
// // // //                 {editRow === student.rollNo ? (
// // // //                   <>
// // // //                     <button
// // // //                       className="btn btn-success btn-sm me-2"
// // // //                       onClick={() => handleUpdate(student.rollNo)}
// // // //                     >
// // // //                       Submit
// // // //                     </button>
// // // //                     <button
// // // //                       className="btn btn-secondary btn-sm"
// // // //                       onClick={() => setEditRow(null)}
// // // //                     >
// // // //                       Cancel
// // // //                     </button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <button
// // // //                       id={`update${student.rollNo}`}
// // // //                       className="btn btn-primary btn-sm me-2"
// // // //                       onClick={() => handleEdit(student.rollNo, student.scores)}
// // // //                     >
// // // //                       Update
// // // //                     </button>
// // // //                     <button
// // // //                       id={`delete${student.rollNo}`}
// // // //                       className="btn btn-danger btn-sm"
// // // //                       onClick={() => handleDelete(student.rollNo)}
// // // //                     >
// // // //                       Delete
// // // //                     </button>
// // // //                   </>
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StudentsTable;
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const StudentsTable = () => {
// // //   const [students, setStudents] = useState([]);
// // //   const [editRow, setEditRow] = useState(null);
// // //   const [editScores, setEditScores] = useState({});

// // //   // Fetch students with GPA
// // //   useEffect(() => {
// // //     const fetchStudents = async () => {
// // //       try {
// // //         const response = await axios.get("http://localhost:4000/studentsGPA");
// // //         setStudents(response.data);
// // //       } catch (error) {
// // //         console.error("Error fetching students:", error);
// // //         alert("Failed to fetch students.");
// // //       }
// // //     };

// // //     fetchStudents();
// // //   }, []);

// // //   const handleEdit = (rollNo, scores) => {
// // //     setEditRow(rollNo);
// // //     setEditScores(scores || {}); // Use an empty object if scores are undefined
// // //   };

// // //   const handleScoreChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setEditScores({
// // //       ...editScores,
// // //       [name]: parseInt(value, 10),
// // //     });
// // //   };

// // //   const handleUpdate = async (rollNo) => {
// // //     try {
// // //       await axios.put(`http://localhost:4000/student/${rollNo}`, {
// // //         scores: editScores,
// // //       });
// // //       alert("Student updated successfully!");
// // //       setEditRow(null);
// // //       window.location.reload(); // Refresh the table
// // //     } catch (error) {
// // //       console.error("Error updating student:", error);
// // //       alert("Failed to update student.");
// // //     }
// // //   };

// // //   const handleDelete = async (rollNo) => {
// // //     try {
// // //       await axios.delete(`http://localhost:4000/student/${rollNo}`);
// // //       alert("Student deleted successfully!");
// // //       setStudents(students.filter((student) => student.rollNo !== rollNo));
// // //     } catch (error) {
// // //       console.error("Error deleting student:", error);
// // //       alert("Failed to delete student.");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h3>Students Table</h3>
// // //       <table className="table">
// // //         <thead>
// // //           <tr>
// // //             <th>Name</th>
// // //             <th>Roll Number</th>
// // //             <th>GPA</th>
// // //             <th>Java</th>
// // //             <th>CPP</th>
// // //             <th>Python</th>
// // //             <th>GenAI</th>
// // //             <th>FSD</th>
// // //             <th>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {students.map((student) => (
// // //             <tr key={`row${student.rollNo}`}>
// // //               <td>{student.name}</td>
// // //               <td>{student.rollNo}</td>
// // //               <td>{student.gpa}</td>
// // //               {editRow === student.rollNo ? (
// // //                 ["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // //                   <td key={subject}>
// // //                     <input
// // //                       type="number"
// // //                       name={subject}
// // //                       value={editScores[subject] || 0} // Default to 0 if undefined
// // //                       onChange={handleScoreChange}
// // //                       className="form-control"
// // //                     />
// // //                   </td>
// // //                 ))
// // //               ) : (
// // //                 ["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
// // //                   <td key={subject}>
// // //                     {student.scores?.[subject] ?? "N/A"} {/* Handle missing scores */}
// // //                   </td>
// // //                 ))
// // //               )}
// // //               <td>
// // //                 {editRow === student.rollNo ? (
// // //                   <>
// // //                     <button
// // //                       className="btn btn-success btn-sm me-2"
// // //                       onClick={() => handleUpdate(student.rollNo)}
// // //                     >
// // //                       Submit
// // //                     </button>
// // //                     <button
// // //                       className="btn btn-secondary btn-sm"
// // //                       onClick={() => setEditRow(null)}
// // //                     >
// // //                       Cancel
// // //                     </button>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <button
// // //                       id={`update${student.rollNo}`}
// // //                       className="btn btn-primary btn-sm me-2"
// // //                       onClick={() => handleEdit(student.rollNo, student.scores)}
// // //                     >
// // //                       Update
// // //                     </button>
// // //                     <button
// // //                       id={`delete${student.rollNo}`}
// // //                       className="btn btn-danger btn-sm"
// // //                       onClick={() => handleDelete(student.rollNo)}
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default StudentsTable;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentsTable = () => {
//   const [students, setStudents] = useState([]);
//   const [editRow, setEditRow] = useState(null);
//   const [editScores, setEditScores] = useState({});

//   // Fetch students with GPA
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/studentsGPA");
//         console.log(response.data); // Check if scores are present
//         setStudents(response.data);
//       } catch (error) {
//         console.error("Error fetching students:", error);
//         alert("Failed to fetch students.");
//       }
//     };
  
    

//     fetchStudents();
//   }, []);

//   const handleEdit = (rollNo, scores) => {
//     setEditRow(rollNo);
//     setEditScores(scores || {}); // Use an empty object if scores are undefined
//   };

//   const handleScoreChange = (e) => {
//     const { name, value } = e.target;
//     setEditScores({
//       ...editScores,
//       [name]: parseInt(value, 10),
//     });
//   };

//   const handleUpdate = async (rollNo) => {
//     try {
//       const updatedScores = { ...editScores }; // Ensure you're sending the edited scores
//       const response = await axios.put(`http://localhost:4000/student/${rollNo}`, {
//         scores: updatedScores,
//       });
  
//       if (response.status === 200) {
//         alert("Marks updated successfully");
//         const updatedStudent = response.data.updatedStudent;
  
//         // Update the frontend state with the new data
//         setStudents((prevStudents) =>
//           prevStudents.map((student) =>
//             student.rollNo === rollNo ? { ...student, ...updatedStudent } : student
//           )
//         );
  
//         setEditRow(null); // Exit edit mode
//       } else {
//         alert("Failed to update marks");
//       }
//     } catch (error) {
//       console.error("Error updating marks:", error);
//       alert("Failed to update marks. Please try again.");
//     }
//   };
  

//   const handleDelete = async (rollNo) => {
//     try {
//       await axios.delete(`http://localhost:4000/student/${rollNo}`);
//       alert("Student deleted successfully!");
//       setStudents(students.filter((student) => student.rollNo !== rollNo));
//     } catch (error) {
//       console.error("Error deleting student:", error);
//       alert("Failed to delete student.");
//     }
//   };

//   return (
//     <div>
//       <h3>Students List</h3>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Roll Number</th>
//             {/* <th>GPA</th> */}
//             <th>Java</th>
//             <th>CPP</th>
//             <th>Python</th>
//             <th>GenAI</th>
//             <th>FSD</th>
//             {/* <th>Actions</th> */}
//           </tr>
//         </thead>
//         <tbody>
//   {students.map((student) => (
//     <tr key={`row${student.rollNo}`}>
//       <td>{student.name}</td>
//       <td>{student.rollNo}</td>
//       {/* <td>{student.gpa}</td> */}
//       {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
//         <td key={subject}>
//           {editRow === student.rollNo ? (
//             <input
//               type="number"
//               value={editScores[subject] || ""}
//               onChange={(e) =>
//                 setEditScores({ ...editScores, [subject]: e.target.value })
//               }
//             />
//           ) : (
//             student.scores?.[subject] ?? "N/A"
//           )}
//         </td>
//       ))}
//       {/* <td>
//         {editRow === student.rollNo ? (
//           <>
//             <button
//               className="btn btn-success btn-sm me-2"
//               onClick={() => handleUpdate(student.rollNo)}
//             >
//               Submit
//             </button>
//             <button
//               className="btn btn-secondary btn-sm"
//               onClick={() => setEditRow(null)}
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <>
//             <button
//               className="btn btn-primary btn-sm me-2"
//               onClick={() => handleEdit(student.rollNo, student.scores)}
//             >
//               Update
//             </button>
//             <button
//               className="btn btn-danger btn-sm"
//               onClick={() => handleDelete(student.rollNo)}
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </td> */}
//     </tr>
//   ))}
// </tbody>

//       </table>
//     </div>
//   );
// };

// export default StudentsTable;


import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [editRow, setEditRow] = useState(null); 
  const [updatedScores, setUpdatedScores] = useState({}); 

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/allstudents", {
        headers: {
          'ngrok-skip-browser-warning': true,
        },
      });
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleUpdateClick = (rollNo, scores) => {
    setEditRow(rollNo);
    setUpdatedScores(scores);
  };

  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    setUpdatedScores((prevScores) => ({
      ...prevScores,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmitClick = async (rollNo) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/student/${rollNo}`,
        { scores: updatedScores },
        {
          headers: {
            'ngrok-skip-browser-warning': true,
          },
        }
      );
      alert(response.data.message);
      setEditRow(null);
      fetchStudents(); 
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }
  };

  const handleDelete = async (rollNo) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/student/${rollNo}`
      );
      alert("Student deleted successfully");
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Students List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Java</th>
            <th>CPP</th>
            <th>Python</th>
            <th>GenAI</th>
            <th>FSD</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo} id={`row${student.rollNo}`}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
                <td key={subject}>
                  {editRow === student.rollNo ? (
                    <input
                      type="number"
                      name={subject}
                      className="form-control"
                      value={updatedScores[subject]}
                      onChange={handleScoreChange}
                    />
                  ) : (
                    student.scores[subject]
                  )}
                </td>
              ))}
              <td>
                {editRow === student.rollNo ? (
                  <button
                    id={`submit${student.rollNo}`}
                    className="btn btn-success"
                    onClick={() => handleSubmitClick(student.rollNo)}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    id={`update${student.rollNo}`}
                    className="btn btn-primary"
                    onClick={() => handleUpdateClick(student.rollNo, student.scores)}
                  >
                    Update
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(student.rollNo)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;