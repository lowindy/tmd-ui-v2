<template>
  <div class="container" :class="{ 'toggle-menu': toggleMenu }">
    <header class="header flex-r-a">
      <div class="sidebar-toggle" @click="menuToggleAction()"><svg-icon height="26px" icon-class="menu" width="26px" /></div>
      <div class="flex-1"></div>
      <div class="menu-right-btn m-r-15">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="btn-box">
              <el-avatar size="small">管</el-avatar>
              <span class="name">管理员</span>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <aside class="menu-sidebar">
      <div class="logo">
        <div class="tc size-30 color-fff opa-09">一脉香橙</div>
      </div>
      <MenuComponent></MenuComponent>
    </aside>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MenuComponent from './slideMenu';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    MenuComponent,
  },
  computed: {
    ...mapGetters(['toggleMenu']),
  },
  methods: {
    ...mapActions(['menuToggleAction']),
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';
.header {
  position: fixed;
  height: $--header-menu-height;
  left: $--slide-menu-width;
  right: 0;
  top: 0;
  transition: left 0.25s ease-in-out;
  background-color: $--header-menu-bg-color;
  z-index: 99;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.sidebar-toggle {
  cursor: pointer;
  width: 26px;
  height: 26px;
  margin: 0px 15px;
}
.menu-sidebar {
  position: fixed;
  width: $--slide-menu-width;
  height: 100%;
  left: 0;
  bottom: 0;
  top: 0px;
  background-color: $--slide-menu-bg-color;
  background-image: $--slide-menu-bg-image;
  z-index: 98;
  transition: width 0.25s ease-in-out;
  .logo {
    background: #25364d;
    min-height: 70px;
    line-height: 70px;
    letter-spacing: 2px;
  }
}
.content-container {
  position: absolute;
  left: $--slide-menu-width;
  right: 0;
  top: $--header-menu-height;
  background-color: #f4f8f9;
  width: auto;
  transition: left 0.25s ease-in-out;
  height: calc(100vh - #{$--header-menu-height});
  overflow-y: auto;
}
.menu-right-btn {
  * {
    outline: none !important;
  }
  height: $--header-menu-height;
  line-height: $--header-menu-height;
  .name {
    float: right;
    margin-left: 5px;
  }
  .btn-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    float: left;
    height: $--header-menu-height;
    line-height: $--header-menu-height;
    cursor: pointer;
  }
}
.toggle-menu {
  .menu-sidebar {
    width: $--slide-menu-minwidth;
  }
  .content-container,
  .header {
    left: $--slide-menu-minwidth;
  }
  .logo {
    display: none;
  }
}
</style>
