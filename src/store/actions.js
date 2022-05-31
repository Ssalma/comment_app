import { db } from "../firebase/db";
export const getCommentsAction = async ({ state }) => {
  const dataBase = await db.collection("comments");
  const result = await dataBase.get();
  await result.forEach((e) => {
    if (!state.comments.some((comment) => comment.id === e.id)) {
      const data = {
        id: e.data().id,
        content: e.data().content,
        user: e.data().user,
        createdAt: e.data().createdAt,
        score: e.data().score,
        replies: e.data().replies,
      };
      state.comments.push(data);
    }
  });
};

export const getCurrentUserAction = async ({ state }) => {
  const dataBase = await db.collection("currentUser");
  const result = await dataBase.get();
  state.currentUser = result.docs[0].data();
  // console.log(state.currentUser);
};
