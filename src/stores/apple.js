import { action, observable, computed, runInAction } from 'mobx'

class AppleStore {

  @observable index = 0

  @observable btnDisabled = false

  @observable apples = []

  @action.bound async pick () {
    runInAction(() => {
      this.btnDisabled = true
    })
    await new Promise(resolve => setTimeout(resolve, 800))
    runInAction(() => {
      this.index++
      this.apples.push({
        id: this.index,
        weight: 100 + Math.floor(Math.random() * 50),
        eated: false
      })
      this.btnDisabled = false
    })
  }

  @action.bound eating (id) {
    this.apples.filter(apple => apple.id === id)[0].eated = true
  }

  @computed get leftApples () {
    return this.apples.filter(apple => !apple.eated)
  }

  @computed get eatedApples () {
    return this.apples.filter(apple => apple.eated)
  }
}

export default AppleStore