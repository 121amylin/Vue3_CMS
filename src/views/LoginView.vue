<script setup>
import { reactive, ref } from 'vue'
import { login } from '@/api/login'
// import { Edit } from '@element-plus/icons-vue'
const ruleFormRef = ref()
const form = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [{ required: true, message: '請輸入用戶名', trigger: 'blur' }],
  password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      login(form).then((res) => {
        console.log(res)
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="login-container">
    <el-form :model="form" class="login-form" :rules="rules" ref="ruleFormRef">
      <div class="title-container">
        <h3 class="title">用戶登入</h3>
      </div>
      <el-form-item prop="username">
        <svgIcon name="user" color="#fff" class="svg-container" />
        <!-- <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon> -->
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item prop="password">
        <svgIcon name="password" color="#fff" class="svg-container" />
        <!-- <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon> -->
        <el-input v-model="form.password" />
      </el-form-item>

      <el-button
        class="login-button"
        type="primary"
        @click="submitForm(ruleFormRef)"
        >登入</el-button
      >
    </el-form>
  </div>
</template>

<style lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.el-input__wrapper {
  background-color: transparent !important;
  box-shadow: none;
}
</style>
