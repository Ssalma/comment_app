<template>
  <div v-if="loading">
    <div class="loading" v-for="i in 5" :key="i"></div>
  </div>
  <div v-else>
    <div v-for="comment in comments" :key="comment.id">
      <div class="chat">
        <div class="chat__details">
          <profile
            :user="{
              ...comment.user,
              createdAt: comment.createdAt,
              date: comment.date,
            }"
          />
          <p class="content-text">{{ comment.content }}</p>
        </div>
        <div class="chat__buttons">
          <counter :count="comment.score" :id="comment.id" />
          <div class="desktop__btn__wrapper-mobile">
            <c-button
              v-if="comment.user.username !== currentUser.username"
              variant="secondary"
              class="button__mobile"
              reply
              @click="replyTo = comment.id"
              >Reply</c-button
            >
            <div
              class="reply__delete--btns-mobile"
              v-if="comment.user.username === currentUser.username"
            >
              <c-button
                @click="openDelModal(comment.id)"
                variant="secondary"
                class="button__mobile"
                deleteIcon
                >Delete</c-button
              >
              <c-button
                variant="secondary"
                class="button__mobile"
                edit-btn
                editIcon
                @click="editMsg = comment.id"
                >Edit</c-button
              >
            </div>
          </div>
        </div>
        <div class="desktop__btn__wrapper">
          <c-button
            v-if="comment.user.username !== currentUser.username"
            variant="secondary"
            class="button__desktop"
            reply
            @click="replyTo = comment.id"
            >Reply</c-button
          >
          <div
            class="reply__delete--btns"
            v-if="comment.user.username === currentUser.username"
          >
            <c-button
              variant="secondary"
              class="button__desktop delete-btn"
              deleteIcon
              @click="openDelModal(comment.id)"
              >Delete</c-button
            >
            <c-button
              variant="secondary"
              class="button__desktop"
              edit-btn
              editIcon
              @click="editMsg = comment.id"
              >Edit</c-button
            >
          </div>
        </div>
      </div>
      <div v-if="editMsg === comment.id">
        <c-reply-message
          @sendReplyMessage="(val) => editMessage(val, comment.id)"
          :btnType="editMsg === comment.id ? update : Reply"
          @close="closeReply"
        ></c-reply-message>
      </div>
      <div v-if="replyTo === comment.id">
        <c-reply-message
          @sendReplyMessage="(val) => sendReplyMessage(val, comment.id)"
          btnType="Reply"
          :btnLoading="loading"
          @close="closeReply"
        ></c-reply-message>
      </div>
      <div class="replies" v-if="comment.replies.length !== 0">
        <c-replies
          :replies="comment.replies"
          :currentUser="currentUser"
          :commentId="comment.id"
        />
      </div>
    </div>
    <modal
      :show="delMsg"
      @cancel="closeDeleteModal"
      @remove="deleteMessage()"
    ></modal>
  </div>
</template>

//
<script>
import Profile from "./Profile.vue";
import Counter from "./Counter.vue";
import CButton from "./Button.vue";
import CReplies from "./Replies.vue";
import CReplyMessage from "./ReplyMessage.vue";
import Modal from "./Modal.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Profile,
    Counter,
    CButton,
    CReplies,
    CReplyMessage,
    Modal,
  },
  data: () => ({
    replyTo: false,
    editMsg: false,
    delMsg: false,
    currentId: "",
    toUpdate: false,
    update: "UPDATE",
    Reply: "Reply",
    btnLoading: false,
  }),

  mounted() {
    this.$store.dispatch("getCommentsAction");
    this.$store.dispatch("getCurrentUserAction");
  },
  computed: {
    comments() {
      return this.$store.getters.getComments;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    ...mapActions({
      deleteCommentAction: "deleteCommentAction",
      editCommentAction: "editCommentAction",
    }),
    closeDeleteModal() {
      this.delMsg = !this.delMsg;
    },
    closeReply() {
      this.replyTo = !this.replyTo;
      this.editMsg = !this.editMsg;
    },
    deleteMessage() {
      const { currentId } = this;
      this.deleteCommentAction(currentId);
      this.closeDeleteModal();
    },
    openDelModal(id) {
      this.currentId = id;
      this.delMsg = true;
    },
    sendReplyMessage(val, commentId) {
      const findSender = this.comments.find(
        (comment) => comment.id === commentId
      );
      const replyingTo = findSender.user.username;
      const { currentUser } = this;
      const { image, username } = currentUser;
      val !== ""
        ? this.$store.dispatch("pushReplyAction", {
            id: commentId,
            reply: {
              id: Math.random().toString(36).substr(2, 9),
              content: val,
              date: Date.now(),
              replyingTo: replyingTo,
              score: 0,
              user: {
                image: image,
                username: username,
              },
            },
          })
        : window.alert("Please enter a message");
      val = "";
      this.replyTo = false;
    },
    async editMessage(val, id) {
      await this.editCommentAction({ id, content: val });
      this.editMsg = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  background: $white;
  padding: 12px;
  border-radius: 8px;
  // border: 1px solid red;
  margin-bottom: 15px;
  min-height: 130px;
  .content-text {
    font-size: 16px;
    color: $grayish-blue;
  }
  .desktop__btn__wrapper {
    display: none;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
  }
  .desktop__btn__wrapper-mobile {
    display: flex;
  }
  .reply__delete--btns-mobile {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr / max-content auto;
    grid-gap: 20px;
    position: relative;
    .button__mobile {
      display: none;
    }
    &__buttons {
      grid-row: 1;
      margin-top: 0px;
    }

    .desktop__btn__wrapper {
      display: flex;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .reply__delete--btns {
      display: flex;
    }
    .desktop__btn__wrapper-mobile {
      display: none;
    }
  }
}
.replies {
  display: grid;
  justify-self: flex-end;
  grid-gap: 10px;
  border-left: 1px solid rgba(195, 196, 239, 0.6);
  margin: 12px 0;
  padding-left: 12px;
  // border: 1px solid green;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 40px;
  }
}
</style>
