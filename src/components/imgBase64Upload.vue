<template>
  <div :style="{ width: width + 'px', height: height + 'px' }" class="img-main-box">
    <div class="file">
      <input accept="image/jpg, image/jpeg, image/png, image/gif" id="cfile" multiple title="点击更换图片" type="file" />
    </div>
    <div :style="{ width: width + 'px', height: height + 'px' }" class="img-border-box">
      <div class="bg-box">
        <img :src="path" v-if="path && path.length > 0" />
        <p class="tip color-999" v-else>
          <i class="el-icon-picture-outline"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import swal from 'sweetalert';
export default {
  name: 'SingleImgUpload',
  data: function() {
    return {
      isSupport: true,
      isCompleted: false,
      allowTypes: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'],
      maxSize: 1024 * 1024
    };
  },
  mounted: function() {
    $('#cfile', this.$el).on('change', this.fileInputChange);
  },
  props: {
    path: String,
    width: {
      type: Number,
      default: 126
    },
    height: {
      type: Number,
      default: 126
    }
  },
  methods: {
    cmdDel: function() {
      this.path = '';
    },
    cmdShowPic: function() {
      $('.viewbox').fadeIn();
    },
    cmdHidePic: function() {
      $('.viewbox').fadeOut(100);
    },
    fileInputChange: function(event) {
      var files = event.target.files;
      if (files.length === 0) {
        return;
      }
      if (files.length > 1) {
        swal('错误', '只能选择一张图片', 'error');
        return;
      }
      var file = files[0];
      if (this.allowTypes.indexOf(file.type) === -1) {
        swal('错误', '图片格式只支持jpg,png,gif', 'error');
        return;
      }
      if (file.size > this.maxSize) {
        swal('错误', '图片大小需在10M内', 'error');
        return;
      }
      var reader = new window.FileReader();
      reader.onload = this.readerLoad;
      reader.readAsDataURL(file);
    },
    readerLoad: function(e) {
      this.isCompleted = true;
      this.$emit('upload-completed', e.target.result);
    }
  }
};
</script>
<style scoped>
.showpic {
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  background: #ffffff;
  height: 20px;
  line-height: 20px;
  padding: 0px 7px;
  font-size: 12px;
  color: #888888;
}
.showpic:hover {
  color: #333333;
}
.img-main-box {
  position: relative;
}

.img-border-box {
  border: 1px solid #eeeeee;
  padding: 2px;
  float: left;
}
.img-mask {
}

.img-mask:hover {
  opacity: 100;
}

.bg-box {
  background-color: #f5f5f5;
  color: #e5e5e5;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100%;
}

.bg-box > img {
  width: 100%;
  height: 100%;
}

.file {
  border: 0;
  margin-bottom: 0;
  margin-right: 0;
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
  opacity: 0;
}

.file input {
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  opacity: 0;
}
.bg-box .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
}
.bg-box .close:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.file:hover {
  opacity: 100;
}
.img-main-box .viewbox {
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10001;
}
.img-main-box .viewbox .center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.img-main-box .viewbox img {
  height: auto;
  width: auto;
  max-width: 90%;
  display: block;
}
.bg-box .tip {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
</style>
