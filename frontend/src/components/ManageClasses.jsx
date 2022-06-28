import React, { useState } from "react";
import ClassForm from "./ClassForm";
import DeleteButton from "./DeleteButton";

export default function ManageClasses({ classes, buttonClicked }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
  };

  const handleIsDeleting = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Manage Classes</h1>
      <div>
        {classes.map((classObj, index) => (
          <div key={index}>
            <div>{classObj.className}</div>
            <div>
              <button onClick={() => handleIsEditing()}>Edit</button>
              <button onClick={() => handleIsDeleting()}>Delete</button>
            </div>
            {isEditing && (
              <ClassForm
                handleIsEditing={handleIsEditing}
                buttonClicked={buttonClicked}
                route={`/classes/${classObj._id}`}
                axiosApi="put"
              />
            )}
            {isDeleting && (
              <DeleteButton
                route={`/classes/${classObj._id}`}
                handleShow={handleIsDeleting}
                buttonClicked={buttonClicked}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

//       <ul>
//         {classes.map((classItem) => (
//           <li key={classItem._id}>
//             <div>{classItem.className}</div>
//             <div>
//               <button onClick={() => handleIsEditing()}>Edit</button>
//               <button onClick={() => handleIsDeleting()}>Delete</button>
//             </div>
//             {isDeleting && (
//               <DeleteButton
//                 class={classItem}
//                 route={`classes/${classItem._id}`}
//                 handleIsDeleting={handleIsDeleting}
//                 buttonClicked={buttonClicked}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
