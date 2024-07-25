<template>
  <div class="header-glass"></div>
  <div class="header-glass header-glass-top"></div>
  <div class="header-glass-edge header-glass-edge-bottom"></div>
  <div class="header-glass-edge header-glass-edge-top"></div>
</template>

<style>
/* .navbar > :where(:not('.header-glass')) */
:where(.navbar > *:not(.header-glass, .header-glass-edge, .header-glass-edge-top)) {
  z-index: 1;
}
.header-glass-top {
  top: calc(-1 * var(--extended-by));
  -webkit-mask-image: linear-gradient(to top, black 0, black var(--cutoff), transparent var(--cutoff));
  mask-image: linear-gradient(to top, black 0, black var(--cutoff), transparent var(--cutoff));
}
.header-glass {
  --extended-by: 100px;
  --filter: blur(30px);
  --cutoff: calc(100% - var(--extended-by));
  position: absolute;
  inset: 0;
  bottom: calc(-1 * var(--extended-by));
  -webkit-backdrop-filter: var(--filter);
  backdrop-filter: var(--filter);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, black 0, black var(--cutoff), transparent var(--cutoff));
  mask-image: linear-gradient(to bottom, black 0, black var(--cutoff), transparent var(--cutoff));
}

.header-glass-edge-top {
  bottom: calc(100% - var(--offset) + var(--thickness));
  -webkit-mask-image: linear-gradient(to top, black 0, black var(--offset), transparent var(--offset));
  mask-image: linear-gradient(to top, black 0, black var(--offset), transparent var(--offset));
}
.header-glass-edge-bottom {
  top: calc(100% - var(--offset) + var(--thickness));
  -webkit-mask-image: linear-gradient(to bottom, black 0, black var(--offset), transparent var(--offset));
  mask-image: linear-gradient(to bottom, black 0, black var(--offset), transparent var(--offset));
}
.header-glass-edge {
  --extended-by: 80px;
  --offset: 20px;
  --thickness: 2px;
  --filter: blur(90px) saturate(160%) brightness(1.3);

  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  height: calc(var(--extended-by) + var(--offset));
  -webkit-backdrop-filter: var(--filter);
  backdrop-filter: var(--filter);
  pointer-events: none;
}
</style>
