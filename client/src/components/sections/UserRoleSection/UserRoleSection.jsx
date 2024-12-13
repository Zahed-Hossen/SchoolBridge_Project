import React from "react";
import UserRoleCard from "../../common/UserRoleCard.jsx"; // Adjusted path for UserRoleCard
import userRoles from "./UserRolesData.js";
import "./UserRoleSection.css";

const UserRolesSection = () => {
  return (
    <section className="user-roles-section">
      <h2 className="section-heading">Who We Serve</h2>
      <div className="roles-container">
        {userRoles.map((role, index) => (
          <div className="user-role" key={index}>
            <UserRoleCard
              icon={role.icon}
              role={role.role}
              description={role.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserRolesSection;




// import React from "react";
// import UserRoleCard from "../../common/UserRoleCard.jsx"; // Adjusted path for UserRoleCard
// import userRoles from "./UserRolesData.js";
// import "./UserRoleSection.css";

// const UserRolesSection = () => {
//   return (
//     <section className="user-roles-section">
//       <h2 className="section-heading">Who We Serve</h2>
//       <div className="roles-container">
//         {userRoles.map((role, index) => (
//           <UserRoleCard
//             key={index}
//             icon={role.icon}
//             role={role.role}
//             description={role.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default UserRolesSection;