export const Cv = {
  skills: ({ id }: { id: string }, args: any, { db }: any) => {
    let cvskill: string[];
    let skillids: string[] = [];
    cvskill = db.cv_skills.filter((cvskill: any) => cvskill.cv === id);
    cvskill.forEach((skillid: any) => {
      skillids.push(skillid.skill); 
    });
    return db.skills.filter((skill: any) => skillids.includes(skill.id));
  },

  user: ({ user }: { user: string }, args: any, { db }: any) => {
    const userByCv = db.users.find((u: any) => u.id === user);
    userByCv.role = userByCv.role === "admin" ? "ADMIN" : "USER"; 
    return userByCv;
  },
};

export const DeletedCv = {
  user: Cv.user,
};
