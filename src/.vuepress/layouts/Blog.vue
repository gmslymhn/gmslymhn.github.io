<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog";
</script>

<template>
  <Blog>
    <!-- 自定义 heroInfo 插槽 -->
    <template #heroInfo>
      <div class="hero-info">
        <h3>GM博客</h3>
        <p class="tagline typing-effect">每天都要有好心情吖~~ ✨</p>
      </div>
    </template>
  </Blog>
</template>

<style scoped>
.hero-info {
  text-align: center;
  margin: 1rem 0;
}
.hero-info h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}
.tagline {
  font-size: 1.2rem;
  color: var(--text-color-light);
}
.typing-effect {
  width: fit-content;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--theme-color); /* 光标效果 */
  animation:
      typing 3s steps(20, end),
      blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--theme-color); }
}
</style>
