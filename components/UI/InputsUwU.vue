<template>
  <div class="input">
    <label :for="label">{{ label | toUpperCase }}</label>
    <input
      class="inputfield"
      type="text"
      :name="label"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <span class="separator"> </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
  },
};
</script>

<style scoped>
.input {
  display: inline-block;
}

label {
  display: block;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.inputfield {
  display: block;
  border: none;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 14px;
  margin-top: 10px;
}

*:focus {
  outline-color: transparent;
  outline-style: none;
}

.inputfield:focus + .separator {
  transform: scaleX(1) translateY(-2px);
  opacity: 1;
}

.inputfield::placeholder {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
}

.inputfield::ms-input-placeholder {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.separator {
  margin-top: 5px;
  height: 1px;
  width: 100%;
  background: black;
  display: block;
  transform: scaleX(0) translateY(-2px);
  transform-origin: 50%;
  opacity: 0;
  transition: all 0.15s linear;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
}
</style>
