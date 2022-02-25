<script>
export default {
  name: 'Logout',
  layout: 'blank',
  mounted () {
    this.$router.push({
      path: '/'
    })
  }
}
</script>