<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="footer-name">Juan Francisco Seijas</p>
      <div class="social-links">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="linkedinIcon" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="githubIcon" alt="GitHub" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      linkedinIcon: require("@/assets/linkedin.png"),
      githubIcon: require("@/assets/github.png"),
    }
  },
}
</script>

<style scoped>
.app-footer {
  background-color: #4caf50; /* Dark background color */
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
}

.footer-name {
  font-size: 1.6em;
  margin: 0;
  padding-bottom: 10px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-links a {
  display: inline-block;
}

.social-links img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
