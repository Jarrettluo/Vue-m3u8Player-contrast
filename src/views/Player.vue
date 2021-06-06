<template>
  <div style="padding-top: 30px; width: 100%; height: 360px; position: relative;">
      TEST
    <video
      id="video"
      preload="auto"
      muted
      class="video-js vjs-default-skin"
      style="width: 100%; height: 100%; object-fit: fill"
    >
     <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="application/x-mpegURL" />
    </video>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'videojs-contrib-hls'
export default {
  mounted () {
    this.$nextTick(() => {
      this.getVideo()
    })
  },
  methods: {
    getVideo () {
      videojs('video', {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        controls: false, // 用户是否具有交互的控件
        hls: {
          withCredentials: true
        }
      }, function () {
        this.play()
      })
    }
  }
}
</script>
