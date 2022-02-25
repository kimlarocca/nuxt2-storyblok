<template>
  <div class="styleguide l-container">
    <v-spacer size="quad" />
    <h1 class="u-space--bottom">H1 Lorem Ipsum Dolor Sit Amet</h1>
    <h2 class="u-space--bottom">H2 Lorem Ipsum Dolor Sit Amet</h2>
    <h3 class="u-space--bottom">H3 Lorem Ipsum Dolor Sit Amet</h3>
    <h4 class="u-space--bottom">H4 Lorem Ipsum Dolor Sit Amet</h4>
    <h5 class="u-space--bottom">H5 Lorem Ipsum Dolor Sit Amet</h5>
    <h6>H6 Lorem Ipsum Dolor Sit Amet</h6>
    <v-spacer size="quin" />
    <p class="u-space--bottom">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, esse
      eum ex explicabo facere maiores minus mollitia nulla qui saepe tempora
      veritatis. Dolore ducimus fuga provident sed temporibus. Ab, perspiciatis.
    </p>
    <p class="u-space--bottom">
      Here is some <strong>bold text</strong> and some <em>italic text</em>.
    </p>
    <p>
      <a href="#">this is an inline link</a>
    </p>
    <v-spacer size="double" />
    <v-button> this is a button </v-button>
    <v-spacer size="quin" />
    <div class="colors l-grid">
      <div class="u-background-color--primary">
        <span><p>primary #000e29</p></span>
      </div>
    </div>
    <v-spacer size="double" />
    <div class="colors l-grid l-grid--3up">
      <div class="u-background-color--secondary">
        <span><p>secondary #a7e2e3</p></span>
      </div>
      <div style="background: var(--color-secondary-lighter)">
        <span><p>secondary lighter #EFF9F9</p></span>
      </div>
      <div style="background: var(--color-secondary-darker)">
        <span><p>secondary darker #83C6C9</p></span>
      </div>
      <div class="u-background-color--tertiary">
        <span><p>tertiary #7F7CAF</p></span>
      </div>
      <div style="background: var(--color-tertiary-lighter)">
        <span><p>tertiary lighter #CCCCDE</p></span>
      </div>
      <div style="background: var(--color-tertiary-darker)">
        <span><p>tertiary darker #3E3E74</p></span>
      </div>
      <div class="u-background-color--quaternary">
        <span><p>quaternary #f2cc8f</p></span>
      </div>
      <div style="background: var(--color-quaternary-lighter)">
        <span><p>quaternary lighter #fcf2e9</p></span>
      </div>
      <div style="background: var(--color-quaternary-darker)">
        <span><p>quaternary lighter #db9f3d</p></span>
      </div>
      <div class="u-background-color--gray--light">
        <span><p>light gray #f0f0f0</p></span>
      </div>
      <div class="u-background-color--gray">
        <span><p>gray #d3d3d3</p></span>
      </div>
      <div class="u-background-color--gray--dark">
        <span><p>dark gray #000e29</p></span>
      </div>
    </div>
    <v-spacer size="quin" />
    <blockquote>Example of a block quote</blockquote>
    <v-spacer size="double" />
    <ul>
      <li>An unordered bulleted list</li>
      <li>Item 2</li>
      <li>List Item 3</li>
    </ul>
    <v-spacer size="double" />
    <ol>
      <li>An ordered list</li>
      <li>Item 2</li>
      <li>List Item 3</li>
    </ol>
    <v-spacer size="double" />
    <hr />
    <v-spacer size="double" />
  </div>
</template>

<script>
export default {
  name: 'Styleguide',
}
</script>

<style lang="scss">
.styleguide {
  .colors div {
    position: relative;
    height: 150px;

    span {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      padding: var(--space-1);
    }
  }
}
</style>