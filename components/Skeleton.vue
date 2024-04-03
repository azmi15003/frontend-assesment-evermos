<template>
  <a class="card" id="card-link" target="_blank">
    <div class="card__footer" id="card-footer">
      <div class="skeleton skeleton-text skeleton-footer"></div>
    </div>

    <div class="card__body">
      <div class="card__body body__text" id="card-details">
        <div class="skeleton skeleton-text skeleton-text__body"></div>
      </div>
      <div class="card__body body__text" id="card-details">
        <div class="skeleton skeleton-text skeleton-text__body"></div>
      </div>
      <div class="card__body body__text" id="card-details">
        <div class="skeleton skeleton-text skeleton-text__body"></div>
      </div>

      <div class="card__body body__img">
        <img class="skeleton-box" alt="" id="cover-img" />
      </div>
    </div>

    <div class="card__footer" id="card-footer">
      <div class="skeleton skeleton-text skeleton-footer"></div>
    </div>
  </a>
</template>

<style lang="scss">
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 100%;
  height: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}

.skeleton-text__body {
  width: 75%;
}

.skeleton-footer {
  width: 30%;
}
</style>
