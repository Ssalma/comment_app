<template>
  <main class="main">
    <div v-for="comment in comments" :key="comment.id" class="chat">
      <section>
        <div class="chat__box">
          <div class="chat__box--counter">
            <div class="chat__box--counter-item">
              <img
                src="@/assets/images/icon-plus.svg"
                alt="icon"
                class=""
                @click="increaseCount(comment.id)"
              />
              <p class="count">{{ comment.score }}</p>
              <img
                src="@/assets/images/icon-minus.svg"
                alt="icon"
                @click="decreaseCount(comment.id)"
              />
            </div>
            <!-- this reply button is for mobile view -->
            <div
              class="edit_delete_buttons-mobile"
              v-if="comment.user.username === currentUser.username"
            >
              <button>
                <span>
                  <img src="../assets/images/icon-delete.svg" alt="" /></span
                >Delete
              </button>
              <button>
                <span><img src="../assets/images/icon-edit.svg" alt="" /></span>
                Edit
              </button>
            </div>
            <button class="reply-mobile" @click="open = comment.id" v-else>
              <img src="@/assets/images/icon-reply.svg" alt="icon" />
              <p>Reply</p>
            </button>
          </div>
          <div class="chat__box--content">
            <div class="chat__box--content-info">
              <div class="profile-wrapper">
                <div class="profile-picture">
                  <img :src="comment.user.image.png" alt="" class="image" />
                </div>
                <p class="name">{{ comment.user.username }}</p>
                <p class="period">{{ comment.createdAt }}</p>
              </div>
              <!-- this is the desktop reply, edit delete, button -->
              <div
                class="edit_delete_buttons"
                v-if="comment.user.username === currentUser.username"
              >
                <button>
                  <span>
                    <img src="../assets/images/icon-delete.svg" alt="" /></span
                  >Delete
                </button>
                <button>
                  <span
                    ><img src="../assets/images/icon-edit.svg" alt=""
                  /></span>
                  Edit
                </button>
              </div>
              <button class="reply" @click="open = comment.id" v-else>
                <img src="../assets/images/icon-reply.svg" alt="icon" />
                Reply
              </button>
            </div>
            <div class="chat__box--content-message">
              <p>
                {{ comment.content }}
              </p>
            </div>
          </div>
        </div>
        <reply-box
          :currentUser="currentUser"
          :open="open === comment.id"
          v-if="comment.id === open"
          @reply="(val) => sendReply(val, comment.id)"
        ></reply-box>
        <div class="replies">
          <replies :replies="comment.replies"></replies>
        </div>
      </section>
      <!-- this the the reply box component -->
    </div>
    <div class="container">
      <div class="reply__box">
        <div class="profile-picture">
          <img :src="currentUser.image.png" alt="icon" class="image" />
          <button class="reply__btn mobile">REPLY</button>
        </div>
        <textarea
          type="text"
          v-model="newComment.content"
          class="message-box"
        />
        <button class="reply__btn" type="submit" @click="reply">REPLY</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import Replies from "./replies.vue";
import ReplyBox from "./reply.vue";

export default {
  name: "HelloWorld",
  components: {
    Replies,
    ReplyBox,
    // names,
  },
  data: () => ({
    open: false,
    show: false,
    target: false,
    name: "amyrobson",
    period: "1 month ago",
    image: null,
    userNames: [],
    newComment: {
      content: "",
      createdAt: new Date(),
      score: 0,
      replies: [],
      user: {},
    },
    comments: [],
    currentUser: {
      image: {
        png: "",
        webp: "",
      },
      username: "",
    },
  }),
  mounted() {
    this.getComments();
    this.getCurrentUser();
    this.returnUsernames();
  },
  watch: {
    target() {},
  },
  computed: {},
  methods: {
    async getComments() {
      await axios
        .get(`http://localhost:3000/comments`)
        .then((response) => (this.comments = response.data));
    },
    getCurrentUser() {
      axios
        .get(`http://localhost:3000/currentUser`)
        .then((response) => (this.currentUser = response.data));
    },
    async reply() {
      const { newComment, currentUser } = this;
      const { createdAt } = newComment;
      const newDate = formatDistanceToNow(createdAt, {
        includeSeconds: true,
      });
      const result = {
        ...newComment,
        createdAt: newDate,
        user: currentUser,
      };
      await axios.post("http://localhost:3000/comments", result, {
        "Content-Type": "application-json",
      });
      this.getComments();
    },
    increaseCount(id) {
      const initial = this.comments.find((item) => {
        item.id === id && item.score++;
      });
      return initial;
    },
    decreaseCount(id) {
      const initial = this.comments.find((item) => {
        item.id === id && item.score--;
      });
      return initial;
    },
    // listen(e) {
    //   console.log(e);
    //   if (e.code === "Digit2") {
    //     this.show = true;
    //     this.returnUsernames();
    //   }
    // },
    returnUsernames() {
      // this.userNames = this.comments.map((comment) => comment.user.username);
      // const otherNames = this.comments.map((comment) =>
      //   comment.replies.map((reply) => reply.user.username)
      // );
      // this.userNames.push(otherNames);
    },
    sendReply(val, id) {
      console.log(val);
      console.log(id);
      const { comments } = this;
      const newReply = comments.find((comment) => {
        comment.id === id && comment.replies.push(val);
      });
      return newReply;
    },
  },
};
</script>

<style scoped lang="scss">
.chat {
  width: 100%;
}
.main {
  height: 100vh;
  overflow: scroll;
  padding: 1rem 2rem 12rem;
  display: grid;
  grid-gap: 4px;
  // position: relative;
}
.replies {
  float: right;
  display: grid;
  grid-row-gap: 10px;
  border-left: 1px solid rgba(103, 114, 126, 0.6);
  padding-left: 38px;
}
.chat__box {
  width: 100%;
  height: auto;
  background: $very-light-grey;
  border-radius: 6px;
  padding: 24px;
  display: grid;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr / max-content auto;
    grid-gap: 24px;
  }
  &--counter {
    grid-row: 2;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      grid-row: 1;
    }
    .reply-mobile {
      display: grid;
      grid: 1fr / repeat(2, max-content);
      align-items: center;
      grid-gap: 5px;
      // display: none;
      border: none;
      cursor: pointer;
      background: transparent;
      color: $moderate-blue;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    &-item {
      background: $light-grey;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 15px;
      width: max-content;
      padding: 8px;
      border-radius: 8px;
      box-sizing: border-box;
      margin-top: 10px;
      width: auto;
      img {
        cursor: pointer;
      }
      @media screen and (min-width: 768px) {
        flex-direction: column;
        margin-top: 0;
        width: 40px;
      }
      .count {
        font-size: 16px;
        font-weight: 400;
        color: $moderate-blue;
      }
    }
  }
  &--content {
    &-info {
      display: flex;
      justify-content: space-between;
      .profile-wrapper {
        display: grid;
        grid: 1fr / repeat(3, max-content);
        align-items: center;
        grid-gap: 10px;
      }
      .profile-picture {
        width: 32px;
        height: 32px;
        .image {
          width: 100%;
          height: 100%;
        }
      }
      .reply {
        grid: 1fr / repeat(2, max-content);
        align-items: center;
        grid-gap: 5px;
        display: none;
        border: none;
        cursor: pointer;
        background: transparent;
        color: $moderate-blue;
        @media screen and (min-width: 768px) {
          display: grid;
        }
      }
      .name {
        font-size: 16px;
        color: $dark-blue;
      }
      .period {
        font-size: 16px;
        color: $grayish-blue;
        font-weight: 400;
      }
    }
    &-message {
      margin-top: 10px;
      p {
        color: $grayish-blue;
        font-size: 16px;
      }
    }
  }
}
.container {
  position: relative;
}
.reply__box {
  width: 100%;
  max-width: 550px;
  height: auto;
  background: $very-light-grey;
  border-radius: 6px;
  padding: 24px;
  display: grid;
  position: fixed;
  bottom: 0rem;
  margin: auto;
  // position: relative;
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr / max-content auto max-content;
    grid-gap: 24px;
    max-width: 650px;
    width: 100%;
  }
  .profile-picture {
    grid-row: 2;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .image {
      width: 32px;
      height: 32px;
    }
    @media screen and (min-width: 768px) {
      grid-row: 1;
      margin-top: 0;
    }
  }
  .message-box {
    border: 1px solid $moderate-blue;
    border-radius: 6px;
    background: transparent;
    width: 100%;
    padding: 10px 24px;
    color: $grayish-blue;
    font-size: 16px;
    font-weight: 400;
    height: 90px;
    @media screen and (min-width: 768px) {
    }
  }
  .reply__btn {
    background: $moderate-blue;
    color: $white;
    border: none;
    border-radius: 6px;
    padding: 0 10px;
    height: 30px;
    display: none;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .mobile {
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
*:focus {
  outline: none;
}
.edit_delete_buttons {
  display: none;
  grid: 1fr / repeat(2, 1fr);
  justify-items: flex-end;
  // border: 1px solid red;
  width: 120px;
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    span {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
  }
}
.edit_delete_buttons-mobile {
  display: grid;
  grid: 1fr / repeat(2, max-content);
  align-items: center;
  grid-gap: 10px;
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    span {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
