<script setup>
const props = defineProps({
  buttonStyle: String,
})

const submitHandler = (event) => {
  event.preventDefault()
}
</script>

<template>
  <div class="form__container">
    <!-- <form action="#" class="form">
      <input type="text" name="email" placeholder="Enter your email" class="form__email" />
      <button type="submit" :style="buttonStyle" class="form__submit">Sign Up</button>
    </form>
    <p class="form__caption">
      By clicking Sign Up you're confirming that you agree with our
      <a href="#" class="form__purple">Terms and Conditions</a>
      .
    </p> -->
    <FormKit
      type="form"
      form-class="form form"
      submit-label="Sign Up"
      @submit="submitHandler"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
    >
      <FormKit
        type="email"
        name="email"
        validation="required"
        placeholder="Enter your email"
        :outer-class="'form__email'"
      />
      <FormKit type="submit" :style="buttonStyle" :outer-class="'form__submit'" label="Sign Up" />
    </FormKit>
    <p class="form__caption">
      By clicking Sign Up you're confirming that you agree with our
      <a href="#" class="form__purple">Terms and Conditions</a>
      .
    </p>
  </div>
</template>

<style lang="scss">
.form {
  display: flex;
  column-gap: 1rem;
  // color: #1e313b;
  // flex-wrap: wrap;
  & .formkit-messages {
    display: none;
  }
  &__email {
    flex: 1 1 auto;
    & input {
      color: #1e313b;
      width: 100%;
      font-size: 1rem;
      border-radius: 6px;
      border: 1px solid #000;
      background: #fff;
      padding: toem(10) toem(0) toem(10) toem(24);
      &::placeholder {
        color: #1e313b;
      }
    }
  }
  &__submit {
    // background: #fff;
    flex-shrink: 0;
    & button {
      color: #1e313b;
      font-size: 1rem;
      border-radius: 6px;
      box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
      padding: toem(10) toem(15);
    }
  }
  &__caption {
    font-size: torem(12);
    margin-top: em(16, 12);
  }
  &__purple {
    color: #794eff;
    padding: 0 0 0 1rem;
  }
}
</style>
