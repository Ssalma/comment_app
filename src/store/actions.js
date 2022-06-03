import { db } from "../firebase/db";
import firebase from "firebase/app";
import "firebase/firestore";

export const getCommentsAction = async ({ state }) => {
  state.loading = true;
  const dataBase = await db.collection("comments").orderBy("date", "asc");
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
        date: e.data().date,
      };
      state.comments.push(data);
    }
  });
  state.loading = false;
};

export const deleteCommentAction = async ({ state }, id) => {
  const dataBase = await db.collection("comments").doc(id);
  await dataBase.delete();
  state.comments = state.comments.filter((comment) => comment.id !== id);
};

export const deleteReplyAction = async ({ state }, { commentId, replyId }) => {
  const messageRef = await db.collection("comments").doc(commentId);
  const reply = state.comments
    .find((c) => c.id === commentId)
    .replies.find((r) => r.id === replyId);
  await messageRef
    .update({
      replies: firebase.firestore.FieldValue.arrayRemove(reply),
    })
    .then(() => {
      state.comments = state.comments.map((comment) => {
        if (comment.id === commentId) {
          comment.replies = comment.replies.filter(
            (reply) => reply.id !== replyId
          );
        }
        return comment;
      });
    })
    .catch((error) => {
      console.log("Error occured", error);
    });
};

export const updateScoreAction = async (
  { state },
  { id, score, type, replyId }
) => {
  const dataBase = await db.collection("comments").doc(id);
  if (type === "commentCount") {
    await dataBase
      .update({ score })
      .then(() => {
        state.comments = state.comments.map((comment) => {
          if (comment.id === id) {
            comment.score = score;
          }
          return comment;
        });
      })
      .catch((error) => {
        console.log("error occured", error);
      });
  } else if (type === "replyCount") {
    await dataBase
      .update({
        replies: state.comments
          .find((comment) => comment.id === id)
          .replies.map((reply) => {
            if (reply.id === replyId) {
              reply.score = score;
            }
            return reply;
          }),
      })
      .catch((error) => {
        console.log("error occured", error);
      });
  }
};

export const editCommentAction = async ({ state }, { id, content }) => {
  const dataBase = await db.collection("comments").doc(id);
  console.log(content, id);
  await dataBase.update({ content }).catch((error) => {
    console.error("Error updating document: ", error);
  });
  state.comments = state.comments.map((comment) =>
    comment.id === id ? { ...comment, content } : comment
  );
};
export const editReplyAction = async (
  { state },
  { commentId, replyId, content }
) => {
  const messageRef = await db.collection("comments").doc(commentId);
  await messageRef
    .update({
      replies: state.comments
        .find((comment) => comment.id === commentId)
        .replies.map((reply) => {
          if (reply.id === replyId) {
            reply.content = content;
          }
          return reply;
        }),
    })
    .then(() => {
      state.comments = state.comments.map((comment) => {
        if (comment.id === commentId) {
          comment.replies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              reply.content = content;
            }
            return reply;
          });
        }
        return comment;
      });
    })
    .catch((error) => {
      console.log("Error occured", error);
    });
};

export const pushReplyAction = async ({ state }, { id, reply }) => {
  state.btnLoading = true;
  const dataBase = await db.collection("comments").doc(id);
  await dataBase
    .update({
      replies: firebase.firestore.FieldValue.arrayUnion(reply),
    })
    .then(() => {
      state.comments = state.comments.map((comment) => {
        if (comment.id === id) {
          comment.replies.push(reply);
        }
        return comment;
      });
      state.btnLoading = false;
    })
    .catch((error) => {
      console.log("error occured", error);
    });
  state.btnLoading = false;
};

export const getCurrentUserAction = async ({ state }) => {
  state.loading = true;
  const dataBase = await db.collection("currentUser");
  const result = await dataBase.get();
  state.currentUser = result.docs[0].data();
  state.loading = false;
};
