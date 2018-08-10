import * as curryN from 'ramda/src/curryN'
import * as ora from 'ora'

export = curryN(2, async (text: string, p: Promise<any>) => {
  const spinner = ora(text).start()
  const {succeed, fail} = spinner

  try {
    await p
    spinner.succeed()
  } catch(ex) {
    spinner.fail()
  }
})

