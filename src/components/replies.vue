<template>
  <div v-for="reply in replies" :key="reply.id">
    <div class="chat">
      <div class="chat__details">
        <profile :user="{ ...reply.user, date: reply.date }" />
        <p class="content-text">
          <span> @{{ reply.replyingTo }}</span> {{ reply.content }}
        </p>
      </div>
      <div class="chat__buttons">
        <counter
          :count="reply.score"
          type="replyCount"
          :replyId="reply.id"
          :id="commentId"
        />
        <div class="desktop__btn__wrapper-mobile">
          <c-button
            v-if="reply.user.username !== currentUser.username"
            variant="secondary"
            class="button__mobile"
            reply
            @click="handleReplyClick(reply.id, reply.user.username)"
            >Reply</c-button
          >
          <div
            class="reply__delete--btns-mobile"
            v-if="reply.user.username === currentUser.username"
          >
            <c-button
              @click="handleDeleteClick(reply.id)"
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
              @click="editReply = reply.id"
              >Edit</c-button
            >
          </div>
        </div>
      </div>
      <div class="desktop__btn__wrapper">
        <c-button
          v-if="reply.user.username !== currentUser.username"
          variant="secondary"
          class="button__desktop"
          reply
          @click="handleReplyClick(reply.id, reply.user.username)"
          >Reply</c-button
        >
        <div
          class="reply__delete--btns"
          v-if="reply.user.username === currentUser.username"
        >
          <c-button
            variant="secondary"
            class="button__desktop delete-btn"
            deleteIcon
            @click="handleDeleteClick(reply.id)"
            >Delete</c-button
          >
          <c-button
            variant="secondary"
            class="button__desktop"
            edit-btn
            editIcon
            @click="editReply = reply.id"
            >Edit</c-button
          >
        </div>
      </div>
    </div>
    <div v-if="editReply === reply.id" style="margin-top: 10px">
      <c-reply-message
        @sendReplyMessage="(val) => editReplyMessage(val, reply.id)"
        :btnType="update"
      ></c-reply-message>
    </div>
    <div v-if="replyTo === reply.id" style="margin-top: 10px">
      <c-reply-message
        @sendReplyMessage="(val) => sendReplyMessage(val)"
        btnType="Reply"
        :btnLoading="btnLoading"
      ></c-reply-message>
    </div>
    <c-modal
      :show="showDelModal"
      @cancel="closeDeleteModal()"
      @remove="deleteReply"
    ></c-modal>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Counter from "./Counter.vue";
import CButton from "./Button.vue";
import CReplyMessage from "./ReplyMessage.vue";
import CModal from "./Modal.vue";
export default {
  components: {
    Profile,
    Counter,
    CButton,
    CReplyMessage,
    CModal,
  },
  props: {
    replies: {
      type: Array,
    },
    currentUser: {
      type: Object,
    },
    commentId: {
      type: String,
    },
  },
  data: () => ({
    replyTo: false,
    showDelModal: false,
    editReply: false,
    replyingTo: "",
    replyId: "",
    reply: "Reply",
    update: "UPDATE",
  }),
  computed: {
    btnLoading() {
      return this.$store.state.btnLoading;
    },
  },
  methods: {
    handleReplyClick(id, username) {
      this.replyTo = id;
      this.replyingTo = username;
    },
    handleDeleteClick(id) {
      this.showDelModal = true;
      this.replyId = id;
    },
    closeDeleteModal() {
      this.showDelModal = !this.showDelModal;
    },
    editReplyMessage(val, replyId) {
      this.$store.dispatch("editReplyAction", {
        commentId: this.commentId,
        replyId: replyId,
        content: val,
      });
      val = "";
      this.editReply = false;
    },
    sendReplyMessage(val) {
      const { currentUser } = this;
      const { image, username } = currentUser;
      val !== ""
        ? this.$store.dispatch("pushReplyAction", {
            id: this.commentId,
            reply: {
              id: Math.random().toString(36).substr(2, 9),
              content: val,
              date: Date.now(),
              replyingTo: this.replyingTo,
              score: 0,
              user: {
                image: image,
                username: username,
              },
            },
          })
        : window.alert("Please enter a reply");
      val = "";
      this.replyTo = false;
    },
    deleteReply() {
      const { commentId, replyId } = this;
      this.$store.dispatch("deleteReplyAction", {
        commentId: commentId,
        replyId: replyId,
      });
      this.closeDeleteModal();
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
  .content-text {
    font-size: 16px;
    color: $grayish-blue;
    span {
      font-weight: 500;
      color: $moderate-blue;
    }
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
</style>
