<template>
    <div>
        Login
        <el-icon :size="20">
            <IEpEdit />
        </el-icon>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="账号">
                <el-input v-model="formInline.account" placeholder="账号" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { Login } from "../utils/api.js";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();


const formInline = reactive({
    account: ''
})


const onSubmit = () => {
    console.log("submit");
    Login(formInline).then((res) => {

    console.log(res);
    if ((res.data.ok == 1)) {
      router.push("/");
    }
  });
}
</script>

<style lang="scss" scoped></style>