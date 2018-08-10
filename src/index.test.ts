import ora from '.'

const delayO = (time: number) => new Promise(r => setTimeout(r, time))
const delayX = (time: number) => new Promise((_, r) => setTimeout(r, time))

const curried = ora('loading...')
{
  const promise = curried(delayO(1000))
  promise.then(console.log)
}
{
  const promise = curried(delayX(1000))
  promise.then(console.log)
}
