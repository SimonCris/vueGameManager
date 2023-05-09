<template>
  <div>
  </div>
</template>

<script>
import { GameTypeEnum, PiattaformaEnum } from './models/game';

export default {

  firebase: {
    games: []
  },
  data() {
    return {
      gameTypes: GameTypeEnum.properties,
      gamePlatforms: PiattaformaEnum.properties
    }
  }
  
}
</script>

<style lang="scss">

</style>
