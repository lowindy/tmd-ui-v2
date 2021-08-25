<template>
  <el-menu :default-active="activeMenu" router :unique-opened="false" :collapse="toggleMenu" :collapse-transition="false">
    <el-menu-item index="/home">
      <svg-icon height="22px" icon-class="home" width="22px" />
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="/orgs">
      <template slot="title">
        <svg-icon height="22px" icon-class="hospital" width="22px" />
        <span slot="title">机构管理</span>
      </template>
      <el-menu-item index="/org">机构管理</el-menu-item>
      <el-menu-item index="/org/dpt">部门管理</el-menu-item>
      <el-menu-item index="/org/user">用户管理</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'menuComponent',
  computed: {
    ...mapGetters(['toggleMenu']),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activePath) {
        return meta.activePath;
      }
      return path;
    }
  }
};
</script>
<style lang="scss">
@import '../assets/css/variables.scss';
.el-menu {
  border-right: 0;
  &.el-menu--popup {
    background-color: $--slide-menu-bg-color;
    padding-top: 0;
  }
  &.el-menu--collapse {
    width: $--slide-menu-minwidth;
  }
  background-color: transparent;
  .el-submenu__icon-arrow {
    margin-top: -8px;
    font-size: 16px;
  }
  .svg-icon {
    margin-right: 15px;
  }
  padding-top: 20px;
  & > li.el-menu-item {
    color: $--slide-menu-textcolor;
    background-color: transparent;
    & > span {
      font-size: 16px;
    }
    &.el-menu-item:hover,
    & .el-menu-item:focus {
      color: $--slide-menu-textcolor-hover;
    }
    &.el-menu-item.is-active,
    &.el-menu-item.is-active,
    &.is-active {
      color: #518be1;
      background-color: $--active-bg-color;
      background-image: $--active-bg-image;
      // box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.08);
    }
  }

  .el-menu-item {
    display: flex;
    align-items: center;
  }
  .el-submenu {
    &.is-active {
      .el-submenu__title {
        background-image: linear-gradient(90deg, rgba(59, 125, 221, 0.1), rgba(59, 125, 221, 0.086) 50%, transparent);
        color: rgba(233, 236, 239, 0.8);
        border-left: 2px solid #3b7ddd;
      }
    }
    .el-menu {
      padding-top: 0px;
      background-color: transparent;
    }
    .el-menu-item {
      padding-left: 55px !important;
    }
    .el-submenu__title {
      color: $--slide-menu-textcolor;
      border-left: 2px solid transparent;
      & > span {
        font-size: 16px;
      }
      &:hover {
        background-color: transparent;
        color: $--slide-menu-textcolor-hover;
      }
    }
  }
}
</style>
