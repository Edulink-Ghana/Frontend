// MemberDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const MemberDetail = ({ members }) => {
  const { memberId } = useParams();
  const member = members.find((m) => m.fullName === memberId);

  if (!member) {
    return <div>Member not found!</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-8">
        <img
          src={member.picture}
          alt={member.fullName}
          className="max-w-full h-auto rounded-full border-4 p-1 border-[#BF62CD] mx-auto"
          width="120"
        />
        <h2 className="text-3xl font-medium mt-6 mb-4">{member.fullName}</h2>
        <p className="text-lg mb-2">{member.designation}</p>
        <p>{member.bio}</p>
        {/* Add any additional details you'd like to show here */}
      </div>
    </div>
  );
};

export default MemberDetail;
