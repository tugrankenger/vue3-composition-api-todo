<template>
  <div class="wrapper">
    <header>
      <h1>Header</h1>
    </header>
    <aside>
      <h2>Aside</h2>
    </aside>
    <main>
      <slot />
    </main>
    <footer>
      <h4>Footer</h4>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-areas:
    'header header header'
    'aside main main'
    'footer footer footer';
  grid-template-rows: 70px auto 100px;
  grid-template-columns: max-content auto;
  min-height: 100vh;
}

header {
  grid-area: header;
  background-color: lime;
}

aside {
  grid-area: aside;
  background-color: skyblue;
  padding: 1em;
}

main {
  grid-area: main;
  background-color: red;
}

footer {
  grid-area: footer;
  background-color: orange;
}
</style>
